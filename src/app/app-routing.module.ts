import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { PostsComponent } from './posts/posts/posts.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, pathMatch: 'full',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'products', component: ProductsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'posts', component: PostsComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
