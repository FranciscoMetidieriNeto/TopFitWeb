"use client";

import React, { useState } from 'react';
import { 
  ArrowUpCircle, ArrowDownCircle, DollarSign, 
  Plus, History, TrendingUp 
} from 'lucide-react';

// Importação do CSS específico modularizado
import '../../styles/admin/Financial.css';

const Financial = () => {
  return (
    <div className="admin-section animate-fade">
      <header className="workout-section-header">
        <h2>Gestão Financeira</h2>
        <p>Acompanhe o fluxo de caixa, entradas de mensalidades e despesas da academia.</p>
      </header>

      {/* Cartões de Resumo */}
      <div className="finance-summary">
        <div className="stat-card green">
          <div className="stat-icon-wrapper">
            <ArrowUpCircle size={32} />
          </div>
          <div className="stat-info">
            <span>Entradas (Mês)</span>
            <strong>R$ 12.450,00</strong>
          </div>
        </div>

        <div className="stat-card red">
          <div className="stat-icon-wrapper">
            <ArrowDownCircle size={32} />
          </div>
          <div className="stat-info">
            <span>Saídas (Mês)</span>
            <strong>R$ 4.200,00</strong>
          </div>
        </div>

        <div className="stat-card blue">
          <div className="stat-icon-wrapper">
            <TrendingUp size={32} />
          </div>
          <div className="stat-info">
            <span>Saldo Líquido</span>
            <strong>R$ 8.250,00</strong>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="card-header-with-icon">
          <Plus size={20} color="#007aff" />
          <h3>Lançar Nova Movimentação</h3>
        </div>
        
        <div className="form-grid">
          <div className="input-group">
            <label className="admin-label">Descrição</label>
            <input type="text" placeholder="Ex: Mensalidade João Silva" className="admin-input" />
          </div>
          <div className="input-group">
            <label className="admin-label">Valor (R$)</label>
            <input type="number" placeholder="0,00" className="admin-input" />
          </div>
          <div className="input-group">
            <label className="admin-label">Tipo</label>
            <select className="admin-select-tipo-valor">
              <option value="entrada" className="opt-entrada">Entrada (+)</option>
              <option value="saida" className="opt-saida">Saída (-)</option>
            </select>
          </div>
          <div className="input-group">
            <label className="admin-label">Categoria</label>
            {/* Alterado de select para input de texto para permitir escrita livre */}
            <input 
              type="text" 
              placeholder="Ex: Manutenção, Marketing, etc." 
              className="admin-input" 
            />
          </div>
        </div>
        
        <div className="card-actions-bar" style={{ border: 'none', marginTop: '10px' }}>
            <div></div> {/* Espaçador para manter o botão à direita */}
            <button className="save-btn">Confirmar Lançamento</button>
        </div>
      </div>

      <div className="admin-card">
        <div className="card-header-with-icon">
          <History size={20} color="#007aff" />
          <h3>Histórico Recente</h3>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th className="center-text">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25/01/2026</td>
              <td>Pagamento Mensalidade - Ana Costa</td>
              <td>Mensalidade</td>
              <td className="center-text color-green">+ R$ 150,00</td>
            </tr>
            <tr>
              <td>24/01/2026</td>
              <td>Reparo Ar Condicionado</td>
              <td>Manutenção</td>
              <td className="center-text color-red">- R$ 350,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Financial;