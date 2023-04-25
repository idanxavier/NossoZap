import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRepository } from 'src/app/data/repositories/post.repository';
import { Post } from '../models/postModel';
import { PostDTO } from '../models/Dtos/PostDTO';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'https://localhost:5001/api'

  httpOptions = {
    Headers: new HttpHeaders({
      'Contet-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient,
    private postRepository: PostRepository
  ) { }

  listPosts() {
    return this.postRepository.listPosts();
  }

  listMyPosts() {
    return this.postRepository.listMyPosts();
  }

  deletePost(id:number) {
    return this.postRepository.deletePost(id);
  }

  createPost(post: PostDTO) {
    return this.postRepository.createPost(post);
  }

  updatePost(id:number) {
    return this.postRepository.updatePost(id);
  }

  createLike(id:number) {
    return this.postRepository.createLike(id);
  }

  removeLike(id:number) {
    return this.postRepository.removeLike(id);
  }
}
