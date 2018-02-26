import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'angular2-cookies';
import {HttpService} from '../../../sevice/http.service';
import {API_ENDPOINT} from '../../../sevice/environments';
declare var $:any;
declare var layui:any;
declare var layer:any;
@Component({
  selector: 'app-app-order-lists',
  templateUrl: './app-order-lists.component.html',
  styleUrls: ['./app-order-lists.component.css']
})
export class AppOrderListsComponent implements OnInit {
  public lists: any;
  public makeCollectionsVal:any = '确认收款';
  constructor(public router: Router,
              public httpService: HttpService,
              public cd: ChangeDetectorRef) { }

  ngOnInit() {
    // 获取列表
    this.getOrderLists();
    layui.use('laydate', function(){
      var laydate = layui.laydate;
      //常规用法
      laydate.render({
        elem: '#orderStartTime'
      });
      laydate.render({
        elem: '#orderEndTime'
      });
    })

    layui.use(['laypage', 'layer'], function(){
      var laypage = layui.laypage
        ,layer = layui.layer;
      //完整功能
      laypage.render({
        elem: 'appOrderListsPagination'
        ,count: 100
        ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
        ,jump: function(obj,first){
          //首次不执行
          if(!first){
            //do something
            layer.msg(obj.curr,{time:500});
          }
        }
      });

    });

  }


  // 查询
  orderSearch(){
    //alert()
  }

  // 获取列表
  getOrderLists() {
    if(!Cookie.load('userId')){
      return false;
    }
    const params = {
      //user_id: Cookie.load('userId'),
      page:1,
      pageSize:10
    }
    this.httpService.get('/find/demand/get', {params} ).subscribe((res: any)=>{
      if(res.code>=0){
        console.log(res);
        this.lists = res.data;
        setTimeout(()=>{
          $(".sidebar").height($(".appOrderLists").height());
        },500)
      }
    });
  }

  // 去详情
  goDetail(id){
    this.router.navigate(['appOrderDetail'],{
      queryParams: {
        orderId: id
      }
    })
  }
  // 确认收款
  makeCollections(event){
    if($(event.target).html() === '已收款'){
      return false;
    }
    console.log(event.target);
    $(event.target).html('已收款').addClass('layui-btn-disabled');
  }

  distribute(){
    //询问框
    let html = '<div><p>请选择找料人员</p><p class="ddd">张山</p></div>';
    layer.confirm(html, {
      btn: ['确认','取消'] //按钮
    }, function(){
      layer.msg('分配成功', {icon: 1,time: 1000});
    }, function(){
      layer.msg('取消成',   {icon: 2,time: 1000});
    });
  }

}
