import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatsComponent } from './components/chats/chats.component'; 
import { ChatService } from './providers/chat.service';
import { LogingComponent } from './components/loging/loging.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    LogingComponent, 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
   

  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
