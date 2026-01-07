// app/components/TreinosContent.tsx
"use client";

import React, { useState } from 'react';
import MenuPrincipal from './MenuPrincipal';
import '../styles/Treinos.css'; // Importa o CSS da página de treinos

// --- TIPOS DE DADOS ---
interface Exercise {
    id: number;
    name: string;
    load: string;
    reps: string;
}

type DailyWorkout = Exercise[];

interface WorkoutPlan {
    [day: string]: DailyWorkout;
}

// --- DADOS MOCKADOS (Exemplo de Planilha) ---
const mockWorkoutPlan: WorkoutPlan = {
    'Segunda-feira': [
        { id: 1, name: 'Supino Reto (Barra)', load: '60kg', reps: '3 x 10' },
        { id: 2, name: 'Crossover Alto', load: '15kg (cada lado)', reps: '3 x 12' },
        { id: 3, name: 'Desenvolvimento Halteres', load: '18kg', reps: '4 x 8' },
        { id: 4, name: 'Elevação Lateral', load: '8kg', reps: '3 x 15' },
    ],
    'Terça-feira': [
        { id: 5, name: 'Agachamento Livre', load: '80kg', reps: '4 x 10' },
        { id: 6, name: 'Leg Press 45°', load: '180kg', reps: '3 x 12' },
        { id: 7, name: 'Extensora', load: '40kg', reps: '3 x 15' },
        { id: 8, name: 'Flexora Deitada', load: '30kg', reps: '3 x 12' },
    ],
    'Quarta-feira': [
        { id: 9, name: 'Remada Curvada', load: '45kg', reps: '3 x 10' },
        { id: 10, name: 'Puxada Alta (Frente)', load: '50kg', reps: '3 x 12' },
        { id: 11, name: 'Rosca Direta (Barra)', load: '20kg', reps: '3 x 10' },
        { id: 12, name: 'Tríceps Corda', load: '25kg', reps: '3 x 12' },
    ],
    'Quinta-feira': [
        { id: 13, name: 'Livre / Aeróbico', load: 'N/A', reps: '60 min' },
    ],
    'Sexta-feira': [
        { id: 14, name: 'Cadeira Abdutora', load: '35kg', reps: '3 x 15' },
        { id: 15, name: 'Elevação Pélvica', load: '50kg', reps: '3 x 12' },
        { id: 16, name: 'Panturrilha em Pé', load: '50kg', reps: '4 x 20' },
    ],
    'Sábado': [
        { id: 17, name: 'Boxe Funcional', load: 'N/A', reps: '90 min' },
    ],
    'Domingo': [], // Dia de descanso
};

const workoutDays = Object.keys(mockWorkoutPlan);

// --- COMPONENTE PRINCIPAL ---

const TreinosContent: React.FC = () => {
    // Estado para controlar o dia de treino ativo
    const [activeDay, setActiveDay] = useState<string>(workoutDays[0]); // Começa na Segunda-feira

    const currentWorkout = mockWorkoutPlan[activeDay] || [];

    return (
        <>
            <MenuPrincipal />
            <div className="treinos-container">
                <header className="treinos-header">
                    <h1>Minha Planilha de Treinos</h1>
                    <p>Acompanhe seu treino dia a dia para alcançar sua melhor versão!</p>
                </header>

                {/* Navegação por Dia (Paginação) */}
                <div className="day-navigation">
                    {workoutDays.map(day => (
                        <button
                            key={day}
                            className={`day-button ${activeDay === day ? 'active' : ''}`}
                            onClick={() => setActiveDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Tabela de Treino do Dia Ativo */}
                {currentWorkout.length > 0 ? (
                    <table className="workout-table">
                        <thead>
                            <tr>
                                <th>Exercício</th>
                                <th>Carga (Peso)</th>
                                <th>Repetições/Séries</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentWorkout.map((exercise) => (
                                <tr key={exercise.id}>
                                    <td data-label="Exercício">{exercise.name}</td>
                                    <td data-label="Carga (Peso)">{exercise.load}</td>
                                    <td data-label="Repetições/Séries">{exercise.reps}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div style={{ textAlign: 'center', padding: '50px', color: '#616161' }}>
                        <p>Ótimo! {activeDay} é um dia de descanso/recuperação. Aproveite!</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TreinosContent;