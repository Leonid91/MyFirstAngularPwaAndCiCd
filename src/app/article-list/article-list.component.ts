import { AfterViewInit, ViewChild, Component } from '@angular/core';
import { Article } from 'src/model/article';
import { ArticleService } from '../service/article.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Id', 'Title', 'Content', 'Details']
  articleListData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private articleService: ArticleService) {

  }

  delete(article: Article) {
    this.articleService.deleteArticle(article).subscribe()
  }

  ngAfterViewInit() {

    this.articleService.getArticles().subscribe(
      async data => {
        this.articleListData = await new MatTableDataSource<Article>(data)
        this.articleListData.paginator = this.paginator;
        this.articleListData.sort = this.sort;
    }).closed
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.articleListData.filter = filterValue.trim().toLowerCase();

    if (this.articleListData.paginator) {
      this.articleListData.paginator.firstPage();
    }
  }
}
