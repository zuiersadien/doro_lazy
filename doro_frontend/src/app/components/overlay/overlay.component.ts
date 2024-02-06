import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
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
  constructor(private elRef: ElementRef) {}
  @Input()
  htmlHeader = 'header';

  // @HostListener('document:click', ['$event'])
  // closeMenu(event: Event) {
  //   if (!this.elRef.nativeElement.contains(event.target)) {
  //     this.isOpen = false;
  //   }
  // }
}
