import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialLogoComponent } from './initial-logo.component';

describe('InitialLogoComponent', () => {
  let component: InitialLogoComponent;
  let fixture: ComponentFixture<InitialLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialLogoComponent],
    });
    fixture = TestBed.createComponent(InitialLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create the component', () => {
    expect(component).toBeTruthy();
  });
});
