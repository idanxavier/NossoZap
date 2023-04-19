using Model;
using Model.DTO;

namespace Service.Interface
{
    public interface IPostService
    {
        Task<Post> CreatePost(PostDTO post);
        Task<Post> GetPost(int postId);
        Task<bool> RemovePost(int postId);
    }
}
