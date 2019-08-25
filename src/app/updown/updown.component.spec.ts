import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdownComponent } from './updown.component';

describe('UpdownComponent', () => {
  let component: UpdownComponent;
  let fixture: ComponentFixture<UpdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
