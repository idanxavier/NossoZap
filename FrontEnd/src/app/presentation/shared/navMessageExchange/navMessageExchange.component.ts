import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/domain/services/authentication.service';

@Component({
  selector: 'app-navMessageExchange',
  templateUrl: './navMessageExchange.component.html',
  styleUrls: ['./navMessageExchange.component.css']
})
export class NavMessageExchangeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
