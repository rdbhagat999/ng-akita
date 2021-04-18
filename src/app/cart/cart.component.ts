import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/state/product.model';
import { CartItem } from './state/cart.model';
import { CartQuery } from './state/cart.query';
import { CartService } from './state/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items$: Observable<(CartItem & Product)[]>;
  total$: Observable<number>;

  constructor(private cartQuery: CartQuery, private cartService: CartService,) {
    this.items$ = this.cartQuery.selectItems$;
    this.total$ = this.cartQuery.selectTotal$;
  }

  ngOnInit(): void {

  }

  remove({ productId }: CartItem) {
    this.cartService.remove(productId);
  }

}
