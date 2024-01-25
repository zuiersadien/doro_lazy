import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {}
