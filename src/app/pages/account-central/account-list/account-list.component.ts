import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../sevice/http.service';
import {CommonService} from '../../../sevice/common.service';
import {Router} from '@angular/router';

declare var layui:any;
declare var layer:any;
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  public page:number = 1;
  public pageSize:number = 10;
  private accountList: any;
  constructor(public httpService:HttpService,
              public commonService:CommonService,
              public router:Router) { }

  ngOnInit() {
    //获取管理员列表信息
    this.getAccountList(this.page,this.pageSize);
    //分页

  }

 // 获取管理员列表
  getAccountList(page,pageSize){
    let params = {
      page:page,
      pageSize:pageSize
    }
    this.httpService.get('/auth/admin/list', {params}).subscribe((res:any)=>{
      console.log(res);
      if(res.code>=0){
        this.accountList = res.data.list;
        this.commonService.setHeight();
        this.pagination(res.data.total);
      }else{
        layer.msg('请求失败', {icon: 2,time: 1000});
      }
    },(error)=>{
      layer.msg('请求失败', {icon: 2,time: 1000});
    })
  }

  //分页
  pagination(count){
    var _this = this;
    layui.use(['laypage', 'layer'], function(){
      var laypage = layui.laypage
        ,layer = layui.layer;
      //完整功能
      laypage.render({
        elem: 'accountListsPagination'
        ,count: count
        ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
        ,jump: function(obj,first){
          //首次不执行
          if(!first){
            //do something
            layer.msg(obj.curr,{time:500});
            _this.getAccountList(obj.curr,obj.limit);
          }
        }
      });

    });
  }

  // 去详情页面
  goDetail(id){
    this.router.navigate(['accountDetail'],{
      queryParams: {
        orderId: id
      }
    })
  }

}
