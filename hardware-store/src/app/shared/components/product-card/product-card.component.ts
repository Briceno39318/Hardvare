import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HardvareProduct } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: HardvareProduct;

  @Output() toggleProduct: EventEmitter<HardvareProduct> = new EventEmitter<HardvareProduct>();
  constructor() { }

  ngOnInit(): void {
  }

  addRemoveFromCart(){
    this.toggleProduct.emit(this.product);
  }

}
