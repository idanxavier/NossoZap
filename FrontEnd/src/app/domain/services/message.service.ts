import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageRepository } from 'src/app/data/repositories/message.repository';
import { MessageDTO } from '../models/Dtos/MessageDTO';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl = 'https://localhost:5001/api'

  constructor(
    private httpClient: HttpClient,
    private messageRepository: MessageRepository
  ) { }

  
  GetMessage(id: number) {
    return this.messageRepository.GetMessage(id);
  }

  DeleteMessage(id: number) {
    return this.messageRepository.DeleteMessage(id);
  }

  ListAllMessagesBetweenCurrentUserAndUserId(userId: any) {
    return this.messageRepository.ListAllMessagesBetweenCurrentUserAndUserId(userId);
  }

  SendMessage(message: MessageDTO) {
    return this.messageRepository.CreateMessage(message);
  }

  ListMyChats() {
    return this.messageRepository.ListMyChats();
  }

}
