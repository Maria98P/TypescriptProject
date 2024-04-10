import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { iproduct } from '../iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  total!:number;
  cartItems! :iproduct[];
constructor(private cartService: CartService){

}
ngOnInit(): void {
  this.cartItems = this.cartService.getCart()
  this.total = this.cartService.getTotal()
}
}
