import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QFormComponent } from './q-form.component';

describe('QFormComponent', () => {
  let component: QFormComponent;
  let fixture: ComponentFixture<QFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
