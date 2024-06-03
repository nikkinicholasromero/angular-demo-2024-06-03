import { Component } from "@angular/core";
import { FlyingHeroesPipe } from "../pipe/flying-heroes.pipe";

@Component({
  standalone: true,
  selector: 'app-flying-heroes',
  template: `
    <button type="button" class="btn-primary" (click)="reset()">Reset</button>
    <label for="hero-name">New Hero Name: </label>
    <input type="text" placeholder="Hero Name" #box (keyup.enter)="addHero(box.value); box.value = ''">

    @for (hero of (heroes | flyingHeroes); track hero.name) {
      <div>{{ hero.name }}</div>
    }
  `,
  imports: [
    FlyingHeroesPipe
  ]
})
export class FlyingHeroes {
  heroes: {
    name: string,
    canFly: boolean
  }[] = [];

  addHero(name = ''): void {
    if (name.trim() == '') {
      return;
    }

    this.heroes.push({
      name: name,
      canFly: true
    });
  }

  reset(): void {
    this.heroes = [];
  }
}
