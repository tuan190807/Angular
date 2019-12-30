import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashbroard',
  templateUrl: './dashbroard.component.html',
  styleUrls: ['./dashbroard.component.css']
})
export class DashbroardComponent implements OnInit {
  heroes: Hero[] = []
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // hien thi danh sach
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
