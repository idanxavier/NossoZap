using Infrastructure.Data.Repositories;
using Infrastructure.Repositories;
using Microsoft.AspNetCore.Identity;
using Model;
using Model.DTO;
using Service.Interface;

namespace Service.Implementation
{
    public class FriendService : IFriendService
    {
        private readonly IAuthService _authService;
        private readonly FriendRepository _friendRepository;
        private readonly UserRepository _userRepository;

        public FriendService(FriendRepository friendRepository, IAuthService authService, UserRepository userRepository)
        {
            _friendRepository = friendRepository;
            _authService = authService;
            _userRepository = userRepository;
        }

        public async Task<Boolean> AddFriend(AddFriendDTO friendDTO)
        {
            var username = friendDTO.Username;
            if (username == null) throw new ArgumentNullException($"Invalid username: {username}.");

            User currentUser = await _authService.GetCurrentUser();
            User friendUser = await _userRepository.GetUserByUserName(username);

            if (friendUser == null)
                throw new ArgumentException($"User {username} doesn't exists.");

            if (currentUser.Id == friendUser.Id)
                throw new ArgumentException("You can't add yourself");

            var alreadyFriend = await _friendRepository.GetFriendUsingIds(currentUser.Id, friendUser.Id);

            if (alreadyFriend != null)
                throw new ArgumentException($"You already have {username} in your friends list.");

            var friend = new Friend
            {
                addedAt = DateTime.Now,
                friendId = friendUser.Id,
                userId = currentUser.Id,
                friendName = friendUser.UserName
            };

            return await _friendRepository.CreateAsync(friend) != null;
        }

        public async Task<Boolean> RemoveFriend(RemoveFriendDTO friendDTO)
        {
            var username = friendDTO.Username;
            if (username == null) throw new ArgumentNullException($"Invalid username: {username}.");

            User currentUser = await _authService.GetCurrentUser();
            User friendUser = await _userRepository.GetUserByUserName(username);

            if (friendUser == null)
                throw new ArgumentException($"User {username} doesn't exists.");

            Friend friend = await _friendRepository.GetFriendUsingIds(currentUser.Id, friendUser.Id);

            if(friend == null)
                throw new ArgumentException($"{username} is not your friend.");

            return await _friendRepository.DeleteAsync(friend);
        }

        public async Task<List<FriendDTO>> ListFriends()
        {
            User currentUser = await _authService.GetCurrentUser();

            List<Friend> friends = await _friendRepository.ListFriendsByUserId(currentUser.Id);
            List<FriendDTO> friendsDTO = new List<FriendDTO>();

            foreach(Friend friend in friends)
            {
                var dto = new FriendDTO
                {
                    id = friend.friendId,
                    addedAt = friend.addedAt,
                    username = friend.friendName
                };

                friendsDTO.Add(dto);
            }

            return friendsDTO;
        }
    }
}
