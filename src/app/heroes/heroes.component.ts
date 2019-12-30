import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import { HEROES } from '../hero-mock';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // khai bai hien thi chi tiet anh hung
  // selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  add(name: string): void{
    name = name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero));
  }
  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  // ham lay ds anh hung
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }
}
