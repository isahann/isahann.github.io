import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationWindowComponent } from './education-window.component';

describe('EducationWindowComponent', () => {
  let component: EducationWindowComponent;
  let fixture: ComponentFixture<EducationWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
