import { TestBed } from '@angular/core/testing';

import { AuthserverGuard } from './authserver.guard';

describe('AuthserverGuard', () => {
  let guard: AuthserverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthserverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
