import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/state/product.model';
import { createCartItem } from './cart.model';
import { CartQuery } from './cart.query';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor(private cartStore: CartStore, private cartQuery: CartQuery,) {}

  addProductToCart(productId: Product['id']) {

    const findItem = this.cartQuery.getEntity(productId);

    if (!!findItem) {
      return this.cartStore.updateQuantity(productId);
    }

    const item = createCartItem({
      productId
    });

    return this.cartStore.add(item);

  }

  subtractProductFromCart(productId: Product['id']) {

    const findItem = this.cartQuery.getEntity(productId);

    if (!!findItem) {

      if (findItem.quantity === 1) {
        return this.cartStore.remove(productId);
      }

      return this.cartStore.updateQuantity(findItem?.productId, -1);

    }

  }

  remove(productId: Product['id']) {
    this.cartStore.remove(productId);
  }

}
