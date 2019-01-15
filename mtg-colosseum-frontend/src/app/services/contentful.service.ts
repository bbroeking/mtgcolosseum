import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });
  constructor() { }
  getArticles(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost'
    }, query))
      .then(res => res.items);
  }
  getArticle(articleId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
     content_type: 'blogPost'
    }, {'sys.id': articleId}))
      .then(res => res.items[0]);
  }
}