import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { akitaConfig, enableAkitaProdMode, persistState } from '@datorama/akita';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const storage = persistState({
  key: 'akitaPlayground',
  include: ['auth', 'products', 'cart'],
});

akitaConfig({ resettable: true });

const persistStorage = { provide: 'persistStorage', useValue: storage };

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

platformBrowserDynamic([persistStorage]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
