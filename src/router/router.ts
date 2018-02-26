import {SettingsComponent} from '../app/pages/settings/settings.component';
import {Routes} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {MainComponent} from '../app/main/main.component';
import {HomeComponent} from '../app/pages/home/home.component';
import {SearchComponent} from '../app/pages/search/search.component';
import {ForgetPasswordComponent} from '../app/login/forget-password/forget-password.component';
import {RegisterComponent} from '../app/login/register/register.component';
import {OrderComponent} from '../app/pages/order/order.component';
import {OrderQueryComponent} from '../app/pages/order/order-query/order-query.component';
import {OrderProcessComponent} from '../app/pages/order/order-process/order-process.component';
import {OrderDetailComponent} from '../app/pages/order/order-detail/order-detail.component';
import {AppOrderComponent} from '../app/pages/app-order/app-order.component';
import {AppOrderListsComponent} from '../app/pages/app-order/app-order-lists/app-order-lists.component';
import {AppOrderDetailComponent} from '../app/pages/app-order/app-order-detail/app-order-detail.component';
import {AccountCentralComponent} from '../app/pages/account-central/account-central.component';
import {AccountListComponent} from '../app/pages/account-central/account-list/account-list.component';
import {UsersListComponent} from '../app/pages/account-central/users-list/users-list.component';
import {FindersListComponent} from '../app/pages/account-central/finders-list/finders-list.component';
import {AccountDetailComponent} from '../app/pages/account-central/account-list/account-detail/account-detail.component';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'appOrder', component: AppOrderComponent },
      { path: 'appOrderLists', component: AppOrderListsComponent },
      { path: 'appOrderDetail', component: AppOrderDetailComponent },
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'order', component: OrderQueryComponent},
      { path: 'orderQuery', component: OrderQueryComponent },
      { path: 'orderProcess', component: OrderProcessComponent },
      { path: 'orderDetail', component: OrderDetailComponent },
      { path: 'accountCentral', component: AccountCentralComponent },
      { path: 'accountList', component: AccountListComponent },
      { path: 'accountDetail', component: AccountDetailComponent },
      { path: 'usersList', component: UsersListComponent },
      { path: 'findersList', component: FindersListComponent },
    ]
  }

];
