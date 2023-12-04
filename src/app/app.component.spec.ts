import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputPlayerComponent } from './components/input-player/input-player.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { InitialLogoComponent } from './components/initial-logo/initial-logo.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputTextComponent,
        InputPlayerComponent,
        GameTableComponent,
        InitialLogoComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'reto'`, () => {
    expect(component.title).toEqual('reto');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('title')?.textContent).toContain(
      'reto'
    );
  });
});
