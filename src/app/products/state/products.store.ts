import { Injectable } from '@angular/core';
import { EntityState, EntityStore, MultiActiveState, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface ProductsState extends EntityState<Product>, MultiActiveState  {}
@Injectable({ providedIn: 'root' })
  @StoreConfig({
    name: 'products',
    cache: {
      ttl: 3600000
    }
  })
export class ProductsStore extends EntityStore<ProductsState> {

  constructor() {
    super( { active: [] } );
  }

}
