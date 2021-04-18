import { Injectable } from '@angular/core';
import { ID, Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
  id: ID;
  firstName: string;
  lastName: string;
  token: string;
}

export function createInitialState(): AuthState {
  return {
    id: null,
    firstName: '',
    lastName: '',
    token: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}
