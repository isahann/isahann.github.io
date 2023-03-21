import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyngularExperienceComponent } from './syngular-experience.component';

describe('SyngularExperienceComponent', () => {
  let component: SyngularExperienceComponent;
  let fixture: ComponentFixture<SyngularExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyngularExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyngularExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
