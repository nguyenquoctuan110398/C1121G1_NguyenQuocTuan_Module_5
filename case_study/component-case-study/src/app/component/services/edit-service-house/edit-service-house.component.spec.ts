import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceHouseComponent } from './edit-service-house.component';

describe('EditServiceHouseComponent', () => {
  let component: EditServiceHouseComponent;
  let fixture: ComponentFixture<EditServiceHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
