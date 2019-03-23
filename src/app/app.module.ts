import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { ModalComponent } from './pages/modal/modal.component';
import { AddWeightComponent } from './pages/add-weight/add-weight.component';


@NgModule({
  declarations: [AppComponent,FooterComponent, ModalComponent, AddWeightComponent],
  entryComponents: [FooterComponent, ModalComponent, AddWeightComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
