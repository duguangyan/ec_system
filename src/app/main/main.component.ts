import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'angular2-cookies';
import {appAnimate} from '../animate/animate';

declare var layui:any;
declare var $:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    appAnimate
  ]

})
export class MainComponent implements OnInit {
  public sidebarLists: any[];
  public isUlShow :any = 0;
  public userName: string;
  public isLiShow: any = 0;
  private boxState: String = 'left';
  private _isTrue: Boolean = true;
  constructor(public router:Router) {
    this.sidebarLists = [
      {
        url:'/appOrderLists',
        h5:'小鹿快找',
        lists:[
          {url:'/appOrderLists',txt:'订单列表'},
          {url:'/appOrderDetail',txt:'订单详情'}
        ]
      },
      {
        url:'/accountList',
        h5:'账户中心',
        lists:[
          {url:'/accountList',txt:'管理员列表'},
          {url:'/usersList',txt:'用户列表'},
          {url:'/findersList',txt:'找料员列表'},
        ]
      },
      /*{
        url:'/search',
        h5:'基础资料管理',
        lists:[
          {url:'',txt:'品类管理'},
          {url:'',txt:'属性管理'},
          {url:'',txt:'属性值管理'},
          {url:'',txt:'品类属性管理'}
        ]
      },
      {
        url:'/settings',
        h5:'品牌管理',
        lists:[
          {url:'',txt:'品牌查询'},
          {url:'',txt:'品牌审核列表'},
          {url:'',txt:'审核品牌'}
        ]
      },
      {
        url:'/settings',
        h5:'供应信息管理',
        lists:[
          {url:'',txt:'商户供应信息查询'},
          {url:'',txt:'商户供应信息审核'},
          {url:'',txt:'平台供应信息维护'},
          {url:'',txt:'平台发布供应信息1'},
          {url:'',txt:'平台发布供应信息2'},
          {url:'',txt:'平台供应信息回收站'}
        ]
      },
      {
        url:'/settings',
        h5:'采购需求管理',
        lists:[
          {url:'',txt:'商户采购需求查询'},
          {url:'',txt:'商户采购需求审核列表'},
          {url:'',txt:'审核采购需求'}
        ]
      },
      {
        url:'/order',
        h5:'订单查询',
        lists:[
          {url:'/orderQuery',txt:'平台订单查询'},
          {url:'/orderProcess',txt:'平台订单处理'},
          {url:'/orderDetail',txt:'平台订单详情'}
        ]
      },
      {
        url:'/settings',
        h5:'物流管理',
        lists:[
          {url:'',txt:'平台物流公司管理'}
        ]
      },
      {
        url:'/settings',
        h5:'商户管理',
        lists:[
          {url:'',txt:'商户查询'},
          {url:'',txt:'商户审核列表'},
          {url:'',txt:'商户审核'},
          {url:'',txt:'商户冻结与解除'},
          {url:'',txt:'商户账户冻结与解除'},
          {url:'',txt:'商户账户详情'}
        ]
      },
      {
        url:'/settings',
        h5:'内容管理',
        lists:[
          {url:'',txt:'广告管理'},
          {url:'',txt:'新增广告'},
          {url:'',txt:'资讯公告管理'},
          {url:'',txt:'新增资讯公告'}
        ]
      },*/
      /*
      {
        url:'/settings',
        h5:'付费订阅管理',
        lists:[
          {url:'',txt:'付费订阅订单查询'}
        ]
      },*/
      /*{
        url:'/settings',
        h5:'结算管理',
        lists:[
          {url:'',txt:'供应商收入结算'},
          {url:'',txt:'采购商返点结算'},
          {url:'',txt:'商户提现审核列表'},
          {url:'',txt:'商户提现审核'}
        ]
      },
      {
        url:'/settings',
        h5:'评价管理',
        lists:[
          {url:'',txt:'商户评价查询'},
          {url:'',txt:'商户评价统计'},
          {url:'',txt:'评价管理'},
          {url:'',txt:'评价详情'}
        ]
      },
      {
        url:'/settings',
        h5:'系统管理',
        lists:[
          {url:'',txt:'站点管理'},
          {url:'',txt:'新增站点'},
          {url:'',txt:'敏感词管理'},
          {url:'',txt:'模版参数管理'},
          {url:'',txt:'平台参数管理'},
          {url:'',txt:'汇率管理'}
        ]
      },
      {
        url:'/settings',
        h5:'权限管理',
        lists:[
          {url:'',txt:'菜单管理'},
          {url:'',txt:'组织机构管理'},
          {url:'',txt:'角色管理'},
          {url:'',txt:'新增角色'},
          {url:'',txt:'用户管理'},
          {url:'',txt:'新增用户'}
        ]
      },*/
    ];
  }

  ngOnInit() {
    this.userName = Cookie.load('userName');
    if(this.userName){
      this.router.navigate(['appOrderLists']);
    }else{
      this.router.navigate(['login']);
    }
  }

  start(): void {
    console.log('开始运动');
    if (this._isTrue) {
      this.boxState = 'right';
    } else {
      this.boxState = 'left';
    }
    this._isTrue = !this._isTrue;
  }


  todoShow(index) {
    this.isUlShow = index;
    this.isLiShow = 0;
  }
  todoLiShow(event,index){
    event.stopPropagation();
    this.isLiShow = index;
  }
  logout() {
    Cookie.remove('userName');
    this.router.navigate(['login']);
  }
}
