import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRepository } from 'src/app/data/repositories/post.repository';
import { Post } from '../models/postModel';
import { PostDTO } from '../models/Dtos/PostDTO';
import { UpdatePostDTO } from '../models/Dtos/UpdatePostDTO';
import { CommentPostDTO } from '../models/Dtos/CommentPostDTO';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
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

  updatePost(updatePost:UpdatePostDTO) {
    return this.postRepository.updatePost(updatePost);
  }

  createLike(id:number) {
    return this.postRepository.createLike(id);
  }

  removeLike(id:number) {
    return this.postRepository.removeLike(id);
  }

  commentPost(commentPost: CommentPostDTO) {
    return this.postRepository.commentPost(commentPost);
  }

  updateComment(updateComment: UpdatePostDTO) {
    return this.postRepository.updateComment(updateComment);
  }

  deleteComment(id:number) {
    return this.postRepository.deleteComment(id);
  }
}
