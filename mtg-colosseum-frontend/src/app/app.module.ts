import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
// Services
import { ContentfulService } from './services/contentful.service';
import { CardsService } from './services/cards.service'
// Pipes
import { MdToHtmlPipe } from './md-to-html.pipe';
// Components
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeckbuilderComponent } from './deckbuilder/deckbuilder.component';
import { DecklistComponent } from './decklist/decklist.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'articles', component: ArticleListComponent},
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'deckbuilder', component: DeckbuilderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    MdToHtmlPipe,
    NavbarComponent,
    DeckbuilderComponent,
    DecklistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AutoCompleteModule,
    FormsModule,
    CardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContentfulService, CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
