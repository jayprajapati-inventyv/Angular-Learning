import { Component } from '@angular/core';
import { Cart } from './cart/cart';
import { ProductList } from './product-list/product-list';


@Component({
  selector: 'app-cart-component',
  imports: [Cart, ProductList],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss'
})
export class CartComponent {
  cart: any[] = [];
  addProductToCart(product: any) {
    const existing = this.cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }
  removeOneFromCart(product: any) {
    const existing = this.cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity--;
      if (existing.quantity === 0) {
        this.removeAllFromCart(product); // if qty hits 0 → remove completely
      }
    }
  }
  removeAllFromCart(product: any) {
    this.cart = this.cart.filter(item => item.id !== product.id);
  }
}
