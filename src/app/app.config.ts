import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {jwtInterceptor} from './services/intercepteurs/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Il vaut mieux le mettre ici, car dans app.component Angular dit que c'est déprécié
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
  ]
};
