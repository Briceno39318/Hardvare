import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HardvareProduct } from '../../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() opened: boolean;
  @Input() cartProducts: HardvareProduct[];

  @Output() closeCart: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  //this in fact removes the product from the list but it contains a bug, the item continues to be displayed.
  //this is due to the fact that the initial list still contains the element inside it.
  remove(product: HardvareProduct){
    product.isSelected = false;
  }

  close(): void {
    this.closeCart.emit();
  }

}
