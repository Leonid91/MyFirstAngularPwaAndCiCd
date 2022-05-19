import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleNew } from 'src/model/articleNew';
import { Article } from 'src/model/article';
import { ArticleService } from '../service/article.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router : Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  goBack() : void {
    this.router.navigateByUrl('/');
  }

  createArticle() {
    const { title, content, author } = this.articleForm.value;
    const newArticle = {
      title,
      content,
      author
    }

    const articleNew = new ArticleNew(newArticle);

    this.articleService.createArticle(articleNew).subscribe({next: () => this.goBack()})
  }
}
