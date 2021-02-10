import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FakeProductService } from './service/fake-product.service';
import { ProductService } from './service/product-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { FournisseurPageComponent } from './fournisseur/fournisseur-page/fournisseur-page.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavigationBarComponent,
    ProductPageComponent,
    FournisseurPageComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductPageComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ProductListComponent },
          { path: 'new', component: ProductDetailComponent },
          { path: ':id', component: ProductDetailComponent }
        ] },
      { path: 'fournisseurs', component: FournisseurPageComponent}
    ])
  ],
  providers: [
    { provide: ProductService, useClass: FakeProductService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
