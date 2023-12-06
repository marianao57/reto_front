import { TestBed } from '@angular/core/testing';
import { DisplayComponentsService } from './display-components.service';

describe('DisplayComponentsService', () => {
  let service: DisplayComponentsService;
  let fakeVoteElements: HTMLElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayComponentsService);
    fakeVoteElements = [];

    for (let i = 0; i < 8; i++) {
      const fakeElement = document.createElement('div');
      fakeElement.id = 'votePlayer' + i;
      fakeElement.textContent = 'Voto de prueba';
      fakeVoteElements.push(fakeElement);
    }

    spyOn(document, 'getElementById').and.callFake((id: string) => {
      const index = Number(id.replace('votePlayer', ''));
      return fakeVoteElements[index] || null;
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('cambia el valor booleano de votesPlayers a true si count es true', () => {
    service.displayVotePlayer(true);
    expect(service.votesPlayers).toBe(true);
  });

  it('cambia el valor booleano de votesPlayers a false si count es false', () => {
    service.displayVotePlayer(false);
    expect(service.votesPlayers).toBe(false);
  });

  it('elimina los votos de los jugadores de la interfaz', () => {
    service.resetVotesPlayers();
    for (let i = 0; i < 8; i++) {
      const vote = fakeVoteElements[i];
      if (vote) {
        expect(vote.textContent).toEqual('');
      }
    }
  });

  it('elimina los votos totales de la interfaz', () => {
    const voteTotales = document.createElement('div');
    voteTotales.id = 'totalVotes';
    service.resetVotesTotales();

    expect(voteTotales.style.visibility).toEqual('');
  });

  it('elimina las opciones de voto de la interfaz', () => {
    const options = document.createElement('div');
    options.id = 'options';
    service.resetOptions();

    expect(options.style.display).toEqual('');
  });

  
});
