import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap,map } from "rxjs";
import { PagedListModel, PaggerModel } from "../Common/Models/BasePagedListModel";

@Injectable()
export class PaginatorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isPageType = request.params.get('isPageType');
    return next.handle(request).pipe(map ((event: HttpEvent<any>) => {
      if (!(event instanceof HttpResponse)) return event;
      return event.clone({ body: this.modifyBody(event.body,request, isPageType) });
    },
      (err: any) => {

      }));
  }

  private modifyBody(body: any,request: HttpRequest<any>, isPageType: any) {
    debugger
    if(isPageType=='true'){
       let dataPaggerModel= new   PagedListModel();
       dataPaggerModel.Data=body.Data;
       var paggerModel=new PaggerModel();
       paggerModel.length=body.recordsTotal;
       paggerModel.pageSize=10;
       paggerModel.pageIndex=request.body.Start;
       dataPaggerModel.PaggerModel= paggerModel;
       return dataPaggerModel ;
    }
    return body;
  }

}
