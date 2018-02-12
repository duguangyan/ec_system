///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'angular2-cookies';
import { HttpService } from '../sevice/http.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  public userName: string;
  public passWord: string;
  public prompt  : any   = '提示';
  constructor(public router:Router,
              public httpService: HttpService) { }

  ngOnInit() {

  }

  login() {
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.userName))){
      this.toggle($('.bs-example-modal-lg'),'用户名不正确');
      return false;
    }
    if(this.passWord === undefined){
      this.toggle($('.bs-example-modal-lg'),'密码不正确');
    }
    const params = {
      user_name: this.userName,
      user_psw: this.passWord
    }
    this.httpService.post('/auth/member/login',params).subscribe((res: any)=>{
      if(res.code>=0) {
        this.getUserMsg(res.data);
      }else{
        this.toggle($('.bs-example-modal-lg'),'账户或密码错误');
      }
    })

  }

  // 获取用户信息
  // 获取用户信息
  getUserMsg(id) {
    const params = {
      token:'',
      user_id:id
    }
    this.httpService.get('/auth/member/info?user_id='+id,params).subscribe((res:any)=>{
      if(res.code>=0){
        Cookie.save('userId',res.data.id);
        Cookie.save('userName',res.data.user_name);
        this.router.navigate(['appOrderLists']);
      }else{
        this.toggle($('.bs-example-modal-lg'),'用户信息获取失败');
      }
    })
  }


  /*
      模态框切换
      obj:jq对象
      txt:提示信息
   */
  toggle(obj,txt){
    this.prompt = txt;
    obj.modal('show');
    setTimeout(()=>{
      obj.modal('hide');
    },500)
  }
}
