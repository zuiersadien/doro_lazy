import { Component } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { InputComponent } from '../../componentes/input/input.component';
import { Tag } from '../../models/tag.model';
import { TagsService } from '../../services/tags.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-overlay',
  standalone: true,
  imports: [OverlayComponent, InputComponent, CommonModule],
  templateUrl: './tag-overlay.component.html',
  styleUrl: './tag-overlay.component.css',
})
export class TagOverlayComponent {
  constructor(private tagService: TagsService) {}
  tagSelected: number[] = [];
  tags: Tag[] = [];
  filteredTags: Tag[] = this.tags;
  tagCreateSearch: string = '';
  hideShowButtonClearTags: boolean = false;
  SearchfilterTags() {
    console.log(this.tags);
    this.filteredTags = this.tags.filter((tag: Tag) => {
      return tag.description.includes(this.tagCreateSearch);
    });
    this.changeHideShowButtonClearTags();
  }
  clearTagCreateSearch() {
    this.tagCreateSearch = '';
    this.SearchfilterTags();
  }
  changeHideShowButtonClearTags() {
    if (this.tagCreateSearch.length == 0) {
      this.hideShowButtonClearTags = false;
    } else {
      this.hideShowButtonClearTags = true;
    }
  }
  insertTagSelected(id: number) {
    if (this.tagSelected.includes(id)) {
      let indexId = this.tagSelected.indexOf(id);
      this.tagSelected.splice(indexId, 1);
    } else {
      this.tagSelected.push(id);
    }
    console.log(this.tagSelected);
  }
  allTags() {
    this.tagService.getAll().subscribe({
      next: (response: any) => {
        this.tags = response;
        this.filteredTags = response;
      },
    });
  }
  ngOnInit() {
    this.allTags();
  }
}
