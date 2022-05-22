import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaBaiDangComponent } from './sua-bai-dang.component';

describe('SuaBaiDangComponent', () => {
  let component: SuaBaiDangComponent;
  let fixture: ComponentFixture<SuaBaiDangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaBaiDangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaBaiDangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
