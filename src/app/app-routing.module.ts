import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';

const routes: Routes = [
  {path:'product-list', component: ProductListComponent},
  {path: '', redirectTo : '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'productDetails', component:ProductDetailsComponent},
  {path: 'productDetails/:index', component:ProductDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
