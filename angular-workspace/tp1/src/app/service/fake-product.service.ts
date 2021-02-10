import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product-service';

@Injectable({
  providedIn: 'root'
})
export class FakeProductService implements ProductService {
  products: Array<Product> = [
    {id: 1, reference: 'REF1',nom: 'NOM1', availability:1, prixUnitaire: 20},
    {id: 2, reference: 'REF2',nom: 'NOM2' ,availability:1, prixUnitaire: 20},
    {id: 3, reference: 'REF3',nom: 'NOM3',availability:1, prixUnitaire: 30}
]
  constructor() { }

  findAll(): Product[] {
    return this.products;
  }
  findOne(id: number): Product {
    if ( id > 0 && id <= this.products.length )
       return this.products[id-1]
    throw new Error('Bad Idea.');
  }
  create(product: Product): Product {
    product.id = this.products.length+1;
    this.products.push(product);
    return product;
  }
  update(product: Product): Product {
    if ( product.id > 0 && product.id <= this.products.length ) {
      this.products[product.id-1] = product;
    } else {
      throw new Error('Method not implemented.');
    }
    return product;  
    
  }
  delete(id: number): void {
    if (id < 1 || id > this.products.length )
      throw new Error("No such product.");
    this.products.splice(id-1,1);
    this.products.forEach((p,index) => p.id = index+1);
  }
}
