import { Component } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods } from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SuccessPage } from '../success/success';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {
	email:any;
    password:any;
    public fireAuth: any;

    //referencia importada = AngularFire
	constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire ){   
        
        //var auth = firebase.auth();
        this.fireAuth = firebase.auth();
    }
    
    ionViewDialog(){
        console.log('ionViewDialog LoginPage');
    }
    
    //inicio funcion login
    login(){
        this.angfire.auth.login({
            //obtiene los datos de inputs
            email:this.email,
            password:this.password
        },
        {   
            provider: AuthProviders.Password,
            method:AuthMethods.Password
        }).then((response) =>{
            //si los datos son correctos, inicia session
            console.log('login exitoso ' + JSON.stringify(response));
            let currentuser = {
            email:response.auth.email,
            picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        //envia a la pagina donde esta la imagen
        this.navCtrl.setRoot(SuccessPage);
    }).catch((error)=> {
            //muestra el mensaje definido por firebase en la consola del navegador
            console.log(error);
        })

    }
    //fin funcion login
   
    //funcion para enviar mail si no se sabe la contraseña
    resetpassword(){
        this.fireAuth.sendPasswordResetEmail(this.email).then(function(){
            //muestra el mensaje en la consola del navegador
            console.log("revisa tu correo");
        },function(error){
            //muestra el mensaje definido por firebase en la consola del navegador
            console.log(error);
        });
    }
}
