using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Model.DTO;
using Model.JWT;
using Service.Interface;

namespace Application.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthenticationController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("sign-up")]
        public async Task<IActionResult> SignUp([FromBody] RegisterModel model)
        {
            try
            {
                IdentityUser newUser = await _authService.SignUp(model);
                return Ok(newUser);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpPost("sign-in")]
        public async Task<IActionResult> SignIn([FromBody] LoginModel model)
        {
            try
            {
                UserDTO user = await _authService.SignIn(model);
                return Ok(user);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
    }

}
