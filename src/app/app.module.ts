import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SuccessPage } from '../pages/success/success';
import { AngularFireModule } from 'angularfire2';

//conexion con firebase
const config = {
    apiKey: "AIzaSyD3Pkqxlz85QHeUZf5sC-_dPBUYAG-X7pM",
    authDomain: "loginpleno-dface.firebaseapp.com",
    databaseURL: "https://loginpleno-dface.firebaseio.com",
    storageBucket: "loginpleno-dface.appsp+ot.com",
    messagingSenderId: "242456727298"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SuccessPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SuccessPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
