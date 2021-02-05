import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product = new Product();
  productForm!: FormGroup;
  private prixSubscription!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, 
    private productService: ProductService) { 
    
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if ( id !== null ) {
         this.productService.findOne(+id).subscribe(data => {
          this.product = data;
          this.buildForm();
         });
          
      } else {
        this.product = new Product();
        this.buildForm();
      }
      
    });
    
  }

  ngOnDestroy(): void {
    if ( this.prixSubscription != null ) {
      this.prixSubscription.unsubscribe();
    }
  }

  save() {
    let id = this.product.id;
    this.product = this.productForm.value;
    console.log(this.product);
    if ( id > 0 ) {
      this.product.id = id;
      this.productService.update(this.product).subscribe(data =>
        this.product = data); 
    } else {
      this.productService.create(this.product).subscribe(data =>
        this.product = data); 
    }

    this.router.navigate(['/products/list']);
  }

  private buildForm() {
    this.productForm = this.fb.group({
      reference: [this.product.reference, [Validators.required, Validators.maxLength(5)]],
      nom: [this.product.nom, [Validators.required, Validators.minLength(3)]],
      description: [this.product.description],
      prixUnitaire: [this.product.prixUnitaire, Validators.min(1)]
    });
    // Filter les lettres
    this.prixSubscription = this.productForm.get('prixUnitaire')!.valueChanges.subscribe((newValue) => {
      if ( newValue.match(/[a-z]/i) ) {
        this.productForm.get('prixUnitaire')!.setValue(newValue.replaceAll(/[a-z]/ig,''));
      }
    });

  }
}
