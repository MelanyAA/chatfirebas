import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { pipe } from 'rxjs';

import { Mensaje } from '../Interface/mensaje';
import { map } from 'rxjs/operators';

// Importamos los servicios de logiarnos auth
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats: Mensaje[] = [];
/// Declaramos una variable que va traer el objeto de la BD
  public usuario : any ={};

  constructor(public afs: AngularFirestore,
              public auth: AngularFireAuth) {

     //  escucha el estado del al autentificacion     
    this.auth.authState.subscribe(user=>{
      console.log('Estado del Usuario',user);
      

      if(!user){
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })

              }


              login(proveedor:string) {
                this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
              }
              logout() {
                this.usuario ={};
                this.auth.signOut();
                console.log("Sesion terminada");
                
              }


  cargarMensaje() {

    this.itemsCollection = this.afs.collection<Mensaje>('chats', query =>query.orderBy('fecha', 'desc').limit(5) );
    return this.itemsCollection.valueChanges()
      .pipe(map(
        (mensajes: Mensaje[]) => {
          console.log(mensajes, "aqui");
          this.chats = [];
        for (let mensaje of mensajes){
        this.chats.unshift(mensaje);

        }
          return this.chats;
          // this.chats = mensajes;
        }
      )
      )
  }


// Agregar los msm a firebase
  AgregarMensaje( mensajeChat : string){

    let mensaje: Mensaje = {
    nombre: 'Mey',
    mensaje: mensajeChat,
    fecha: new Date().getTime()

    }

   return this.itemsCollection.add(mensaje);

  }
}
