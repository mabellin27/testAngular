import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }
  orgPost;
  post;
  run() {
    console.log('service run');
  }
  loadArticle() {
    this.httpClient.get('https://conduit.productionready.io/api/articles').subscribe(
      (resp: any) => { this.post = resp.articles; this.orgPost = resp.articles;
    });
  }

  searchArticles($event) {
    if ($event) {
      this.post = this.orgPost.filter(article => article.title.indexOf($event) !== -1);
    } else {
      this.post = this.orgPost;
    }

  }
}
