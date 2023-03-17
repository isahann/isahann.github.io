import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDoIKnowComponent } from './what-do-i-know.component';

describe('WhatDoIKnowComponent', () => {
  let component: WhatDoIKnowComponent;
  let fixture: ComponentFixture<WhatDoIKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatDoIKnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatDoIKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
