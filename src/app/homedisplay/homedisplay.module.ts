import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomedisplayRoutingModule } from './homedisplay-routing.module';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { MycontactComponent } from './mycontact/mycontact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeheaderComponent,
    AboutmeComponent,
    ResumeComponent,
    MycontactComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomedisplayRoutingModule,
    MatIconModule
  ],
  exports: [
    HomeheaderComponent,
    AboutmeComponent
  ]
})
export class HomedisplayModule { }
