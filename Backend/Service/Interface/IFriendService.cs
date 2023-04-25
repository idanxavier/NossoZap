using Model;
using Model.DTO;

namespace Service.Interface
{
    public interface IFriendService
    {
        Task<bool> AddFriend(AddFriendDTO username);
        Task<bool> RemoveFriend(RemoveFriendDTO username);
    }
}
