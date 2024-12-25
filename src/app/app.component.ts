import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SocketService } from './socket/socket.service';
import { EnterRoomIdComponent } from './enter-room-id/enter-room-id.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [EnterRoomIdComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chat-chit-fe';
}
