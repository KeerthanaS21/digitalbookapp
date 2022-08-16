import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-browse',
  templateUrl: './book-browse.component.html',
  styleUrls: ['./book-browse.component.css']
})
export class BookBrowseComponent implements OnInit {

  pageTitle = 'Display Books'
  iconWidth = 50
  iconMargin = 2

  books : any[] = [
    {
      urlLogo : "assets/Images/book1.jpeg",
      bookTitle : "Java",
      author : "Leo",
      publisher : "Publisher2",
      price : "743.78",
      publishedDate : "2022-08-12 16:57:10.080",
      category : "Programming Language"
    },
    {
      urlLogo : "assets/Images/book2.jpeg",
      bookTitle : "C#",
      author : "Nick",
      publisher : "Publisher3",
      price : "843.78",
      publishedDate : "2022-08-12 16:57:10.080",
      category : "Programming Language"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
