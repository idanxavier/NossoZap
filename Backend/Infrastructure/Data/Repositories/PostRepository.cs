using Infrastructure.Data.Context;
using Infrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Model;

namespace Infrastructure.Repositories
{
    public class PostRepository : GenericRepository<Post, int>
    {
        public readonly MySQLContext _context;
        public PostRepository(MySQLContext context) : base(context)
        {
            _context = context;
        }

        public async Task<List<Post>> ListPostsByUserId(string userId)
        {
            return await _context.Post.Where(x => x.userId.Equals(userId)).ToListAsync();
        }
    }
}
