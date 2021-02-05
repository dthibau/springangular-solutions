import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, 
    private productService: ProductService) { 
    
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if ( id !== null ) {
        this.product = this.productService.findOne(+id);
      } else {
        this.product = new Product();
      }
      this.buildForm();
    });
    
  }

  save() {
    let id = this.product.id;
    this.product = this.productForm.value;
    if ( id > 0 ) {
      this.product = this.productService.update(this.product); 
    } else {
      this.product = this.productService.create(this.product); 
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
    this.productForm.get('prixUnitaire')!.valueChanges.subscribe((newValue) => {
      console.log("Value changed !");
      if ( newValue.match(/[a-z]/i) ) {
        this.productForm.get('prixUnitaire')!.setValue(newValue.replaceAll(/[a-z]/ig,''));
      }
    });

  }
}
