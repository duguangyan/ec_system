import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cookie} from 'angular2-cookies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,   //这里需要注入ActivatedRoute模块
    public router: Router
  ) {
    activatedRoute.queryParams.subscribe(queryParams => {
      let productId = queryParams.productId;
      let title = queryParams.title;
      console.log(title);
    });
  }

  ngOnInit() {
    if(!Cookie.load('userName')){
      this.router.navigate(['login']);
    }
    console.log(1);
  }

}
