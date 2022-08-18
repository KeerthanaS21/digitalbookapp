import { Component, OnInit } from '@angular/core';
import { SearchBook } from './models/searchbooks';
import { SearchBookService } from './services/searchbooks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'digitalbookapp'
  books:SearchBook[]  = []
  book:SearchBook = {
    urlLogo : '',
    bookTitle : '',
    author : '',
    publisher : '',
    price : '',
    publishedDate : '',
    category : '' 
  } 

  constructor(private searchBookService: SearchBookService){
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.searchBookService.getAllBooks()
    .subscribe(
      Response => {this.books = Response}
    )
  }

}
