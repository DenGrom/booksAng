import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavLeftComponent,
    HomeComponent,
    AboutComponent,
    PaymentComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
