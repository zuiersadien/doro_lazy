import { Component } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { InputComponent } from '../../componentes/input/input.component';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-tag-overlay',
  standalone: true,
  imports: [OverlayComponent, InputComponent],
  templateUrl: './tag-overlay.component.html',
  styleUrl: './tag-overlay.component.css',
})
export class TagOverlayComponent {
  allTags() {}
  tags: Tag[] = [];
}
