import { TestBed } from '@angular/core/testing';

import { WindowService } from './window.service';

describe('OrientationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowService = TestBed.get(WindowService);
    expect(service).toBeTruthy();
  });
});
