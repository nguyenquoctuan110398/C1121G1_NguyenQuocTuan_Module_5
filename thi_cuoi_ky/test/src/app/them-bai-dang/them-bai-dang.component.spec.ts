import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemBaiDangComponent } from './them-bai-dang.component';

describe('ThemBaiDangComponent', () => {
  let component: ThemBaiDangComponent;
  let fixture: ComponentFixture<ThemBaiDangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemBaiDangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemBaiDangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
