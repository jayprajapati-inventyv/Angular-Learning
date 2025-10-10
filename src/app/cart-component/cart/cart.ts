import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  @Input() cart: any[] = [];
  @Output() removeOne = new EventEmitter<any>();
  @Output() removeAll = new EventEmitter<any>();

  get total() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  onRemoveOne(item: any) {
    this.removeOne.emit(item);
  }

  onRemoveAll(item: any) {
    this.removeAll.emit(item);
  }
}
