import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelectionWindowComponent } from './language-selection-window.component';

describe('LanguageSelectionWindowComponent', () => {
  let component: LanguageSelectionWindowComponent;
  let fixture: ComponentFixture<LanguageSelectionWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSelectionWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSelectionWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
