import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../service/product-service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  name: string;
  style: string = 'red'
  disabled: boolean = true
  products!: Array<any>;

  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor(private productService: ProductService) { 
    console.log("Constructeur")
    this.name = "Hello"
  }

  ngOnInit(): void { 
    this.products = this.productService.findAll();
    console.log("Init "+this.products)
  }

  toggleButton() {
    console.log("Toggle")
    this.disabled = !this.disabled
    this.toggleEvent.emit(this.disabled);
  }
}
