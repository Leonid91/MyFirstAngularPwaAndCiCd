export class AuthorBio {
    id: string
    bio: string

    constructor(id: string, bio: string) {
        this.id = id
        this.bio = bio
    }

    getBio(): string {
        return this.bio;
    }

    getNameId(): string {
        return this.id;
    }
}