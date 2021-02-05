import { Product } from "../model/product";
import { Observable } from 'rxjs';

export abstract class ProductService {

    abstract findAll(): Observable<Array<Product>>
    abstract findOne(id: number): Observable<Product>
    abstract create(product: Product): Observable<Product>
    abstract update(product: Product): Observable<Product>
    abstract delete(id: number): Observable<void>

}
