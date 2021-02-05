import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './service/product-service';
import { FakeService } from './service/fake-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './product/product-page/product-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductPageComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductPageComponent }
    ])
  ],
  providers: [
    { provide: ProductService, useClass: FakeService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
