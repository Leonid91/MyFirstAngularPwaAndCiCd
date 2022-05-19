import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// Custom class
import { AuthorBio } from 'src/model/authorBio';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private static readonly baseUrl: string = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/LeonidShuryginTP1Angular";

  constructor(private http: HttpClient) {
  }

  public getAuthor(name: string): Observable<AuthorBio> {
    return this.http.get<AuthorBio>(`${AuthorService.baseUrl}/author/` + name).pipe(
      map(data =>  new AuthorBio(data.id, data.bio))
    )
  }
}
