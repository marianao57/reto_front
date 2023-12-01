import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextComponent],
    });
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should bind input value to component property', () => {
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('#text');

    expect(inputElement.value).toBe('');

    inputElement.value = 'Test input';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.inputValue).toBe('Test input');
  });
});
