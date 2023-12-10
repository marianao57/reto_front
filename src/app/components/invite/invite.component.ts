import { Component } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css'],
})
export class InviteComponent {
  link: any = document.getElementById('link')?.innerText;
  displayInvite = 'none';

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
    const game = document.getElementById('container-game');
    const invite = document.getElementById('invite');
    if (game && invite) {
      game.style.zIndex = '0';
      invite.style.display = 'none';
    }
  }
}
