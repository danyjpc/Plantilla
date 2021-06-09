using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using backend.Models;
using backend.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {

        DBContext _context;

        public UsersController(DBContext DbContext){
            _context = DbContext;
        }

        //Obtener todos los usuarios
        [HttpGet]
        public async Task<ActionResult> ObtenerUsers()
        {
            var users = await _context.User.ToListAsync();

            return Ok(users);
        }

    }
}
