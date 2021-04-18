import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthQuery } from '../auth/state/auth.query';
import { AuthService } from '../auth/state/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems = ['products', 'todos', 'contacts', 'stories', 'movies', 'widgets', 'posts', 'formsManager'];
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private authQuery: AuthQuery, private router: Router) {
    this.isLoggedIn$ = this.authQuery.isLoggedIn$;
  }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
