import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EngineService } from 'src/app/services/engine.service';
import { Engine } from 'src/app/shared/models/Engine';

@Component({
  selector: 'app-engine-page',
  templateUrl: './engine-page.component.html',
  styleUrls: ['./engine-page.component.css']
})
export class EnginePageComponent implements OnInit {
  engine!: Engine;
  constructor(activatedRoute:ActivatedRoute, engineService:EngineService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        engineService.getEngineById(params.id).subscribe(serverEngine => {
        this.engine = serverEngine;
      });
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.engine);
    this.router.navigateByUrl('/cart-page');
  }
}
