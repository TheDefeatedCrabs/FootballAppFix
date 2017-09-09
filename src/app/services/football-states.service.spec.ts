import { TestBed, inject } from '@angular/core/testing';

import { FootballStatesService } from './football-states.service';

describe('FootballStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballStatesService]
    });
  });

  it('should be created', inject([FootballStatesService], (service: FootballStatesService) => {
    expect(service).toBeTruthy();
  }));
});
