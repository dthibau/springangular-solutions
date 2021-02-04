import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public name: string;
  public style: string;
  public disabled: boolean;
  public products: Array<any> = new Array();

  constructor() { 
    this.name = 'Hello world !!';
    this.style = "red";
    this.disabled = true;
  }

  ngOnInit(): void {
    this.products.push({date: '25/09/2020', reference :'pro1'});
    this.products.push({date: '21/03/2020', reference :'myr2'});
  
  }

  toggleButton() {
    this.disabled = ! this.disabled;
  }
}
