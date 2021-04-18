import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartQuery } from 'src/app/cart/state/cart.query';
import { AuthQuery } from '../../auth/state/auth.query';
import { AuthService } from '../../auth/state/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems = ['products', 'todos', 'contacts', 'stories', 'movies', 'widgets', 'posts', 'formsManager'];

  isLoggedIn$: Observable<boolean>;
  count$: Observable<number>;

  constructor(private authService: AuthService, private authQuery: AuthQuery, private cartQuery: CartQuery, private router: Router) {
    this.isLoggedIn$ = this.authQuery.isLoggedIn$;
    this.count$ = this.cartQuery.selectCount();
  }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
