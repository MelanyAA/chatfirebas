import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  constructor( public servi: ChatService) { }

  ngOnInit(): void {
  }

  logingGoogle(proveedor:string){
    this.servi.login(proveedor);
  console.log("Aqui google");
  
  }

  logingTwitter(){
    console.log("Aqui Twitter");
  }
}
