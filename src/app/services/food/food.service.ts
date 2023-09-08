import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})

export class FoodService {
  static getFoodById(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) {}


  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }



  getAllFoodBytag(tag: string): Foods[] { 
    return tag == 'All'?
     this.getAll() : this.getAll().filter((food) => food.tags?.includes(tag));
  }

getAllTag():Tag[]{
    return[
      {name: 'All', count: 14 },
      {name: 'Fastfood', count: 4 },
      {name: 'Pizza', count: 4 },
      {name: 'Soup', count: 2 },
      {name: 'Lunch', count: 4 },
      {name: 'SlowFood', count: 2},
      {name: 'Fry', count: 1 },
      {name: 'Burger', count: 4 },
    ];

  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza pepperoni',
        cookTime: '10-20',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 1.4,
        imageUrl: '/assets/food (1).jpg',
        tags: ['Lunch','Pizza'],
        quantity: 5,
      },
      {
        id: 2,
        name: 'chicken krahi',
        cookTime: '20-30',
        price: 18,
        favorite: true,
        origins: ['pakistan'],
        star: 1.2,
        imageUrl: '/assets/food (2).jpg',
        tags: ['Lunch'],
        quantity: 1
      },
      {
        id: 3,
        name: 'vegetable burger',
        cookTime: '10-15',
        price: 14,
        favorite: false,
        origins: ['italy'],
        star: 4.4,
        imageUrl: '/assets/food (3).jpg',
        tags: ['Fastfood', 'Burger'],
        quantity:2
      },
      {
        id: 4,
        name: 'finger chips',
        cookTime: '05-10',
        price: 12,
        favorite: true,
        origins: ['pakistan'],
        star: 1.3,
        imageUrl: '/assets/food (4).jpg',
        tags: ['SlowFood', 'Fry'],
        quantity:1
      },
      {
        id: 5,
        name: 'Tarte flambee',
        cookTime: '10-30',
        price: 10,
        favorite: true,
        origins: ['pakistan'],
        star: 3.5,
        imageUrl: '/assets/food (5).jpg',
        tags: ['Fastfood', 'Pizza'],
        quantity:1
      },
      {
        id: 6,
        name: 'Maltese',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['italy'],
        star: 4.7,
        imageUrl: '/assets/food (6).jpg',
        tags: ['Fastfood', 'Pizza', 'Lunch'],
        quantity:1
      },
      {
        id: 7,
        name: 'vegetable soup',
        cookTime: '15-20',
        price: 5,
        favorite: true,
        origins: ['italy'],
        star: 4.6,
        imageUrl: '/assets/food (7).jpg',
        tags: [ 'SlowFood','Soup'],
        quantity:3
      },
      {
        id: 8,
        name: 'Flash burger',
        cookTime: '20-25',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food (8).jpg',
        tags: ['Burger'],
        quantity:1
      },
      {
        id: 9,
        name: 'Flash pizza',
        cookTime: '15-25',
        price: 17,
        favorite: false,
        origins: ['italy,pakistan'],
        star: 4.5,
        imageUrl: '/assets/food (9).jpg',
        tags: [ 'Pizza',],
        quantity:3
      },
      {
        id: 10,
        name: 'Cream soup',
        cookTime: '10-15',
        price: 5,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food (10).jpg',
        tags: [ 'Soup'],
        quantity:3
      },
      {
        id: 11,
        name: 'Sweet burger',
        cookTime: '20-30',
        price: 14,
        favorite: false,
        origins: ['italy,indian'],
        star: 4.5,
        imageUrl: '/assets/food (11).jpg',
        tags: ['Burger'],
        quantity:2
      },
      {
        id: 12,
        name: 'Twist burger',
        cookTime: '11-15',
        price: 10,
        favorite: true,
        origins: ['pakistan'],
        star: 4.5,
        imageUrl: '/assets/food (12).jpg',
        tags: ['Fastfood','Burger' ,'Lunch'],
        quantity:1
      },
    ];
  }
}
