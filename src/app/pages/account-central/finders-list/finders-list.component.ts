import { Component, OnInit } from '@angular/core';
declare var layui:any;

@Component({
  selector: 'app-finders-list',
  templateUrl: './finders-list.component.html',
  styleUrls: ['./finders-list.component.css']
})
export class FindersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var _this = this;
    layui.use(['laypage', 'layer'], function(){
      var laypage = layui.laypage
        ,layer = layui.layer;
      //完整功能
      laypage.render({
        elem: 'finderListsPagination'
        ,count: 100
        ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
        ,jump: function(obj,first){
          //首次不执行
          if(!first){
            //do something
            layer.msg(obj.curr,{time:500});
            this.ceshi = obj.curr;
          }
        }
      });

    });
  }

}
