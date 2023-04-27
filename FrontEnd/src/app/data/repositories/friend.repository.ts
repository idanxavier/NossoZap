import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FriendRepository {

  constructor(private httpClient: HttpClient) { }

  AddFriend(username: string) {
  return this.httpClient.post(`${environment.apiUrl}` + '/Friend/add-friend', username) ;
  }

  RemoveFriend(formMsg: any) {
  return this.httpClient.delete(`${environment.apiUrl}` + '/Friend/remove-friend', formMsg);
  }

  ListFriends() {
  return this.httpClient.get(`${environment.apiUrl}` + '/Friend/list-friends');
  }

  ListRequestsPendents() {
  return this.httpClient.get(`${environment.apiUrl}` + '/Friend/list-requests-pendents')
  }

  AcceptRequest(friendId: string) {
  return this.httpClient.post(`${environment.apiUrl}` + '/Friend/accept-friend-request-by-id','"' + friendId + '"' , { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    });
  }

  RefuseRequest(friendId: any) {
  return this.httpClient.delete(`${environment.apiUrl}` + '/Friend/refuse-friend-request-by-id', {body: '"' + friendId + '"', headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    });
  }
}
