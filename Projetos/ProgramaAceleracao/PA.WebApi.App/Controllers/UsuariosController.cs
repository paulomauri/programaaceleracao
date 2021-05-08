﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PA.WebApi.DAL;
using PA.WebApi.DAL.Usuarios;
using PA.WebAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PA.WebApi.App.Controllers
{
    [Authorize]
    [ApiController]
    [Route("/api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly IRepository<Usuarios> _repo;

        private readonly UserManager<Usuario> _userManager;

        public UsuariosController(IRepository<Usuarios> repository, UserManager<Usuario> userManager)
        {
            _userManager = userManager;
            _repo = repository;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("/api/[controller]")]
        public IActionResult Get(Usuario model)
        {
            if(ModelState.IsValid)
            {
                var usuario = _repo.Find(model.UserName);
                if (usuario == null)
                {
                    return NotFound();
                }
                return Ok(usuario);
            }
            return BadRequest();
        }


        [HttpPost]
        [Route("/api/[controller]/Novo")]
        public async Task<IActionResult> Novo(Usuarios model)
        {
            if (ModelState.IsValid)
            {
                var user = new Usuario { UserName = model.Usuario };
                
                // Cria usuario no banco do Identity
                var result = await _userManager.CreateAsync(user, model.Password);

                if (!result.Succeeded)
                    return BadRequest();

                _repo.Incluir(model);
                return Ok();
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("/api/[controller]/Alterar")]
        public IActionResult Alterar(Usuarios usuario)
        {
            //var model = _repo.Find(usuario.Usuario);
            if (usuario == null)
            {
                return NotFound();
            }

            _repo.Alterar(usuario);
            return Ok();
        }


        [Authorize(Roles = "Admin")]
        [HttpDelete]
        [Route("/api/[controller]/Remover")]
        public async Task<IActionResult> Remover(Usuarios usuario)
        {
            var model = _repo.Find(usuario.Usuario);
            if (model == null)
            {
                return NotFound();
            }

            var user = new Usuario { UserName = model.Usuario };

            // Remove usuario no banco do Identity
            var result = await _userManager.DeleteAsync(user);

            _repo.Excluir(model);
            return Ok();
        }

    }
}