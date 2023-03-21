import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtfprComponent } from './utfpr.component';

describe('UtfprComponent', () => {
  let component: UtfprComponent;
  let fixture: ComponentFixture<UtfprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtfprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtfprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
