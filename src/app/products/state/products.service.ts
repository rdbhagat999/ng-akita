import { Injectable } from '@angular/core';
import { withTransaction, cacheable, ID } from '@datorama/akita';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductsStore, ProductsState } from './products.store';

export const products = [
  {
    id: 3,
    title: 'Rx',
    description: 'Is a set of libraries to compose asynchronous and event-based programs using observable collections and Array style composition in JavaScript',
    price: 30
  },
  {
    id: 1,
    title: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.',
    price: 10
  },
  {
    id: 2,
    title: 'Angular',
    description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
    price: 20
  }
];
@Injectable({ providedIn: 'root' })
export class ProductsService extends NgEntityService<ProductsState> {

  constructor(protected productsStore: ProductsStore) {
    super(productsStore);
  }

  getAll() {
    const request = of(products).pipe(
      delay(1500),
      withTransaction(products => {
        this.store.set(products);
      })
    );

    return cacheable(this.productsStore, request);
  }

  getById(id: ID) {
    const product = products.find(current => current.id === +id);

    return of(product).pipe(
      delay(750),
      withTransaction(product => {
        this.store.add(product);
      })
    );
  }

}
