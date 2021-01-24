import { Component, OnInit } from '@angular/core';
import { HardvareProductsService } from 'src/app/core/services/hardvare-products.service';
import { HardvareProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-hardware-home',
  templateUrl: './hardware-home.component.html',
  styleUrls: ['./hardware-home.component.scss']
})
export class HardwareHomeComponent implements OnInit {

  public products: HardvareProduct[] = [];
  public filteredProducts: HardvareProduct[] = [];
  public cartProducts: HardvareProduct[] = [];
  public filterQuery: string = '';
  public showCart: boolean = false;

  constructor(private hardvareService: HardvareProductsService) { }

  ngOnInit(): void {
    this.hardvareService
    .getProducts()
    .subscribe(products => {
      this.products = products;
      this.applyFilters();
    });
  }

  toggleProduct(product: HardvareProduct) {
    product.isSelected = !product.isSelected;
  }

  applyFilters() {
    if(!this.filterQuery)
      this.filteredProducts = this.products;
    else
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.filterQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(this.filterQuery.toLowerCase())
      )
  }

  clearQuery() {
    this.filterQuery = '';
    this.applyFilters();
  }

  openCart(){
    this.cartProducts = this.products.filter(product => product.isSelected);
    this.showCart = true;
  }

  closeCart() {
    this.showCart = false;
  }
}
