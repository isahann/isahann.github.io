import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAmIComponent } from './who-am-i.component';

describe('WhoAmIComponent', () => {
  let component: WhoAmIComponent;
  let fixture: ComponentFixture<WhoAmIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAmIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoAmIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
