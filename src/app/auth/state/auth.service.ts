import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resetStores, transaction, withTransaction } from '@datorama/akita';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CartStore } from 'src/app/cart/state/cart.store';
import { AuthStore } from './auth.store';

export type Creds = {
  email: string;
  password: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore, private cartStore: CartStore, private http: HttpClient) {
  }

  login(creds: Creds) {

    const respUser = {
      id: 1,
      firstName: 'Ramandeep',
      lastName: 'Bhagat',
      token: 'token'
    }

    return of(respUser).pipe(
      delay(900),
      withTransaction(user => {
        console.table(user)
        this.authStore.update(user);
      })
    );
  }

  @transaction()
  logout() {
    resetStores({ exclude: ['products'] });
  }
}
