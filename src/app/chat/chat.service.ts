import { inject, Injectable, signal } from '@angular/core';
import { SocketService } from '../socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  socketService: SocketService = inject(SocketService);

  chat_messages = signal<string[]>(
    this.socketService.messages().map((m) => m.message)
  );
}
