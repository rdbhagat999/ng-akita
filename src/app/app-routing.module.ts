import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, pathMatch: 'full',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'cart', component: CartComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'products', component: ProductsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'products/:id', component: ProductComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'posts', component: PostsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'posts/:id', component: PostComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
