import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private sidebarLists: any[];
  private isUlShow :any  = 0;
  constructor(public router:Router) {
    this.sidebarLists = [
      {
        url:'/home',
        h5:'一级菜单',
        lists:[
          {url:'',txt:'菜单一'},
          {url:'',txt:'菜单二'},
          {url:'',txt:'菜单三'}
        ]
      },
      {
        url:'/search',
        h5:'一级菜单',
        lists:[
          {url:'',txt:'菜单一'},
          {url:'',txt:'菜单二'},
          {url:'',txt:'菜单三'}
        ]
      },
      {
        url:'/settings',
        h5:'一级菜单',
        lists:[
          {url:'',txt:'菜单一'},
          {url:'',txt:'菜单二'},
          {url:'',txt:'菜单三'}
        ]
      },
    ];
  }

  ngOnInit() {
    this.router.navigate(['home'],{
      queryParams: {
        productId: '1',
        title: 'moon'
      }
    });
  }
  todoShow(index) {
    this.isUlShow = index;
  }
}
