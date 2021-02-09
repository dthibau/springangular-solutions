import { Component, EventEmitter, OnInit, Output } from '@angular/core';


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

  constructor() { 
    console.log("Constructeur")
    this.name = "Hello"
  }

  ngOnInit(): void {
    
    this.products = [{reference: 'ref1', date:'2021'}, {reference: 'ref2', date:'2020'}]
    this.products.push({reference: 'ref3', date:'2019'})
    console.log("Init "+this.products)
  }

  toggleButton() {
    console.log("Toggle")
    this.disabled = !this.disabled
    this.toggleEvent.emit(this.disabled);
  }
}
