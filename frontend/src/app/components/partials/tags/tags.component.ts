import { Component, OnInit } from '@angular/core';
import { EngineService } from 'src/app/services/engine.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(engineService:EngineService) {
    engineService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

}
