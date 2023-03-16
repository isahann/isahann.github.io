import { TestBed } from '@angular/core/testing';

import { ClippyService } from './clippy.service';

describe('ClippyService', () => {
  let service: ClippyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClippyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
