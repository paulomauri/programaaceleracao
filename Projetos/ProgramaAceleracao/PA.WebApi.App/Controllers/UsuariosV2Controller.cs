﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PA.WebApi.App.ViewModel;
using PA.WebApi.DAL;
using PA.WebApi.DAL.Usuarios;
using PA.WebAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PA.WebApi.App.Controllers
{
    [ApiController]
    [Authorize]
    [ApiVersion("2.0")]
    [Route("api/v{version:apiVersion}/Usuarios")]
    public class UsuariosV2Controller : ControllerBase
    {
        private readonly IRepository<Usuarios> _repo;

        public UsuariosV2Controller(IRepository<Usuarios> repository)
        {
            _repo = repository;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("Get")]
        public IActionResult Get(UsuariosViewModel model)
        {
            if (ModelState.IsValid)
            {
                var usuario = _repo.Find(model.UserName);
                if (usuario == null)
                {
                    return NotFound();
                }
                return Ok(usuario.Email);
            }
            return BadRequest();
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var lista = _repo.All;
            if (lista == null)
            {
                return NotFound();
            }
            return Ok(lista);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Novo(Usuarios model)
        {
            if (ModelState.IsValid)
            {
                _repo.Incluir(model);
                return Ok();
            }
            return BadRequest();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        public IActionResult Alterar(Usuarios usuario)
        {
            if (usuario == null)
            {
                return NotFound();
            }

            _repo.Alterar(usuario);
            return Ok();
        }


        [Authorize(Roles = "Admin")]
        [HttpDelete]
        public IActionResult Remover(Usuarios usuario)
        {
            var model = _repo.Find(usuario.UserName);
            if (model == null)
            {
                return NotFound();
            }

            _repo.Excluir(model);
            return Ok();
        }
    }
}