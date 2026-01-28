"use client";
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import '../../styles/admin/AddWorkout.css';

const AddWorkout = () => {
  const [prescriptionDay, setPrescriptionDay] = useState('Segunda-feira');
  const [studentName, setStudentName] = useState('');
  const [exercises, setExercises] = useState([{ name: '', load: '', reps: '', day: 'Segunda-feira' }]);

  const addExerciseRow = () => {
    setExercises([...exercises, { name: '', load: '', reps: '', day: prescriptionDay }]);
  };

  return (
    <div className="admin-section animate-fade">
      <header className="workout-section-header">
        <h2>Prescrever Novo Treino</h2>
        <p>Monte a planilha personalizada para o aluno selecionando o dia e exercícios.</p>
      </header>

      <div className="admin-card">
        {/* Lógica do Nome do Aluno e Seletor de Pills aqui */}
        <div className="input-group" style={{ marginBottom: '30px' }}>
          <label className="admin-label">Nome do Aluno</label>
          <input 
            type="text" 
            placeholder="Ex: Digite o nome do aluno..." 
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="admin-input premium-search"
          />
        </div>

        <div className="admin-day-selector">
          <label className="admin-label">Selecione o dia da planilha:</label>
          <div className="day-pills-container">
            {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'].map((day) => (
              <button 
                key={day}
                className={`day-pill ${prescriptionDay === day ? 'active' : ''}`}
                onClick={() => setPrescriptionDay(day)}
              >
                {day.split('-')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Tabela de Exercícios */}
        <div className="table-container">
          <table className="modern-workout-table admin-table">
            <thead>
              <tr>
                <th style={{ width: '50%' }}>Exercício</th>
                <th className="center-text">Carga (Kg)</th>
                <th className="center-text">Séries / Repetições</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((ex, index) => (
                <tr key={index} className="animate-fade-in">
                  <td><input type="text" placeholder="Ex: Supino Reto" className="admin-table-input" /></td>
                  <td className="center-text"><input type="text" placeholder="60kg" className="admin-table-input center-text" /></td>
                  <td className="center-text"><input type="text" placeholder="3 x 12" className="admin-table-input center-text" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-actions-bar">
          <button className="add-row-btn" onClick={addExerciseRow}><Plus size={20} /> Adicionar Exercício</button>
          <button className="save-btn workout-save">Salvar Planilha de {prescriptionDay}</button>
        </div>
      </div>
    </div>
  );
};

export default AddWorkout;