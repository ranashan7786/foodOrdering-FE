import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';













const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tags', component:HomeComponent},
  {path: 'food/:id', component:FoodpageComponent},
  {path:'cart-page', component:CartpageComponent},
  {path: 'login', component:LoginPageComponent},
  
  
  
  
  

  

  

  

  
  
  
 
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
