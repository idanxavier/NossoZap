import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashCard',
  templateUrl: './dashCard.component.html',
  styleUrls: ['./dashCard.component.css']
})
export class DashCardComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;


  constructor() { }

  ngOnInit() {
  }

}
