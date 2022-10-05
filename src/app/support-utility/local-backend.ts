import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import * as data2 from '../data/data.json';

@Injectable()
export class LocalBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // return the list of data - mock
            if(request.url.endsWith('/data') && request.method === 'GET') {
                let data = data2;
                return of(new HttpResponse({ status: 200, body: data }));
            }
            debugger
            if(request.url.match(/\/update\/\d+$/) && request.method === 'PUT') {
                debugger
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                console.log("test", id)
            }


            // pass through any requests not handled above
            return next.handle(request);
            
        }))

        // call materialize and dematerialize to ensure delay even if an error is thrown
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let localBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: LocalBackendInterceptor,
    multi: true
};