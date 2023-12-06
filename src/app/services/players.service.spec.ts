import { PlayersService } from './players.service';
import { ManageLocalStorageService } from './manage-local-storage.service';

describe('PlayersService', () => {
  let service: PlayersService;
  let manageLocalStorageService: ManageLocalStorageService;

  beforeEach(() => {
    manageLocalStorageService = new ManageLocalStorageService();
    service = new PlayersService(manageLocalStorageService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('debe inicializar el numero para el jugador principal', () => {
    spyOn(manageLocalStorageService, 'getData').and.returnValue('Test Player');
    service = new PlayersService(manageLocalStorageService);
    expect(service.nameMainPlayer).toBe('Test Player');
  });

  it('generar el array de los jugadores', () => {
    const expectedPlayers = [
      'Jose',
      'Camila',
      'Laura',
      'Manuel',
      'Fernando',
      'Samuel',
      'Monica',
      service.nameMainPlayer,
    ];
    expect(service.players).toEqual(expectedPlayers);
  });

  it('generar un array con números unicos para los votos', () => {
    const uniqueNumbers:any = service.fillArrayNumbers();
    const isUnique = (arr: number[]) => new Set(arr).size === arr.length;
    expect(uniqueNumbers.length).toBe(9); // Asegurar que haya 9 números generados
    expect(isUnique(uniqueNumbers)).toBeTrue(); // Verificar que los números no se repitan
  });
});
