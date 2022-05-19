export class ArticleNew {
    title: string;
    content: string;
    author: string;

    constructor(articleNew: any) {
        this.title = articleNew.title;
        this.content = articleNew.content;
        this.author = articleNew.author;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }

    getAuthor(): string {
        return this.author;
    }
}