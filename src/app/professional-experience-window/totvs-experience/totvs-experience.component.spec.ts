import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotvsExperienceComponent } from './totvs-experience.component';

describe('TotvsExperienceComponent', () => {
  let component: TotvsExperienceComponent;
  let fixture: ComponentFixture<TotvsExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotvsExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotvsExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
