import { TestBed } from '@angular/core/testing';

import { BookingsService } from './bookings.service';

describe('BookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingsService = TestBed.get(BookingsService);
    expect(service).toBeTruthy();
  });
});
