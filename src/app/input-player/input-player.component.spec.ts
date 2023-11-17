import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPlayerComponent } from './input-player.component';

describe('InputPlayerComponent', () => {
  let component: InputPlayerComponent;
  let fixture: ComponentFixture<InputPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPlayerComponent]
    });
    fixture = TestBed.createComponent(InputPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
