import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagOverlayComponent } from './tag-overlay.component';

describe('TagOverlayComponent', () => {
  let component: TagOverlayComponent;
  let fixture: ComponentFixture<TagOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
