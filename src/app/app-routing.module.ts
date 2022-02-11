import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login/login.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [{path:'',component:HomeComponent},{path:'home',component:HomeComponent},{path:'about',component:AboutComponent},{path:'login',component:LoginComponent},{path:'contact',component:ContactComponent},
{path:'help',component:HelpComponent},{path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
