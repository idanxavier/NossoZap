export class CommentPostDTO {
    postId: number = 0;
    userId: number = 0;
    message: string = "";
    date: string = "";

    constructor(
        postId: number,
        userId: number,
        message: string,
        date: string,
    ) {
        this.postId = postId
        this.userId = userId
        this.message = message
        this.date = date
    }
  }
  