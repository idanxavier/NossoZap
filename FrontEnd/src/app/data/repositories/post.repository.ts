import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostDTO } from "src/app/domain/models/Dtos/PostDTO";
import { Post } from 'src/app/domain/models/postModel';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PostRepository {

  constructor(
  private httpClient: HttpClient) { }

  listPosts() {
    return this.httpClient.get(`${environment.apiUrl}` + '/Post/list-posts');
  }

  listMyPosts() {
    return this.httpClient.get(`${environment.apiUrl}` + '/Post/list-my-posts');
  }

  deletePost(id:number) {
    return this.httpClient.delete(`${environment.apiUrl}` + '/Post/remove-post?postId=' + id );
  }

  createPost(post: PostDTO) {
    return this.httpClient.post(`${environment.apiUrl}` + '/Post/create-post', post);
  }

  updatePost(id:number) {
    return this.httpClient.put(`${environment.apiUrl}` + '/Post/update-post', id);
  }

  createLike(id:number) {
    return this.httpClient.post(`${environment.apiUrl}` + '/Like/create-like', id);
  }

  removeLike(id:number) {
    return this.httpClient.delete(`${environment.apiUrl}` + '/Like/remove-like', {body: id});
  }
}
