import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

elemento:any;

  constructor( public service: ChatService ) {
    this.service.cargarMensaje().subscribe(()=> {
      //para que el sms siempre este apuntando al mensaje que cae actual 

      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20)
      
    }
  
);

  // this.service.cargarMensaje().subscribe((mensaje:any[])=>{
  //  console.log(mensaje);
// });

   }
  mensaje:string;
  ngOnInit(){
// carge al inicio el ultimo sms le pasamos el id="app-mensajes"
    this.elemento = document.getElementById('app-mensajes');
  }

  sendchat(){
console.log(this.mensaje);
if (this.mensaje.length ===0 ){

  return;
}
this.service.AgregarMensaje(this.mensaje)
.then(()=>this.mensaje="")
.catch((err)=> console.log('Error al enviar',err));


  }
}
