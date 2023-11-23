import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPragmaComponent } from './icon-pragma.component';

describe('IconPragmaComponent', () => {
  let component: IconPragmaComponent;
  let fixture: ComponentFixture<IconPragmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconPragmaComponent]
    });
    fixture = TestBed.createComponent(IconPragmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
