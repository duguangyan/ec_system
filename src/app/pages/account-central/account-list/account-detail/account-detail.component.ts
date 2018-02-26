import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../../sevice/http.service';
declare var layer:any;
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  public accountDetail: any = '';
  public userName:any;
  constructor(public activatedRoute:ActivatedRoute,
              public httpService:HttpService,
              public cd: ChangeDetectorRef,) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      let id = queryParams.orderId;
      console.log(id);
      const params = {
        user_id:id
      }
      this.httpService.get('/auth/admin/info',{params}).subscribe((res:any)=>{
        console.log(res);
        if(res.code>=0){
          this.accountDetail = res.data;
          this.userName = res.data.user_name;
          this.cd.detectChanges();
          this.cd.markForCheck();
        }else{
          layer.msg('请求失败', {icon: 2,time: 1000});
        }
      },(error)=>{
        layer.msg('请求失败', {icon: 2,time: 1000});
      })

    });
  }

}
