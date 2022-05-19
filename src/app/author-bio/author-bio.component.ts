import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Service
import { AuthorService } from '../service/author.service';

//Custom class
import { AuthorBio } from 'src/model/authorBio';

@Component({
  selector: 'app-author-bio',
  templateUrl: './author-bio.component.html'
})
export class AuthorBioComponent implements OnInit {
  author: AuthorBio;

  constructor(private authorService: AuthorService, private route: ActivatedRoute) {

  }

  getAuthor(): void {
    const name = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe(params => {
      this.authorService.getAuthor(params['id']).subscribe({ next: (data) => this.author = data });
    });
  }

  ngOnInit(): void {
    this.getAuthor()
  }
}
