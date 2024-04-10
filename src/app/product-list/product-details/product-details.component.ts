import { Component, OnInit } from '@angular/core';
import { iproduct } from '../../iproduct';
import { product } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
products!: iproduct[];
product!: iproduct;

constructor(private route:ActivatedRoute,
  private cartService: CartService
  ){}

onAddToCart(){
this.cartService.addToCart(this.product)


}

ngOnInit(): void {
  this.products=product;
  const index:number=+this.route.snapshot.params['index'];
  this.product= this.products[index];
  
}

}
