import { Component } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css'],
})
export class InviteComponent {
  link: any = document.getElementById('link')?.innerText;
  displayInvite: string = 'none';

  copy(): void {
    this.link = document.getElementById('link')?.innerText;
    navigator.clipboard.writeText(this.link).then(
      () => {
        console.log('Contenido copiado al portapapeles');
      },
      () => {
        console.error('Error al copiar');
      }
    );
  }
  close(): void {
    let game = document.getElementById('container-game');
    let invite = document.getElementById('invite');
    if (game && invite) {
      game.style.zIndex = '0';
      invite.style.display = 'none';
    }
  }
}
