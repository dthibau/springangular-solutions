import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product-service';

@Injectable({
  providedIn: 'root'
})
export class FakeProductService implements ProductService {
  products: Array<Product> = [
    { id: 1, reference: 'REF1', nom: 'Nom1', availability: 1, prixUnitaire: 10 },
    { id: 2, reference: 'REF2', nom: 'Nom2', availability: 2, prixUnitaire: 20 },
    { id: 3, reference: 'REF3', nom: 'Nom3', availability: 3, prixUnitaire: 30 }
  ]
  findAll(): Product[] {
    return this.products;
  }
  findOne(id: number): Product {
    if (id < 1 || id > this.products.length)
      throw new Error("No Such product.");
    return this.products[id - 1];
  }
  create(product: Product): Product {
    product.id = this.products.length;
    this.products.push(product);
    return product;
  }
  update(product: Product): Product {
    if (product.id < 1 || product.id > this.products.length)
      throw new Error("No such product.");
    this.products[product.id - 1] = product;

    return product;
  }
  delete(id: number): void {
    if (id < 1 || id > this.products.length)
      throw new Error("No such product.");
    this.products.splice(id - 1, 1);
  }
}
