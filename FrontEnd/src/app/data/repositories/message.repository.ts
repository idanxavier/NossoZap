import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MessageRepository {

    constructor(private httpClient: HttpClient) { }

    CreateMessage(formMsg: any) {
        return this.httpClient.post(`${environment.apiUrl}` + '/message/create-message', formMsg);
    }

    ListMySendMessages() {
        return this.httpClient.get(`${environment.apiUrl}` + '/message/list-my-send-messages');
    }

    ListMyReceivedMessages() {
        return this.httpClient.get(`${environment.apiUrl}` + '/message/list-my-received-messages');
    }

    ListAllMessagesBetweenCurrentUserAndUserId(userId: any) {
        return this.httpClient.get(`${environment.apiUrl}` + '/message/list-messages-with-user?username' + userId);
    }

    ListMyChats() {
        return this.httpClient.get(`${environment.apiUrl}` + '/message/list-my-chats');
    }

    GetMessage(id: number) {
        return this.httpClient.get(`${environment.apiUrl}` + '/message/get-message?messageId=' + id);
    }

    ReadMessage(id: number) {
        return this.httpClient.put(`${environment.apiUrl}` + '/message/read-message', id);
    }

    DeleteMessage(id: number) {
        return this.httpClient.delete(`${environment.apiUrl}` + '/message/delete-message?messageId=' + id);
    }
}
