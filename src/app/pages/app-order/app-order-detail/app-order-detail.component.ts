import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-app-order-detail',
  templateUrl: './app-order-detail.component.html',
  styleUrls: ['./app-order-detail.component.css']
})
export class AppOrderDetailComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(queryParams => {
      let id = queryParams.orderId;
      console.log(id);

    });
  }

  ngOnInit() {
    setTimeout(()=>{
      $(".sidebar").height($(".appOrderDetail").height());
    },500)
  }

}
