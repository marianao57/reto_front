import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { IconPragmaComponent } from '../icon-pragma/icon-pragma.component';
import { IconPlayerComponent } from '../icon-player/icon-player.component';
import { InviteComponent } from '../invite/invite.component';
import { ManageLocalStorageService } from 'src/app/services/manage-local-storage.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let manageLocalStorage: ManageLocalStorageService | any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        IconPragmaComponent,
        IconPlayerComponent,
        InviteComponent,
      ],
      providers: [ManageLocalStorageService],
      schemas: [NO_ERRORS_SCHEMA], // Agrega el esquema NO_ERRORS_SCHEMA para ignorar componentes desconocidos
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    manageLocalStorage = TestBed.inject(ManageLocalStorageService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar el nombre del juego guardado en el servicio ManageLocalStorage', () => {
    const gameName: any = 'prueba';
    const mockData: any = { game_name: gameName };
    manageLocalStorage.saveLocalStorage('game_name', gameName);

    spyOn(manageLocalStorage, 'data').and.returnValue(mockData);
    const result = component.execute();
    expect(result).toEqual(mockData['game_name']);
  });

  it('debería mostrar el componente para invitar jugadores', () => {
    const divMock = document.createElement('div');
    divMock.id = 'invite';
    spyOn(document, 'getElementById').and.returnValue(divMock);

    component.invite();

    expect(divMock.style.display).toBe('block');
  });
});
