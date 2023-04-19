using Infrastructure.Repositories;
using Model;
using Model.DTO;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Implementation
{
    public class MessageService : IMessageService
    {
        private readonly MessageRepository _messageRepository;
        private readonly IAuthService _authService;

        public MessageService(MessageRepository messageRepository, IAuthService authService)
        { 
            _messageRepository = messageRepository;
            _authService = authService;
        }

        public async Task<Message> CreateMessage(MessageDTO message)
        {
            var currentUser = await _authService.GetCurrentUser();

            var toUser = await _authService.GetUserByUserName(message.toUsername);

            if (toUser == null)
                throw new ArgumentException($"{message.toUsername} doesn't exists.");

            if (toUser.Id == currentUser.Id)
                throw new ArgumentException("You can't send a message to yourself.");

            var newMessage = new Message
            {
                date = DateTime.Now,
                fromUserId = currentUser.Id,
                toUserId = toUser.Id,
                text = message.text,
        };

            return await _messageRepository.CreateAsync(newMessage);
        }

        public async Task<bool> RemoveMessage(int messageId)
        {
            var message = await _messageRepository.GetByIdAsync(messageId);

            if (message == null)
                throw new ArgumentException("Message doesn't exists.");

            return await _messageRepository.DeleteAsync(message);
        }

        public async Task<Message> GetMessage(int messageId)
        {
            var message = await _messageRepository.GetByIdAsync(messageId);

            var currentUser = await _authService.GetCurrentUser();

            if (message.fromUserId != currentUser.Id)
                throw new ArgumentException("You can't see this message.");

            if (message == null)
                throw new ArgumentException("Message doesn't exists.");

            return message;
        }

        public async Task<List<Message>> ListMessagesWithUser(string username)
        {
            var currentUser = await _authService.GetCurrentUser();
            var toUser = await _authService.GetUserByUserName(username);

            if (toUser == null)
                throw new ArgumentException($"{username} doesn't exists.");

            if(toUser.Id == currentUser.Id)
                throw new ArgumentException("You can't send a message to yourself.");

            var messages = await _messageRepository.ListMessagesWithUser(currentUser.Id, toUser.Id);

            return messages;
        }
    }
}
