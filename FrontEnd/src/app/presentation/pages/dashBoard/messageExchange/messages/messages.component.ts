import { Component, ElementRef, OnInit } from '@angular/core';
import { ChatDTO } from 'src/app/domain/models/Dtos/ChatDTO';
import { friendDTO } from 'src/app/domain/models/Dtos/FriendDTO';
import { MessageDTO } from 'src/app/domain/models/Dtos/MessageDTO';
import { FriendService } from 'src/app/domain/services/friend.service';
import { MessageService } from 'src/app/domain/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  chats: ChatDTO[] = [];
  friends: friendDTO[] = [];
  
  constructor(
    private elementRef: ElementRef,
    private friendService: FriendService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.ListMyChats();
  }

  ListMyChats() {
    return this.messageService.ListMyChats().subscribe((data : any) => {
      this.chats = data;
      }
  )}
  
  ListFriends(){
    this.friendService.ListFriends().subscribe((data : any) => {
      this.friends = data;
    })
  }

  openModalFriendList() {
    const modal = this.elementRef.nativeElement.querySelector('.friendList');
    modal.style.display = 'block';
  }

  closeModalFriendList() {
    const modal = this.elementRef.nativeElement.querySelector('.friendList');
    modal.style.display = 'none';
  }

}
