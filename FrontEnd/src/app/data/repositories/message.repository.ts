import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MessageRepository {

    apiUrl = 'https://localhost:5001/api'

    constructor(private httpClient: HttpClient) { }

    CreateMessage(formMsg: any) {
        return this.httpClient.post(this.apiUrl + '/message/create-message', formMsg);
    }

    ListMySendMessages() {
        return this.httpClient.get(this.apiUrl + '/message/list-my-send-messages');
    }

    ListMyReceivedMessages() {
        return this.httpClient.get(this.apiUrl + '/message/list-my-received-messages');
    }

    ListAllMessagesBetweenCurrentUserAndUserId(userId: any) {
        return this.httpClient.get(this.apiUrl + '/message/list-messages-with-user?username' + userId);
    }

    ListMyChats() {
        return this.httpClient.get(this.apiUrl + '/message/list-my-chats');
    }

    GetMessage(id: number) {
        return this.httpClient.get(this.apiUrl + '/message/get-message?messageId=' + id);
    }

    ReadMessage(id: number) {
        return this.httpClient.put(this.apiUrl + '/message/read-message', id);
    }

    DeleteMessage(id: number) {
        return this.httpClient.delete(this.apiUrl + '/message/delete-message?messageId=' + id);
    }
}
