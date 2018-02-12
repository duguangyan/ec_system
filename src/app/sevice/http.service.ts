import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HttpService {

  public API_ENDPOINT: any = 'http://120.77.209.176:38000';
  constructor(public http: HttpClient) {

  }

  // get请求
  get(url,params){
    //this.isLogin();
    return this.http.get(this.API_ENDPOINT+url,params);
  }
  // post请求
  post(url,params){
    //this.isLogin();
    return this.http.post(this.API_ENDPOINT+url,params);
  }


}
