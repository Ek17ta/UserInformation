import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  { path: '',redirectTo:'/userinfo', pathMatch:'full' },
  { path: 'userinfo', component: UserInformationComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
