import { Component, inject } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  imports: [ReactiveFormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  socketService: SocketService = inject(SocketService);
  chatService: ChatService = inject(ChatService);

  message_form = new FormGroup({
    message: new FormControl(null, [Validators.required]),
  });

  sendMessage() {
    if (this.message_form.valid) {
      this.socketService.sendMessageToRoom(this.message_form.value.message!);
      this.message_form.reset();
    }
  }

  RoomId = this.socketService.room;

  Messages = this.chatService.chat_messages;

  MessagesWithUser = this.socketService.messages;
}
