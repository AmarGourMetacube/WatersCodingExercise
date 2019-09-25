import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePageComponent } from './components/one-page/one-page.component';
import { TwoPageComponent } from './components/two-page/two-page.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SharedModule } from './shared/shared.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './service/data.service';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SubscriptionComponent,
    OnePageComponent,
    TwoPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    MatSidenavModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService, { delay: 0 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
