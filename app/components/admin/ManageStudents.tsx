"use client";
import React from 'react';
import { Search } from 'lucide-react';
import '../../styles/admin/ManageStudents.css';  

const ManageStudents = () => {
  return (
    <div className="admin-section animate-fade">
      <div className="dual-header">
        <h2>Gestão de Alunos</h2>
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Buscar aluno por nome ou e-mail..." />
        </div>
      </div>

      <div className="admin-card">
        <h3>Cadastro e Mensalidade</h3>
        <div className="form-grid">
          <input type="text" placeholder="Nome Completo" className="admin-input" />
          <input type="email" placeholder="E-mail" className="admin-input" />
          <input type="tel" placeholder="Telefone" className="admin-input" />
          <select className="admin-select">
            <option>Plano Mensal</option>
            <option>Plano Trimestral</option>
            <option>Plano Anual</option>
          </select>
        </div>
        <button className="save-btn">Cadastrar Aluno</button>
      </div>

      <div className="admin-card">
        <h3>Lista de Alunos (Top 10)</h3>
        {/* Tabela paginada de alunos aqui */}
        <table className="admin-table">
          <thead>
            <tr><th>Nome</th><th>Plano</th><th>Status</th><th>Ações</th></tr>
          </thead>
          <tbody>
            {/* Linhas de exemplo */}
            <tr><td>Francisco Metidieri Neto</td><td>Anual</td><td><span className="status-badge active">Em dia</span></td><td><button className="edit-btn">Ver Resultados</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;