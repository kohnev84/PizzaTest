import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/servies/product-servies';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() product!: Product;
  quantity: number = 1
  constructor() { }

  ngOnInit(): void {

  }

  increaseQuantity() {
    this.quantity++
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--
    }
  }
}
