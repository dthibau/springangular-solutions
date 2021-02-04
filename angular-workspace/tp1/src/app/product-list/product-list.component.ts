import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['reference', 'nom', 'availability'];


  public products: Array<any> = [];

  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  
  }


}
