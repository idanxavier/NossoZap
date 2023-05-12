using Infrastructure.Data.Context;
using Infrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Model;

namespace Infrastructure.Repositories
{
    public class MessageRepository : GenericRepository<Message, int>
    {
        public readonly MySQLContext _context;
        public MessageRepository(MySQLContext context) : base(context)
        {
            _context = context;
        }

        public async Task<List<Message>> ListMessagesWithUser(string fromUserId, string toUserId)
        {
            return await _context.Message.Where(x => (x.fromUserId == fromUserId || x.toUserId == fromUserId) && (x.fromUserId == toUserId || x.toUserId == toUserId)).OrderBy(x => x.date).ToListAsync();
        }

        public async Task<List<Message>> ListUserReceivedMessages(string userId)
        {
            return await _context.Message.Where(x => x.toUserId == userId).ToListAsync();
        }

        public async Task<Message> GetLastMessageWithUser(string fromUserId, string toUserId)
        {
            return await _context.Message.Where(x => (x.fromUserId == fromUserId || x.toUserId == fromUserId) && (x.fromUserId == toUserId || x.toUserId == toUserId)).OrderBy(x => x.date).LastOrDefaultAsync();
        }
    }
}
