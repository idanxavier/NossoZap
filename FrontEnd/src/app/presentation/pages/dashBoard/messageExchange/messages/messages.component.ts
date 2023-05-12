import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ChatDTO } from 'src/app/domain/models/Dtos/ChatDTO';
import { friendDTO } from 'src/app/domain/models/Dtos/FriendDTO';
import { MessageDTO } from 'src/app/domain/models/Dtos/MessageDTO';
import { SendMessageDTO } from 'src/app/domain/models/Dtos/sendMessageDTO';
import { Message } from 'src/app/domain/models/messageModel';
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
  messages: Message[] = [];
  currentFriendUsername: string = "";

  constructor(
    private elementRef: ElementRef,
    private friendService: FriendService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params =>{
      this.currentFriendUsername = params['username'];
    })
   }

  
  ngOnInit() {
    this.ListMyChats();
    this.ListFriends();
  }

  ListMyChats() {
    return this.messageService.ListMyChats().subscribe((data : any) => {
      console.log(data);
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

  openChat(username: string){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(
      ['/messageExchange'],
      { queryParams: { username: username} }
    );
  }
}
