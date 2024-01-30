import { Component, Input } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from '../../app.component';
import { BtnComponent } from '../../componentes/btn/btn.component';
@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [OverlayModule, BtnComponent],
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {
  isOpen = false;
  @Input() htmlHeader = 'header';
}
