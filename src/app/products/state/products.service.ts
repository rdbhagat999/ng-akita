import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { ProductsStore, ProductsState } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsService extends NgEntityService<ProductsState> {

  constructor(protected store: ProductsStore) {
    super(store);
  }

}
