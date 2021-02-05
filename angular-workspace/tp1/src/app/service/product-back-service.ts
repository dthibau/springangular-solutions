import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SERVER_API_URL } from "../app.constants";
import { Product } from "../model/product";
import { ProductService } from "./product-service";

@Injectable()
export class ProductBackService implements ProductService {
    private BASE_URL = SERVER_API_URL + '/produits'

    constructor(private http: HttpClient) {}

    findAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.BASE_URL);
    }
    findOne(id: number): Observable<Product> {
        return this.http.get<Product>(this.BASE_URL+'/'+id);
    }
    create(product: Product): Observable<Product> {
        throw new Error("Method not implemented.");
    }
    update(product: Product): Observable<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<void> {
        throw new Error("Method not implemented.");
    }

}
