import { Injectable } from "@angular/core";
import { Product } from "../model/product";
import { ProductService } from "./product-service";
import { Observable } from 'rxjs';
import { of } from 'rxjs';



@Injectable()
export class FakeService implements ProductService {
    products: Array<Product> = [
        {id: 1, reference: 'REF1', nom: 'Nom1', availability: 1, prixUnitaire: 10},
        {id: 2, reference: 'REF2', nom: 'Nom2', availability: 2, prixUnitaire: 20},
        {id: 3, reference: 'REF3', nom: 'Nom3', availability: 3, prixUnitaire: 30}
    ]
    findAll(): Observable<Array<Product>> {
        return of(this.products);
    }
    findOne(id: number): Observable<Product> {
        if ( id < 1 || id > this.products.length )
            throw new Error("No Such product.");
        return of(this.products[id-1]);
    }
    create(product: Product): Observable<Product> {
        product.id = this.products.length;
        this.products.push(product);
        return of(product);
    }
    update(product: Product): Observable<Product> {
        if (product.id < 1 || product.id > this.products.length )
            throw new Error("No such product.");
        this.products[product.id-1] = product;

        return of(product);
    }
    delete(id: number): Observable<void> {
        if (id < 1 || id > this.products.length )
            throw new Error("No such product.");
        this.products.splice(id-1,1);
        let i = 0;
        this.products.forEach(p => p.id=++i);

        return of();
    }
}
