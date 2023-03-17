import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeWindowComponent } from './about-me-window.component';

describe('AboutMeComponent', () => {
  let component: AboutMeWindowComponent;
  let fixture: ComponentFixture<AboutMeWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
