import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceRoomComponent } from './edit-service-room.component';

describe('EditServiceRoomComponent', () => {
  let component: EditServiceRoomComponent;
  let fixture: ComponentFixture<EditServiceRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
