import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

//Service
import { ArticleService } from '../service/article.service';

//Custom class
import { Article } from 'src/model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  @Input()
  article?: Article;

  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {

  }

  getArticle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.params.subscribe(params => {
      this.articleService.getArticle(params['id']).subscribe({ next: (data) => this.article = data });
    });
  }

  ngOnInit(): void {
    this.getArticle()
  }
  goBack(): void {
    this.router.navigateByUrl('/');
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article).subscribe()
    this.goBack()
  }
}


