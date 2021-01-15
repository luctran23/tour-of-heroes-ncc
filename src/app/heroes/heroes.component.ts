import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero = {
    id: 1,
    name: "Johnny Dang"
  }
  heroes:Hero[];
  selectedHero:Hero;

  constructor(private heroservice:HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes():void {
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}
