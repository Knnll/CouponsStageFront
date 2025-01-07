import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService} from '../auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    // là, on cline la requête et on ajoute le jeton dans les headers (ça ne vient pas écraser le fait de cloner)
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Header récupéré avec l\'intercepteur');
    return next(clonedReq);
  } else {
    return next(req);
  }
};
