import { Injectable, signal } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  room = signal('');
  messages = signal<{ user: string; message: string }[]>([]);
  constructor(private socket: Socket) {
    this.socket.on('message-from-server', (data: string) => {
      console.log(data);
    });
    this.socket.on('invite-to-room', (data: string) => {
      console.log('invite-to-room: ', data);
    });
    this.socket.on('message', (data: { user: string; message: string }) => {
      this.messages().push(data);
    });
  }

  sendMessageToRoom(message: string) {
    this.socket.emit('message', {
      room: this.room(),
      message,
    });
  }

  joinRoom(room: string) {
    this.room.set(room);
    console.log('joinRoom: ', room);
    console.log('this.room: ', this.room());

    this.socket.emit('join', room);
  }

  leaveRoom() {
    if (this.room() !== '') {
      this.socket.emit('leave', this.room);
      this.room.set('');
    }
  }
}
