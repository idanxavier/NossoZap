export class UpdatePostDTO {
    id: number = 0;
    message: string = "";

    constructor(
        message: string,
        id: number,
    ) {
        this.id = id
        this.message = message
    }
  }
  