import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPlayerComponent } from './icon-player.component';
import { ManageLocalStorageService } from '../../services/manage-local-storage.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('IconPlayerComponent', () => {
  let component: IconPlayerComponent;
  let fixture: ComponentFixture<IconPlayerComponent>;
  let manageLocalStorageService: ManageLocalStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconPlayerComponent],
      providers: [ManageLocalStorageService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPlayerComponent);
    component = fixture.componentInstance;
    manageLocalStorageService = TestBed.inject(ManageLocalStorageService);
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Debería retornar "NN" si no hay nombre de jugador', () => {
    const mockData: any = { player_name: undefined }; // Simula que no hay nombre de jugador

    // Simula el comportamiento de manageLocalStorageService.data
    spyOn<any>(manageLocalStorageService, 'data').and.returnValue(mockData);

    const result = component.getInitials();

    expect(result).toEqual('NN');
  });

  it('Retorna las dos primeras letras del nombre del jugador', () => {
    const playerName: any = 'Mariana';
    const mockData: any = { player_name: playerName };
    manageLocalStorageService.saveLocalStorage('player_name', playerName);

    spyOn<any>(manageLocalStorageService, 'data').and.returnValue(mockData);

    const result = component.getInitials();

    expect(result).toEqual('MA');
  });
});
