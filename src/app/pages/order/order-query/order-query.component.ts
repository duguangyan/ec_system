import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var layui: any;
declare var $: any;
@Component({
  selector: 'app-order-query',
  templateUrl: './order-query.component.html',
  styleUrls: ['./order-query.component.css']
})
export class OrderQueryComponent implements OnInit {
  public checkedAll:boolean = false;
  public checked:boolean = false;
  constructor(public router: Router) { }

  ngOnInit() {
    $('input[name="selectall"]').click(function(){
      //alert(this.checked);
      if($(this).is(':checked')){
        $('input[name="stuCheckBox"]').each(function(){
          //此处如果用attr，会出现第三次失效的情况
          $(this).prop("checked",true);
          $(this).attr("checked",true);
        });
      }else{
        $('input[name="stuCheckBox"]').each(function(){
          //此处如果用attr，会出现第三次失效的情况
          $(this).prop("checked",false);
          $(this).attr("checked",false);
        });
      }

    });



  }

  goDetail() {
    this.router.navigate(['orderDetail']);
  }

  getCheckBoxVals(){
    var chk_value =[];
    $('input[name="stuCheckBox"]:checked').each(function(){
      chk_value.push($(this).val());
    });
    alert(chk_value);
  }

}
