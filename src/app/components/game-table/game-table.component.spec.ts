import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameTableComponent } from './game-table.component';
import { HeaderComponent } from '../header/header.component';
import { IconPragmaComponent } from '../icon-pragma/icon-pragma.component';
import { IconPlayerComponent } from '../icon-player/icon-player.component';
import { InviteComponent } from '../invite/invite.component';
import { CardComponent } from '../card/card.component';
import { ContainerTripleComponent } from '../container-triple/container-triple.component';
import { PlayerNameComponent } from '../player-name/player-name.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GameTableComponent', () => {
  let component: GameTableComponent;
  let fixture: ComponentFixture<GameTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameTableComponent,
        HeaderComponent,
        IconPragmaComponent,
        IconPlayerComponent,
        InviteComponent,
        CardComponent,
        ContainerTripleComponent,
        PlayerNameComponent
      ],
      schemas: [NO_ERRORS_SCHEMA] // Agrega el esquema NO_ERRORS_SCHEMA para ignorar componentes desconocidos
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
