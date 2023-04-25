import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/domain/models/postModel';
import { User } from 'src/app/domain/models/userModel';
import { AuthenticationService } from 'src/app/domain/services/authentication.service';
import { PostService } from 'src/app/domain/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PostDTO } from 'src/app/domain/models/Dtos/PostDTO';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

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

  selectedFile?: ImageSnippet;
  postImage: string = ""

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
    public domSanitizer: DomSanitizer
    ) 
    {
      this.currentUser = authenticationService.currentUserValue,
      this.route.queryParams.subscribe(params => {
        this.currentPost = params['id']
      })
  
      this.formCreate = this.formbuilder.group({
        message: [null],
        photo: [null]
      });

      this.formUpdate = this.formbuilder.group({
        id: [this.currentPost],
        message: [null],
        photo: [null],
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

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.postImage = this.selectedFile.src;
    });

    reader.readAsDataURL(file);
  }

  getSafeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${atob(url)}`);
  }

  createPost() {
    var message = this.formCreate.value.message;
    var postDTO = new PostDTO(message,  this.postImage);
    this.postService.createPost(postDTO).subscribe(data => {
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
