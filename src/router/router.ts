import {SettingsComponent} from '../app/pages/settings/settings.component';
import {Routes} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {MainComponent} from '../app/main/main.component';
import {HomeComponent} from '../app/pages/home/home.component';
import {SearchComponent} from '../app/pages/search/search.component';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }

];
