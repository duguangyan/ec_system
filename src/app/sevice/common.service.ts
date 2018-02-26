import { Injectable } from '@angular/core';
declare var $:any;

@Injectable()
export class CommonService {

  constructor() { }

  public setHeight(){
    setTimeout(()=>{
      $(".sidebar").height($(".details").height());
    },500)
  }
}
