import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/domain/models/postModel';
import { User } from 'src/app/domain/models/userModel';
import { AuthenticationService } from 'src/app/domain/services/authentication.service';
import { PostService } from 'src/app/domain/services/post.service';

@Component({
  selector: 'app-listAllPosts',
  templateUrl: './listAllPosts.component.html',
  styleUrls: ['./listAllPosts.component.css']
})
export class ListAllPostsComponent implements OnInit {

  deletePostId : number = 0;
  users: User[] = [];
  posts: Post[] = [];
  currentUser: User;
  liked: Post[] = [];

  formCreate: FormGroup;
  formUpdate: FormGroup;
  currentPost: number = 0;

  
  constructor(
    private elementRef: ElementRef,
    private postService: PostService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    ) 
    {
      this.currentUser = authenticationService.currentUserValue,
      this.route.queryParams.subscribe(params => {
        this.currentPost = params['id']
      })
  
      this.formCreate = this.formbuilder.group({
        titulo: [null],
        mensagem: [null],
        foto: [null]
      });

      this.formUpdate = this.formbuilder.group({
        id: [this.currentPost],
        titulo: [null],
        mensagem: [null]
      });
    }

  ngOnInit():void {
    // this.listPosts();
  }

  listPosts(){
    this.postService.listPosts().subscribe((data : any) => {
      this.posts = data;
    })
  }

  createPost(){
    this.postService.createPost(this.formCreate.value).subscribe(data => {
      window.location.reload();
    })
  }
  deletePost(){
    this.postService.deletePost(this.deletePostId).subscribe((data: any) =>{
      window.location.reload();
    })
  }

  updatePost() {
    this.postService.updatePost(this.formUpdate.value).subscribe(data => {
      window.location.reload();
    })
  }

  openModalNewPost() {
    const modal = this.elementRef.nativeElement.querySelector('.createPost');
    modal.style.display = 'block';
  }

  closeModalNewPost() {
    const modal = this.elementRef.nativeElement.querySelector('.createPost');
    modal.style.display = 'none';
  }

  openModalAttPost() {
    const modal = this.elementRef.nativeElement.querySelector('.updatePost');
    modal.style.display = 'block';
  }

  closeModalAttPost() {
    const modal = this.elementRef.nativeElement.querySelector('.updatePost');
    modal.style.display = 'none';
  }
}
