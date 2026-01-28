"use client";

import React, { useState } from 'react';
import { Video, Link as LinkIcon, Plus, Trash2, PlayCircle } from 'lucide-react';
import '../../styles/admin/AddVideos.css';

const AddVideos = () => {
  return (
    <div className="admin-section animate-fade">
      <header className="workout-section-header">
        <h2>Biblioteca de Vídeos</h2>
        <p>Adicione vídeos demonstrativos de exercícios para auxiliar os seus alunos.</p>
      </header>

      <div className="admin-card">
        <div className="card-header-with-icon">
          <Plus size={20} color="#007aff" />
          <h3>Adicionar Novo Vídeo</h3>
        </div>
        
        <div className="form-grid">
          <div className="input-group" style={{ gridColumn: 'span 2' }}>
            <label className="admin-label">Título do Vídeo/Exercício</label>
            <input type="text" placeholder="Ex: Execução correta Supino Reto" className="admin-input" />
          </div>
          <div className="input-group">
            <label className="admin-label">Categoria</label>
            <select className="admin-select">
              <option>Peito</option>
              <option>Costas</option>
              <option>Pernas</option>
              <option>Cardio</option>
            </select>
          </div>
          <div className="input-group">
            <label className="admin-label">URL do Vídeo (YouTube/Vimeo)</label>
            <div className="input-with-icon-wrapper">
                <LinkIcon size={16} className="inner-input-icon" />
                <input type="text" placeholder="https://youtube.com/..." className="admin-input icon-padding" />
            </div>
          </div>
        </div>

        <div className="card-actions-bar" style={{ border: 'none', marginTop: '10px' }}>
            <div></div>
            <button className="save-btn">Publicar Vídeo</button>
        </div>
      </div>

      {/* Grid de Vídeos Existentes */}
      <h3 className="admin-subtitle">Vídeos Cadastrados</h3>
      <div className="video-grid">
        {[1, 2, 3].map((v) => (
          <div key={v} className="video-mini-card">
            <div className="video-preview">
               <PlayCircle size={40} className="play-overlay" />
               <img src={`https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400`} alt="Preview" />
            </div>
            <div className="video-info">
              <h4>Supino Reto - Técnica {v}</h4>
              <span>Categoria: Peito</span>
              <button className="delete-video-btn">
                <Trash2 size={16} /> Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddVideos;