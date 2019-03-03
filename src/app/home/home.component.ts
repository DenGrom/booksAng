import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Book } from '../book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:Array<Book>;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.books = this.data.getHomeContentData();
  }

}
