import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes=[
    {id: 1, name: 'Nguyen Van Tuan'},
    {id: 2, name: 'Nguyen Van Tung'},
    {id: 3, name: 'Pham Thi Hien'},
    {id: 4, name: 'Bui Ngoc Minh'},
    {id: 5, name: 'Tran Anh Ngoc'},
    {id: 6, name: 'Phuong Tue Nhi'},
    {id: 7, name: 'Nong Viet Anh'},
    {id: 8, name: 'Nguyen Van Dep Trai'}
    ];
    return {heroes};
  }
  constructor() { }
  gebId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) : 11; 
  }
}
