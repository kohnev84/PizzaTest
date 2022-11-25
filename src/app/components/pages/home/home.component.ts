import { Component, OnInit } from '@angular/core';
import { Product, ProductServies } from 'src/app/servies/product-servies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productServies: ProductServies) { }

  ngOnInit(): void {
    this.productServies.getProduct().subscribe((res) => this.products = res)
  }

}
