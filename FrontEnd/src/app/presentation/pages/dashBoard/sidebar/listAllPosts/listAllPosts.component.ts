import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/domain/models/postModel';
import { User } from 'src/app/domain/models/userModel';
import { AuthenticationService } from 'src/app/domain/services/authentication.service';
import { PostService } from 'src/app/domain/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PostDTO } from 'src/app/domain/models/Dtos/PostDTO';
import { DatePipe } from '@angular/common';
import { UpdatePostDTO } from 'src/app/domain/models/Dtos/UpdatePostDTO';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-listAllPosts',
  templateUrl: './listAllPosts.component.html',
  styleUrls: ['./listAllPosts.component.css']
})
export class ListAllPostsComponent implements OnInit {

  @ViewChild('commentInput') commentInputRef!: ElementRef;
  deletePostId : number = 0;
  users: User[] = [];
  posts: Post[] = [];
  currentUser: User;
  liked: Post[] = [];

  selectedFile?: ImageSnippet;
  postImage: string = ""
  showButton = false;
  formCreate: FormGroup;
  formUpdate: FormGroup;
  formDelete: FormGroup;
  currentPost: number = 0;
  currentDate = new Date();
  commentValue: string = '';
  
  constructor(
    private elementRef: ElementRef,
    private postService: PostService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    public domSanitizer: DomSanitizer,
    private datePipe: DatePipe
    ) 
    {
      this.currentUser = authenticationService.currentUserValue,
  
      this.formCreate = this.formbuilder.group({
        message: [null],
        photo: [null]
      });

      this.formUpdate = this.formbuilder.group({
        id: [this.currentPost],
        message: [null],

      });

      this.formDelete = this.formbuilder.group({
        id: [this.currentPost],
      });
    }

  ngOnInit():void {
    this.listPosts();
  }

  listPosts(){
    this.postService.listPosts().subscribe((data : any) => {
      this.posts = data;
    })
  }

  timeDifference(createdAt: string) {
    const createdAtDate = new Date(createdAt);
    const diff = this.currentDate.getTime() - createdAtDate.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const formattedTime = this.datePipe.transform(createdAtDate, 'short');

    if (days > 0) {
      return `${days} dias atrás `;
    } else if (hours > 0) {
      return `${hours} horas atrás `;
    } else if (minutes > 0) {
      return `${minutes} minutos atrás `;
    } else if (seconds <= 30) {
      return `agora `;
    } else {
      return `${seconds} segundos atrás `;
    }
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
    this.postService.deletePost(this.formDelete.value.id).subscribe((data: any) =>{
      window.location.reload();
    })
  }

  updatePost() {
    this.postService.updatePost(this.formUpdate.value).subscribe(data => {
      window.location.reload();
    })
  }

  scrollToComment(index: number) {
    const commentId = `comment-${index}`;
    const commentElement = document.getElementById(commentId);

    if (commentElement) {

      const commentInputPosition = commentElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: commentInputPosition, behavior: 'smooth' });
      const commentPosition = commentElement.getBoundingClientRect().top;
      const scrollPosition = commentInputPosition - commentPosition;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      commentElement.focus();
      this.showButton = true;
    }
  }

  createComment(){
    var comment = this.commentValue;
    console.log(comment);
    // var postDTO = new PostDTO(message,  this.postImage);
    // this.postService.createPost(postDTO).subscribe(data => {
      window.location.reload();
    // })
  }

  updateComment(){
    //arrumar
    this.postService.updateComment(this.formUpdate.value).subscribe(data => {
      window.location.reload();
    })
  }

  deleteComment(){
    //arrumar
    this.postService.deleteComment(this.formDelete.value.id).subscribe((data: any) =>{
      window.location.reload();
    })
  }

  hideButton() {
    setTimeout(() => this.commentValue = '', 200);
    setTimeout(() => this.showButton = false, 200);
  }

  createLike(id:any){
    this.postService.createLike(id).subscribe((data: any) =>{
      this.ngOnInit();
    })
  }

  removeLike(id:any){
    this.postService.removeLike(id).subscribe((data: any) =>{
      this.ngOnInit();
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

  openModalAttPost(postId:Number) {
    const modal = this.elementRef.nativeElement.querySelector('.updatePost');
    modal.style.display = 'block';
    this.formUpdate.patchValue({id: postId});
  }

  closeModalAttPost() {
    const modal = this.elementRef.nativeElement.querySelector('.updatePost');
    modal.style.display = 'none';
  }

  openModalDeletePost(postId:Number) {
    const modal = this.elementRef.nativeElement.querySelector('.deletePost');
    modal.style.display = 'block';
    this.formDelete.patchValue({id: postId});
  }

  closeModalDeletePost() {
    const modal = this.elementRef.nativeElement.querySelector('.deletePost');
    modal.style.display = 'none';
  }
}
