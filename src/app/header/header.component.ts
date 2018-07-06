import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() keywordChanged = new EventEmitter<string>();
  keyword = '';

  constructor(private articleSvc: ArticleService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  highlightTitle = false;

  // tslint:disable-next-line:member-ordering
  fontSize = 24;
  clickSearch($event) {
    // this.keywordChanged.emit(this.keyword);
    this.articleSvc.searchArticles(this.keyword);
    console.log($event);
    this.highlightTitle = !this.highlightTitle;
    ++this.fontSize;
    // this.subtitle = 'You click the search button.';
  }

}
