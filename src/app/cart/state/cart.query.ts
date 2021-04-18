import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Product } from 'src/app/products/state/product.model';
import { ProductsQuery } from 'src/app/products/state/products.query';
import { CartItem } from './cart.model';
import { CartStore, CartState } from './cart.store';

function joinItems([cartItems, products]) {
  return cartItems.map((cartItem: CartItem) => {
    const product = products[cartItem?.productId] as Product;
    return {
      ...cartItem,
      ...product,
      total: cartItem?.quantity * product?.price
    } as CartItem;
  });
}

@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState> {

  constructor(protected store: CartStore, private productsQuery: ProductsQuery) {
    super(store);
  }

  selectItems$ = combineLatest([
    this.selectAll(),
    this.productsQuery.selectAll({ asObject: true })
  ]).pipe(
    map(joinItems),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  selectTotal$ = this.selectItems$.pipe(
    map((items: CartItem[]) => items?.reduce((acc, item) => acc + item?.total, 0))
  );

}
