import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GreetingsCommonService } from "../greetings/greetings-service";

import { map } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private greetingsService: GreetingsCommonService){
        //Nothing to do
    }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            })
        );
    }
}