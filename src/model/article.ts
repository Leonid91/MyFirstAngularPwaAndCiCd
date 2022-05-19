export class Article {
    id: number;
    title: string;
    content: string;
    author: string;

    constructor(id: number, title: string, content: string, author: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }

    getId(): number {
        return this.id;
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