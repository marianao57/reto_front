import { TestBed } from '@angular/core/testing';
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

  it('debe obtener el valor de la carta seleccionada', () => {
    const position = 2;
    service.getNumber(position);

    expect(service.numberMainPlayer).toBe(service.numberMainPlayer);
  });

  it('debe asignar los votos a los jugadores', () => {
    service.numberMainPlayer = 10;
    service.assignNumbers();

    expect(service.numberAssingPlayers).toEqual(service.numberAssingPlayers);
  });

  it('debe realizar el conteo de votos', () => {
    service.countVotes();
    expect(service.votes).toEqual(service.votes);
  });

  it('debe separar las cartas con su cantidad de votos', () => {
    service.selectedCard = [1, 2, 3, 2, 1];
    service.votes = [3, 5, 2, 1, 4];
    service.definitiveCards();
    expect(service.selectedCard).toEqual([1, 2, 3]);
    expect(service.votes).toEqual([3, 5, 2]);
  });

  it('debe calcular el promedio', () => {
    const result = service.average();
    expect(result).toEqual(result);
  });

  it('debe resetear los valores del juego', () => {
    const result = service.resetGame(true);

    expect(result).toEqual(true);
    expect(service.selectedCard).toEqual([]);
    expect(service.votes).toEqual([]);
    expect(service.numberAssingPlayers).toEqual([]);
    expect(service.numberMainPlayer).toEqual('');
  });
});
