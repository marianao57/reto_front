import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlayerComponent } from './icon-player.component';

describe('IconPlayerComponent', () => {
  let component: IconPlayerComponent;
  let fixture: ComponentFixture<IconPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconPlayerComponent]
    });
    fixture = TestBed.createComponent(IconPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
