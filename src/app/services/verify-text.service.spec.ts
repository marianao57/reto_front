import { VerifyTextService } from './verify-text.service';

describe('VerifyTextService', () => {
  let service: VerifyTextService;

  beforeEach(() => {
    service = new VerifyTextService();
  });

  it('verifica si el nombre del jugador cumple los requerimientos generales', () => {
    expect(service.verifyNameGame('ValidName123')).toBe(1); // Nombre válido
    expect(service.verifyNameGame('name')).toBe(0); // Nombre demasiado corto
    expect(service.verifyNameGame('VeryLongNameThatExceedsTheMaxLength')).toBe(0); // Nombre demasiado largo
    expect(service.verifyNameGame('Name$With#SpecialCharacters')).toBe(0); // Nombre con caracteres especiales
    expect(service.verifyNameGame('NameWithMoreThan3Numbers12345')).toBe(0); // Nombre con más de 3 números
  });

  it('verifica que el nombre del jugador tenga o no caracteres especiales', () => {
    expect(service.checkSpecialCharacters('ValidName123')).toBeTrue(); // Nombre sin caracteres especiales
    expect(service.checkSpecialCharacters('NameWithSpecialCharacters$')).toBeFalse(); // Nombre con caracteres especiales
  });

  it('verifica que el nombre esté entre 5 y 20 caracteres', () => {
    expect(service.checkSize('Name')).toBeFalse(); // Nombre demasiado corto
    expect(service.checkSize('ValidName123456789012345')).toBeFalse(); // Nombre demasiado largo
    expect(service.checkSize('ValidName123')).toBeTrue(); // Nombre con longitud correcta
  });

  it('verifica cuantos números tiene el nombre del jugador', () => {
    expect(service.checkNumbers('NameWith1Number')).toBe(1); // Un número en el nombre
    expect(service.checkNumbers('NameWith123Numbers12345')).toBe(8); // Varios números en el nombre
    expect(service.checkNumbers('NameWithoutNumbers')).toBe(0); // Sin números en el nombre
  });
});

