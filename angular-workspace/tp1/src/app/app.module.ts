import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './service/product-service';
import { FakeService } from './service/fake-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { FournisseurPageComponent } from './fournisseur/fournisseur-page/fournisseur-page.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductBackService } from './service/product-back-service';
import { BasicAuthHtppInterceptorServiceInterceptor } from './service/basic-auth-htpp-interceptor-service.interceptor';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductPageComponent,
    NavigationBarComponent,
    FournisseurPageComponent,
    ProductDetailComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
        path: 'products', component: ProductPageComponent, children:
          [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'list', component: ProductListComponent },
            { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
            { path: 'new', component: ProductDetailComponent,canActivate:[AuthGaurdService] },
            { path: ':id', component: ProductDetailComponent, canActivate:[AuthGaurdService] },
            
          ]
      },
      { path: 'fournisseurs', component: FournisseurPageComponent }
    ])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorServiceInterceptor, multi:true},
    { provide: ProductService, 
      useFactory: (httpClient: HttpClient) => true ? new ProductBackService(httpClient) : new FakeService(),
      deps: [HttpClient] 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
