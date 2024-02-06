import { Component } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { InputComponent } from '../../componentes/input/input.component';
import { Tag } from '../../models/tag.model';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tag-overlay',
  standalone: true,
  imports: [OverlayComponent, InputComponent],
  templateUrl: './tag-overlay.component.html',
  styleUrl: './tag-overlay.component.css',
})
export class TagOverlayComponent {
  constructor(private tagService: TagsService) {}
  allTags() {
    this.tagService.getAll().subscribe({
      next: (response: any) => {
        this.tags = response;
      },
    });
  }
  tags: Tag[] = [];
  ngOnInit() {
    this.allTags();
  }
}
