import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { friendDTO } from 'src/app/domain/models/Dtos/FriendDTO';
import { FriendService } from 'src/app/domain/services/friend.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  formFriend: FormGroup;
  friends: friendDTO[] = [];
  
  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private friendService: FriendService,
    private router: Router) 
    {
      this.formFriend = this.formBuilder.group({
        username: [null]
      });
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
  }

}
