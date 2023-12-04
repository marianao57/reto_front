import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextComponent } from './input-text.component';
import { IconPragmaComponent } from '../icon-pragma/icon-pragma.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextComponent, IconPragmaComponent],
      schemas: [NO_ERRORS_SCHEMA], // Agrega el esquema NO_ERRORS_SCHEMA para ignorar componentes desconocidos
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
