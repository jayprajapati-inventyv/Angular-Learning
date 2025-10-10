import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Headphones', price: 2000 },
  ];
  // EventEmitter to send product to parent
  @Output() addToCart = new EventEmitter<any>();

  onAdd(product: any) {
    this.addToCart.emit(product); // Send product to parent
  }
}
