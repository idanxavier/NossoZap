import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/domain/services/authentication.service';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './dashBoard.component.html',
  styleUrls: ['./dashBoard.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(
    // private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  // onLogout() {

  //   this.authenticationService.logout() ;
  //   {
  //     window.location.reload();
  //   }
  // }
}
