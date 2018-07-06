import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe }  from '../shared/convert-to-spaces.pipe';

import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products' , component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
    ])
  ],
  declarations: [
    ProductListComponent, 
    ProductDetailComponent, 
    ConvertToSpacesPipe
  ],
  providers : [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }