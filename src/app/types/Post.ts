export class Post {
    private titlePost: string;
    private contentPost: string;
    private createdAtPost: Date;

    constructor(title : string, content : string) {
        this.createdAtPost = new Date();
        this.titlePost = title;
        this.contentPost = content;
    }

}