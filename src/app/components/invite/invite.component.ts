import { Component } from '@angular/core';
import { ResetService } from 'src/app/services/reset.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css'],
})
export class InviteComponent {
  link: any = document.getElementById('link')?.innerText;
  display: string = 'block';

  constructor(private resetGame: ResetService) {}

  ngOnInit() {
    this.link = document.getElementById('link')?.innerText;
  }

  copy(): void {
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
    this.display = 'none';
    let game = document.getElementById('container-game');
    let header = document.getElementById('header-game');
    if (game && header) {
      game.style.zIndex = '0';
    }
  }
}
