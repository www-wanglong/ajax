import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { resolve } from 'dns';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetNameResolver implements Resolve<boolean> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<string> {
    return new Promise(function(resolve) {
      setTimeout(function () {
        resolve('里斯')
      }, 2000)
    })
  }
}
