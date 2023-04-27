import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { friendDTO } from 'src/app/domain/models/Dtos/FriendDTO';
import { User } from 'src/app/domain/models/userModel';
import { AuthenticationService } from 'src/app/domain/services/authentication.service';
import { FriendService } from 'src/app/domain/services/friend.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  formFriend: FormGroup;
  friends: friendDTO[] = [];
  currentUser : User;
  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private friendService: FriendService,
    private router: Router,
    private authenticationService: AuthenticationService) 
    {
      this.formFriend = this.formBuilder.group({
        username: [null]
      });

      this.currentUser = this.authenticationService.currentUserValue;
    }

  openModalAddFriend() {
    const modal = this.elementRef.nativeElement.querySelector('.addFriend');
    modal.style.display = 'block';
  }

  addFriend() {
    this.friendService.AddFriend(this.formFriend.value)
    .subscribe( () => {
    window.location.reload();
    })
  }

  closeModalAddFriend() {
    const modal = this.elementRef.nativeElement.querySelector('.addFriend');
    modal.style.display = 'none';
  }

  openModalPedidosAmizade() {
    const modal = this.elementRef.nativeElement.querySelector('.pedidosAmizade');
    modal.style.display = 'block';
  }

  ListRequestsPendents() {
    this.friendService.ListRequestsPendents().subscribe((data : any) => {
      this.friends = data;
    })
  }

  AcceptRequest(friendId: string) {
    this.friendService.AcceptRequest(friendId).subscribe((data : any) => {
      this.friends = data;
    })
  }

  RefuseRequest(friendId: any) {
    this.friendService.RefuseRequest(friendId).subscribe((data : any) => {
    window.location.reload();
    })
  }

  ListFriends(){
    this.friendService.ListFriends().subscribe((data : any) => {
      this.friends = data;
    })
  }

  closeModalPedidosAmizade() {
    const modal = this.elementRef.nativeElement.querySelector('.pedidosAmizade');
    modal.style.display = 'none';
  }

  openModalPerfil() {
    const modal = this.elementRef.nativeElement.querySelector('.perfil');
    modal.style.display = 'block';
  }

  closeModalPerfil() {
    const modal = this.elementRef.nativeElement.querySelector('.perfil');
    modal.style.display = 'none';
  }

  openModalFriendList() {
    const modal = this.elementRef.nativeElement.querySelector('.friendList');
    modal.style.display = 'block';
  }

  closeModalFriendList() {
    const modal = this.elementRef.nativeElement.querySelector('.friendList');
    modal.style.display = 'none';
  }
  
  attPage(){
    window.location.reload();
  }

  ngOnInit() {
    this.ListFriends();
  }

}
