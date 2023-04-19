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
    public class PostService : IPostService
    {
        private readonly PostRepository _postRepository;
        private readonly IAuthService _authService;

        public PostService(PostRepository postRepository, IAuthService authService)
        { 
            _postRepository = postRepository;
            _authService = authService;
        }

        public async Task<Post> CreatePost(PostDTO post)
        {
            var currentUser = await _authService.GetCurrentUser();

            var newPost = new Post
            {
                date = DateTime.Now,
                userId = currentUser.Id,
                message = post.message,
                title = post.title,
                photo = post.photo
        };

            return await _postRepository.CreateAsync(newPost);
        }

        public async Task<bool> RemovePost(int postId)
        {
            var post = await _postRepository.GetByIdAsync(postId);

            if (post == null)
                throw new ArgumentException("Post doesn't exists.");

            return await _postRepository.DeleteAsync(post);
        }

        public async Task<Post> GetPost(int postId)
        {
            var post = await _postRepository.GetByIdAsync(postId);

            if (post == null)
                throw new ArgumentException("Post doesn't exists.");

            return post;
        }
    }
}
