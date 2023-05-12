import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-navChat',
  templateUrl: './navChat.component.html',
  styleUrls: ['./navChat.component.css']
})
export class NavChatComponent implements OnInit {

  currentFriendUsername: string = "";

  constructor(
    private route: ActivatedRoute,
  ) { 
    this.route.queryParams.subscribe(params =>{
      this.currentFriendUsername = params['username'];
    })
  }


  ngOnInit() {
  }

}
