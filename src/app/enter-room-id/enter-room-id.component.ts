import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SocketService } from '../socket/socket.service';

@Component({
  selector: 'app-enter-room-id',
  imports: [ReactiveFormsModule],
  templateUrl: './enter-room-id.component.html',
  styleUrls: ['./enter-room-id.component.css'],
})
export class EnterRoomIdComponent {
  room_form = new FormGroup({
    roomId: new FormControl(null, [Validators.required]),
  });

  socketService = inject(SocketService);

  onSubmit() {
    if (this.room_form.valid) {
      this.socketService.joinRoom(this.room_form.value.roomId!);
    }
  }

  RoomId = this.socketService.room;
}
