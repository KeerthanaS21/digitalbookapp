import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { SearchBook } from '../models/searchbooks';

@Injectable({
    providedIn: 'root'
})
export class SearchBookService{

    searchBookUrl = 'https://localhost:7125/Reader/SearchBooks'; 

    constructor(private http: HttpClient) {}

    //Search all books based on filter
    getAllBooks():Observable<SearchBook[]>{
        return this.http.get<SearchBook[]>(this.searchBookUrl);
    }

    
}