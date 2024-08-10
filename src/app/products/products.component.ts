import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Note: `styleUrl` should be `styleUrls`
})
export class ProductsComponent {
  title: string = '';

  initialize(): void {
    this.title = 'Products List';
  }
}
