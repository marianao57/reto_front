import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageLocalStorageService } from 'src/app/services/manage-local-storage.service';
import { PlayerNameComponent } from './player-name.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('PlayerNameComponent', () => {
  let component: PlayerNameComponent;
  let fixture: ComponentFixture<PlayerNameComponent>;
  let manageLocalStorageService: ManageLocalStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerNameComponent],
      providers: [ManageLocalStorageService],
      schemas: [NO_ERRORS_SCHEMA], // Agrega el esquema NO_ERRORS_SCHEMA para ignorar componentes desconocidos
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNameComponent);
    component = fixture.componentInstance;
    manageLocalStorageService = TestBed.inject(ManageLocalStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe retornar el nombre del jugador', () => {
    const playerName: any = 'Mariana';
    const mockData: any = { player_name: playerName };
    manageLocalStorageService.saveLocalStorage('player_name', playerName);

    spyOn<any>(manageLocalStorageService, 'data').and.returnValue(mockData);
    const result = component.execute();
    expect(result).toEqual(mockData['player_name']);
  });
});
