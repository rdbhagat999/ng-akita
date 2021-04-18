import { Injectable } from '@angular/core';
import { QueryConfig, QueryEntity } from '@datorama/akita';
import { Product } from './product.model';
import { ProductsStore, ProductsState } from './products.store';

@Injectable({ providedIn: 'root' })
@QueryConfig({ sortBy: 'price' })
export class ProductsQuery extends QueryEntity<ProductsState> {

  constructor(protected store: ProductsStore) {
    super(store);
  }

  getProducts(searchTerm: string, sortBy: keyof Product) {
    return this.selectAll({
      sortBy,
      filterBy: (entity) => entity.title.toLocaleLowerCase().includes(searchTerm)
    });
  }

}
