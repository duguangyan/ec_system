import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpService} from '../../../sevice/http.service';
import {Cookie} from 'angular2-cookies';
declare var $: any;

@Component({
  selector: 'app-app-order-detail',
  templateUrl: './app-order-detail.component.html',
  styleUrls: ['./app-order-detail.component.css']
})
export class AppOrderDetailComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,
              public httpService: HttpService) {
    activatedRoute.queryParams.subscribe(queryParams => {
      let id = queryParams.orderId;
      console.log(id);
      const params = {
        user_id:'',
        id:id,
        salesman_id:''
      }
      this.httpService.get('/find/demand/info',{params}).subscribe((res:any)=>{
        console.log(res);
      })

    });
  }

  ngOnInit() {
    setTimeout(()=>{
      $(".sidebar").height($(".appOrderDetail").height());
    },500)
  }

}
