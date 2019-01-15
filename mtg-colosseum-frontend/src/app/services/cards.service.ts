import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient){}

  getCardByName(name){
    return this.http.get(`${this.uri}/cards/name/${name}`);
  }
  getCardByCmc(cmc){
    return this.http.get(`${this.uri}/cards/cmc/${cmc}`);    
  }
}
