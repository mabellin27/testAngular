import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private articleSvc: ArticleService) {}
  title = 'Hello Angular';
  subtitle = 'Mabel is <i>testing</i>.';

  get post() {
    return this.articleSvc.post;
  }

  ngOnInit(): void {
    this.articleSvc.run();
    this.articleSvc.loadArticle();
  }

}
