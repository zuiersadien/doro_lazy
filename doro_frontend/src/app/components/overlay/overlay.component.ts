import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from '../../app.component';
import { BtnComponent } from '../../componentes/btn/btn.component';
import { TemplatePortal } from '@angular/cdk/portal';
@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [OverlayModule, BtnComponent],
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {
  @Output() overlayClosed = new EventEmitter<void>();

  isOpen = false;
  constructor(private elRef: ElementRef) {}
  @Input()
  htmlHeader = 'header';

  toggleOverlay() {
    this.isOpen = !this.isOpen;
  }

  closeOverlay() {
    this.isOpen = false;
    this.overlayClosed.emit();
    console.log('Overlay cerrado');
  }
  private templatePortal = TemplatePortal<any>;

  // @HostListener('document:click', ['$event'])
  // closeMenu(event: Event) {
  //   if (!this.elRef.nativeElement.contains(event.target)) {
  //     this.isOpen = false;
  //   }
  // }
}
