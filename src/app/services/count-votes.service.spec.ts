import { TestBed } from '@angular/core/testing';
import { PlayersService } from './players.service';
import { CountVotesService } from './count-votes.service';

describe('CountVotesService', () => {
  let service: CountVotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountVotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
