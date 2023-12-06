import { ManageLocalStorageService } from './manage-local-storage.service';

describe('ManageLocalStorageService', () => {
  let service: ManageLocalStorageService;

  beforeEach(() => {
    service = new ManageLocalStorageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe guardar en data la información', () => {
    const key = 'testKey';
    const value = 'testValue';

    spyOn(localStorage, 'setItem'); // Espiamos el localStorage.setItem

    service.saveLocalStorage(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, value); // Verificamos si se llamó a localStorage.setItem con los parámetros esperados
    expect(service.data[key]).toBe(value); // Verificamos si this.data se actualizó correctamente
  });

  it('debe obtener la informacion de data', () => {
    const key = 'testKey';
    const value = 'testValue';

    service.data[key] = value; // Establecemos un valor directamente en this.data

    const retrievedValue = service.getData(key);

    expect(retrievedValue).toBe(value); // Verificamos si getData devuelve el valor esperado
  });
});
