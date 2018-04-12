import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: String = 'hola como ';

  user: Customer;

  constructor() {
    this.user = new Customer('Pedro', 'Rosales', '456879');
  }

  onClick() {
    alert('Adios');
  }
}
