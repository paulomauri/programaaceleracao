﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PA.WebApi.DAL
{
    public class RepositorioBaseEF<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly DatabaseContext _context;

        public RepositorioBaseEF(DatabaseContext context)
        {
            _context = context;
        }

        public IQueryable<TEntity> All => _context.Set<TEntity>().AsQueryable();

        public void Alterar(params TEntity[] obj)
        {
            _context.Set<TEntity>().UpdateRange(obj);
            _context.SaveChanges();
        }

        public void Excluir(params TEntity[] obj)
        {
            _context.Set<TEntity>().RemoveRange(obj);
            _context.SaveChanges();
        }

        public TEntity Find(int key)
        {
            return _context.Find<TEntity>(key);
        }

        public void Incluir(params TEntity[] obj)
        {
            _context.Set<TEntity>().AddRange(obj);
            _context.SaveChanges();
        }
    }
}
