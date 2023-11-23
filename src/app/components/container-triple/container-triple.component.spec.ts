import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTripleComponent } from './container-triple.component';

describe('ContainerTripleComponent', () => {
  let component: ContainerTripleComponent;
  let fixture: ComponentFixture<ContainerTripleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerTripleComponent]
    });
    fixture = TestBed.createComponent(ContainerTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
