import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InviteComponent } from './invite.component';

describe('InviteComponent', () => {
  let component: InviteComponent;
  let fixture: ComponentFixture<InviteComponent>;
  let originalClipboard: Clipboard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InviteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    originalClipboard = navigator.clipboard;

    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jasmine
          .createSpy('writeText')
          .and.returnValue(Promise.resolve()),
      },
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
      configurable: true,
    });
  });

  it('create the component', () => {
    expect(component).toBeTruthy();
  });

  it('debería copiar el contenido al portapapeles', () => {
    const mockLink: any = 'https://example.com';
    spyOn<any>(document, 'getElementById').and.returnValue({
      innerText: mockLink,
    });

    component.copy();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockLink);
  });

  it('debe cambiar el estado del componente (cerrarlo)', () => {
    const divMock = document.createElement('div');
    const divInvite = document.createElement('div');
    divMock.id = 'container-game';
    divInvite.id = 'invite';
  
    spyOn(document, 'getElementById').and.callFake((id: string) => {
      switch (id) {
        case 'container-game':
          return divMock;
        case 'invite':
          return divInvite;
        default:
          return null;
      }
    });
  
    component.close();
  
    expect(divMock.style.zIndex).toBe('0');
    expect(divInvite.style.display).toBe('none');
  });
  
  
});
