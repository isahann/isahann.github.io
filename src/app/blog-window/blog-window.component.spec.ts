import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWindowComponent } from './blog-window.component';

describe('BlogWindowComponent', () => {
  let component: BlogWindowComponent;
  let fixture: ComponentFixture<BlogWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
