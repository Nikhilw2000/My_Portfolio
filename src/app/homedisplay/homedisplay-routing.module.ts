import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { ActivatedRoute } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MycontactComponent } from './mycontact/mycontact.component';

const routes: Routes = [
  {path:"", component:HomeheaderComponent},
  {path:"Aboutme", component:AboutmeComponent},
  {path:"Resume", component:ResumeComponent},
  {path:"Portfolio", component:PortfolioComponent},
  {path:"Contact", component:MycontactComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomedisplayRoutingModule { }
