import {Component} from 'angular2/core';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';

@Component({
  selector: 'my-app'
  , templateUrl: 'app/dashboard.component.html'
  , directives: [ROUTER_DIRECTIVES]
  , providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/heroes'
    , name: 'Heroes'
    , component: HeroesComponent
  }
  , {
    path: '/dashboard'
    , name: 'Dashboard'
    , component: DashboardComponent
    , useAsDefault: true
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}