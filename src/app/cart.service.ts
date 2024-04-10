import { Injectable } from '@angular/core';
import { iproduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: iproduct[]=[];
  constructor() { }

  addToCart(obj: iproduct){
    if(this.cartItems.includes(obj)){
      obj.qtty ++
    }else {
      this.cartItems.push(obj)
    }
    
   

    if (obj) { // i kept getting errors and product is undefined in the console and added this hoping it would work but it didn't. console says its a type error, but in angualar i see none
      this.cartItems.push(obj);
      console.log(this.cartItems); 
    } else {
      console.error("Trying to add undefined product to cart!");
    }
    
  }


  getCart(){
    console.log(this.cartItems);
    return this.cartItems;
  }

  getTotal(){
    let total:number =0;
    this.cartItems.forEach((obj:iproduct) => {
     total  += obj.price * obj.qtty

    })
    total= total + (total *.10);
    return total
  }
}

