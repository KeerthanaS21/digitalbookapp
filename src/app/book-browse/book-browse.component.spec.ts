import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBrowseComponent } from './book-browse.component';

describe('BookBrowseComponent', () => {
  let component: BookBrowseComponent;
  let fixture: ComponentFixture<BookBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
