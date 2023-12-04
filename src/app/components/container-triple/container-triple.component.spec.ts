import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ContainerTripleComponent } from './container-triple.component'; // Ajusta la ruta de tu componente
import { DisplayComponentsService } from 'src/app/services/display-components.service';
import { CountVotesService } from 'src/app/services/count-votes.service';

describe('ContainerTripleComponent', () => {
  let component: ContainerTripleComponent;
  let fixture: ComponentFixture<ContainerTripleComponent>;
  let displayComponentsService: DisplayComponentsService;
  let countVotes: CountVotesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerTripleComponent],
      // Agrega tu servicio al arreglo de providers
      providers: [DisplayComponentsService, CountVotesService],
    }).compileComponents();

    displayComponentsService = TestBed.inject(DisplayComponentsService); // Obtiene una instancia del servicio
    countVotes = TestBed.inject(CountVotesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create the component', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a los métodos del servicio displayComponents al llamar a reset()', () => {
    spyOn(displayComponentsService, 'resetVotesPlayers');
    spyOn(displayComponentsService, 'resetVotesTotales');
    spyOn(displayComponentsService, 'resetOptions');
    spyOn(displayComponentsService, 'initialStyle');

    component.reset();

    expect(displayComponentsService.resetVotesPlayers).toHaveBeenCalled();
    expect(displayComponentsService.resetVotesTotales).toHaveBeenCalled();
    expect(displayComponentsService.resetOptions).toHaveBeenCalled();
    expect(displayComponentsService.initialStyle).toHaveBeenCalled();
  });

  it('debería cambiar el estado de displayButtonCount', () => {
    // Llama a la función que se va a probar
    const result = component.displayButtonFunction();

    if (component.resetAux) {
      expect(result).toBe(false);
      expect(component.displayButtonCount).toBe(false);
    } else if (
      component.n &&
      !component.displayLoader &&
      !component.displayButtonReset
    ) {
      expect(result).toBe(true);
      expect(component.displayButtonCount).toBe(true);
    } else {
      expect(result).toBe(false);
    }
  });

  it('debería retornar false si resetAux es verdadero', () => {
    component.resetAux = true;

    const result = component.displayButtonResetFunction();

    expect(result).toBeFalse();
    expect(component.displayButtonReset).toBeFalse();
    expect(component.countVotes.reset).toBeFalse();
  });

  it('debería retornar true si las condiciones se cumplen', () => {
    component.resetAux = false;
    component.displayLoader = false;
    component.displayButtonCount = false;
    component.countVotes.numberMainPlayer = 5;

    const result = component.displayButtonResetFunction();

    expect(result).toBeTrue();
    expect(component.displayButtonReset).toBeTrue();
  });

  it('debería retornar false si las condiciones no se cumplen', () => {
    component.resetAux = false;
    component.displayLoader = true;
    component.displayButtonCount = true;
    component.countVotes.numberMainPlayer = null;

    const result = component.displayButtonResetFunction();

    expect(result).toBeFalse();
    expect(component.displayButtonReset).toBeFalse();
  });

  it('debería mostrar el elemento containerTotalVotes', () => {
    const divMock = document.createElement('div');
    divMock.id = 'containerTotalVotes';
    spyOn(document, 'getElementById').and.returnValue(divMock);

    component.displayTotalVotes();

    expect(divMock.style.visibility).toBe('visible');
  });
});
