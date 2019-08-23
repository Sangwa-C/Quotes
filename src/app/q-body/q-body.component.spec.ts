import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QBodyComponent } from './q-body.component';

describe('QBodyComponent', () => {
  let component: QBodyComponent;
  let fixture: ComponentFixture<QBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
