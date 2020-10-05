import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { MyserviceService } from './myservice.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next){
    let service = this.injector.get(MyserviceService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization:`Bearer ${service.getJswToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
