import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRoomIdComponent } from './enter-room-id.component';

describe('EnterRoomIdComponent', () => {
  let component: EnterRoomIdComponent;
  let fixture: ComponentFixture<EnterRoomIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterRoomIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterRoomIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
