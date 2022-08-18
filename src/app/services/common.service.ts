import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
  providedIn:'root'
})
export class CommonService {
   publishCatEvent: Subject<string>= new Subject();

  sendEvent(active:string){
  this.publishCatEvent.next(active);
  }

}
