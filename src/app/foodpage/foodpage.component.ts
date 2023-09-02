import { CartService } from './../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component , OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';


@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent  implements OnInit{
  food! : Foods;
  cartService: any;
cart: any;
  constructor(private activatedRoute:ActivatedRoute,
    private FoodService:FoodService, private CartService:CartService, 
    private router:Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = FoodService.getFoodById(params['id'])
      })
     }

  ngOnInit(): void {
    
  }
  addToCart(){
    this.CartService.addToCart( this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
