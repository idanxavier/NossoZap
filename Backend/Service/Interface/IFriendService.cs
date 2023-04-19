using Model;

namespace Service.Interface
{
    public interface IFriendService
    {
        Task<bool> AddFriend(string username);
        Task<bool> RemoveFriend(string username);
    }
}
