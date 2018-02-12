import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {ROUTES} from '../router/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './pages/search/search.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { RegisterComponent } from './login/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './pages/order/order.component';
import { OrderQueryComponent } from './pages/order/order-query/order-query.component';
import { OrderProcessComponent } from './pages/order/order-process/order-process.component';
import { OrderDetailComponent } from './pages/order/order-detail/order-detail.component';
import { AppOrderListsComponent } from './pages/app-order/app-order-lists/app-order-lists.component';
import { AppOrderDetailComponent } from './pages/app-order/app-order-detail/app-order-detail.component';
import {AppOrderComponent} from './pages/app-order/app-order.component';
import {HttpService} from './sevice/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    LoginComponent,
    MainComponent,
    SearchComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    OrderComponent,
    OrderQueryComponent,
    OrderProcessComponent,
    OrderDetailComponent,
    AppOrderComponent,
    AppOrderListsComponent,
    AppOrderDetailComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
