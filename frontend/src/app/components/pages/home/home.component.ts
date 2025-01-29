import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EngineService } from 'src/app/services/engine.service';
import { Engine } from 'src/app/shared/models/Engine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  engines: Engine[] = [];
  constructor(private engineService: EngineService, activatedRoute: ActivatedRoute) {
    let enginesObservalbe:Observable<Engine[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        enginesObservalbe = this.engineService.getAllEnginesBySearchTerm(params.searchTerm);
      else if (params.tag)
        enginesObservalbe = this.engineService.getAllEnginesByTag(params.tag);
      else
        enginesObservalbe = engineService.getAll();

        enginesObservalbe.subscribe((serverEngines) => {
          this.engines = serverEngines;
        })
    })
  }

  ngOnInit(): void {
  }

}
