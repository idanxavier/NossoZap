import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from 'src/app/domain/models/postModel';

@Injectable({
    providedIn: 'root'
})
export class PostRepository {

  apiUrl = 'https://localhost:5001/api'

  constructor(
  private httpClient: HttpClient) { }

  listPosts() {
    return this.httpClient.get(this.apiUrl + '/Post/list-posts');
  }

  listMyPosts() {
    return this.httpClient.get(this.apiUrl + '/Post/list-my-posts');
  }

  deletePost(id:number) {
    return this.httpClient.delete(this.apiUrl + '/Post/remove-post?postId=' + id );
  }

  createPost(post: Post) {
    return this.httpClient.post(this.apiUrl + '/Post/create-post', post);
  }

  updatePost(id:number) {
    return this.httpClient.put(this.apiUrl + '/Post/update-post', id);
  }

  createLike(id:number) {
    return this.httpClient.post(this.apiUrl + '/Like/create-like', id);
  }

  removeLike(id:number) {
    return this.httpClient.delete(this.apiUrl + '/Like/remove-like', {body: id});
  }
}
