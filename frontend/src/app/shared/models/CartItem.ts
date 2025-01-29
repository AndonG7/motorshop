import { Engine } from "./Engine";

export class CartItem{
  constructor(public engine:Engine){ }
  quantity:number = 1 ;
  price: number = this.engine.price;
}
