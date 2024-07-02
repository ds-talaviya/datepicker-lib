import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstDatepickerComponent } from './dst-datepicker.component';

describe('DstDatepickerComponent', () => {
  let component: DstDatepickerComponent;
  let fixture: ComponentFixture<DstDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DstDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
