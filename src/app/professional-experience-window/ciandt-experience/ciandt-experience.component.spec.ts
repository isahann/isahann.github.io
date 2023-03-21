import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiandtExperienceComponent } from './ciandt-experience.component';

describe('CiandtExperienceComponent', () => {
  let component: CiandtExperienceComponent;
  let fixture: ComponentFixture<CiandtExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiandtExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiandtExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
