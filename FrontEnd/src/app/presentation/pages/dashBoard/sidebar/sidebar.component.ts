import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  openModalAddFriend() {
    const modal = this.elementRef.nativeElement.querySelector('.addFriend');
    modal.style.display = 'block';
  }

  closeModalAddFriend() {
    const modal = this.elementRef.nativeElement.querySelector('.addFriend');
    modal.style.display = 'none';
  }

  openModalPedidosAmizade() {
    const modal = this.elementRef.nativeElement.querySelector('.pedidosAmizade');
    modal.style.display = 'block';
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
