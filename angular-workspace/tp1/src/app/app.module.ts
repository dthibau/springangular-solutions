import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FakeProductService } from './service/fake-product.service';
import { ProductService } from './service/product-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    { provide: ProductService, useClass: FakeProductService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
