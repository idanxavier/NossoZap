import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostDTO } from "src/app/domain/models/Dtos/PostDTO";
import { UpdatePostDTO } from "src/app/domain/models/Dtos/UpdatePostDTO";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PostRepository {

  constructor(
  private httpClient: HttpClient) { }
  
  createPost(post: PostDTO) {
    return this.httpClient.post(`${environment.apiUrl}` + '/Post/create-post', post);
  }

  updatePost(updatePost: UpdatePostDTO) {
    return this.httpClient.post(`${environment.apiUrl}` + '/Post/update-post', updatePost);
  }
  
  deletePost(id:number) {
    return this.httpClient.delete(`${environment.apiUrl}` + '/Post/remove-post?postId=' + id );
  }

  listPosts() {
    return this.httpClient.get(`${environment.apiUrl}` + '/Post/list-posts');
  }

  listMyPosts() {
    return this.httpClient.get(`${environment.apiUrl}` + '/Post/list-my-posts');
  }

  createLike(id:number) {
    return this.httpClient.post(`${environment.apiUrl}` + '/Like/create-like', id);
  }

  removeLike(id:number) {
    return this.httpClient.delete(`${environment.apiUrl}` + '/Like/remove-like', {body: id});
  }
}
