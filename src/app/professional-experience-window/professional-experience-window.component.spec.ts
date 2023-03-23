import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceWindowComponent } from './professional-experience-window.component';

describe('ProfessionalExperienceComponent', () => {
  let component: ProfessionalExperienceWindowComponent;
  let fixture: ComponentFixture<ProfessionalExperienceWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExperienceWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperienceWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
