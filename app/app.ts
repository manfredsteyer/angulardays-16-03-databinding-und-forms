import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location} from 'angular2/router';
import {Home } from './home/home';
import {FlugSuchen } from './flug-suchen/flug-suchen';
import {FlugEdit } from './flug-edit/flug-edit';

    @Component({
        selector: 'app',
        templateUrl: 'app/app.html',
        directives: [ROUTER_DIRECTIVES] 
    })
    @RouteConfig([

            { path: '/', component: Home, name: 'Home', useAsDefault: true },
            { path: '/flug-suchen', component: FlugSuchen, name: 'FlugSuchen' },
            { path: '/flug-edit/:id', component: FlugEdit, name: 'FlugEdit' }

    ])
    export class App {

        info = "Flug-Suchen App";

        constructor(private location: Location) {
        }

        isActive(path): boolean {
            return this.location.path() == path;
        }

    }