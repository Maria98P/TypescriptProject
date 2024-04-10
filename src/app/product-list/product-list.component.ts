import { Component, OnInit } from '@angular/core';
import { iproduct } from '../iproduct';
import { product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products!: iproduct[];
  product!: iproduct;

constructor(private route: ActivatedRoute,
  private cartService: CartService){}

onAddToCart(){
  this.cartService.addToCart(this.product)
}
ngOnInit(){
  this.products = product;
  const index:number=+this.route.snapshot.params['index'];
  this.product= this.products[index];
}
}
