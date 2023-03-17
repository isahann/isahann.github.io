import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDoIDoComponent } from './what-do-i-do.component';

describe('WhatDoIDoComponent', () => {
  let component: WhatDoIDoComponent;
  let fixture: ComponentFixture<WhatDoIDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatDoIDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatDoIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
