﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Model.DTO;
using Model.JWT;
using Service.Interface;

namespace Application.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class FriendController : ControllerBase
    {
        private readonly IFriendService _friendService;

        public FriendController(IFriendService friendService)
        {
            _friendService = friendService;
        }

        [HttpPost("add-friend")]
        public async Task<IActionResult> AddFriend([FromBody] string username)
        {
            try
            {
                return Ok(await _friendService.AddFriend(username));
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpDelete("remove-friend")]
        public async Task<IActionResult> RemoveFriend([FromBody] string username)
        {
            try
            {
                return Ok(await _friendService.RemoveFriend(username));
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
    }
}