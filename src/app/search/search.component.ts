import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared/index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  searchResults: Array<Person>;

  constructor(private searchService: SearchService) {}
    ngOnInit() {
  }

  search(): void {
    this.searchService.search(this.query).subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );
  }
}


