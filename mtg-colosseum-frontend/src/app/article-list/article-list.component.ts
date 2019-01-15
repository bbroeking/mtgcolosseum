import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Entry<any>[] = [];
  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }
  ngOnInit() {
    this.contentfulService.getArticles()
      .then(articles => this.articles = articles);
  }
  goToCourseDetailsPage(articleId) {
    console.log(articleId);
    this.router.navigate(['/article', articleId]);
  }
}