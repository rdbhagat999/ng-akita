import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/cart/state/cart.service';
import { Product } from '../state/product.model';
import { ProductsQuery } from '../state/products.query';
import { ProductsService } from '../state/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  loading$: Observable<boolean>;

  searchControl = new FormControl('');
  sortControl = new FormControl('title');

  constructor(private productsService: ProductsService, private productsQuery: ProductsQuery, private cartService: CartService) { }

  ngOnInit(): void {

    this.productsService.getAll().subscribe();

    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = combineLatest([
      this.searchControl.valueChanges.pipe(startWith('')),
      this.sortControl.valueChanges.pipe(startWith('title'))
    ]).pipe(
      switchMap(([searchTerm, sortBy]) => {
        return this.productsQuery.getProducts(searchTerm, sortBy as keyof Product)
      })
    );

  }

  addProductToCart({ id }: Product) {
    this.cartService.addProductToCart(id);
  }

  subtractProductFromCart({ id }: Product) {
    this.cartService.subtractProductFromCart(id);
  }

}
