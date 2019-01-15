import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit {
  article: Entry<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }
  ngOnInit() {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getArticle(articleId)
      .then((article) => {
        this.article = article;
        console.log(this.article);
      });
  }
  goToList() {
    this.router.navigate(['/articles']);
  }
}