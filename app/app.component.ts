import {Component} from 'angular2/core';

export class Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { "id": 101, "name": "Edward Snowden" }
  , { "id": 102, "name": "Amazingly Awesome" }
  , { "id": 103, "name": "This Developer\'s Life" }
  , { "id": 104, "name": "Alex Bloomberg" }
  , { "id": 105, "name": "Scott Guthrie" }
  , { "id": 106, "name": "Mama Dayo" }
  , { "id": 107, "name": "Dr. Banjo" }
  , { "id": 108, "name": "Mrs. M. Banjo" }
  , { "id": 109, "name": "Stephen Dubner" }
  , { "id": 110, "name": "Deep Throat" }
]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <h2>My Heroes</h2>
    <ul>
      <li *ngFor="#hero of heroes">
        <span class"badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <h2>{{hero.name}} details!</h2>
    <div>
      <label>id:</label> {{hero.id}}
    </div>
    <div>
      <label>name:</label> {{hero.name}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})

export class AppComponent {
  public title = 'Tour of Heroes'
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  public heroes = HEROES;
}
