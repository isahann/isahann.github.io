import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateraExperienceComponent } from './matera-experience.component';

describe('MateraExperienceComponent', () => {
  let component: MateraExperienceComponent;
  let fixture: ComponentFixture<MateraExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateraExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateraExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
