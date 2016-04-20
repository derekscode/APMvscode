import {Component} from 'angular2/core';

import {ProductListComponent} from './products/product-list.component'

@Component({
    selector: 'pm-app',
    templateUrl: 'app/views/index.html',
    directives: [ProductListComponent]
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}