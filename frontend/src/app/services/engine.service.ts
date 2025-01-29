import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_engines, sample_tags } from 'src/data';
import { ENGINES_BY_SEARCH_URL, ENGINES_BY_TAG_URL, ENGINES_TAGS_URL, ENGINES_URL, ENGINE_BY_ID_URL } from '../shared/constants/urls';
import { Engine } from '../shared/models/Engine';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Engine[]> {
    return this.http.get<Engine[]>(ENGINES_URL);
  }

  getAllEnginesBySearchTerm(searchTerm: string) {
    return this.http.get<Engine[]>(ENGINES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ENGINES_TAGS_URL);
  }

  getAllEnginesByTag(tag: string): Observable<Engine[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Engine[]>(ENGINES_BY_TAG_URL + tag);
  }

  getEngineById(engineId:string):Observable<Engine>{
    return this.http.get<Engine>(ENGINE_BY_ID_URL + engineId);
  }

}
