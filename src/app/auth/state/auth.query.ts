import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  isLoggedIn$ = this.select(user => !!user.token);

  constructor(protected store: AuthStore) {
    super(store);
  }

}
