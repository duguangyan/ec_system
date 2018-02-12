import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cookie} from 'angular2-cookies';
declare var layui:any;
declare var $:any;
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
    $(".aaa").click(()=>{
      alert(1);
    })

    $(document).on('click','.ddd',function(){
      alert(1);
    })
    if(!Cookie.load('userName')){
      this.router.navigate(['login']);
    }
    var table = layui.table;

//转换静态表格
    table.init('demo', {
      height: 315 //设置高度
      ,limit: 10 //注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
      //支持所有基础参数
    });

    layui.use('laypage', ()=>{
      var laypage = layui.laypage;
      //执行一个laypage实例
      laypage.render({
        elem: 'demo7' //注意，这里的 test1 是 ID，不用加 # 号
        ,count: 50 //数据总数，从服务端得到
        ,first: '首页'
        ,last: '尾页'
        ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
        ,jump: (obj, first)=>{
          //obj包含了当前分页的所有参数，比如：
          console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
          console.log(obj.limit); //得到每页显示的条数

          //首次不执行
          if(!first){
            //do something
            this.layer(obj.curr);
          }
        }
      });
    });
  }
  layer(index){
    layui.use('layer', function(){
      var layer = layui.layer;

      layer.msg(index,{time:1000});
    });
  }

  dd(){
    alert(1);
  }
}
