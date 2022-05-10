import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceVillaComponent } from './edit-service-villa.component';

describe('EditServiceVillaComponent', () => {
  let component: EditServiceVillaComponent;
  let fixture: ComponentFixture<EditServiceVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
