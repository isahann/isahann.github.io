import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivelComponent } from './univel.component';

describe('UnivelComponent', () => {
  let component: UnivelComponent;
  let fixture: ComponentFixture<UnivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
