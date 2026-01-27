"use client";

import React, { useState, useEffect } from 'react';
import MenuPrincipal from './MenuPrincipal';
import '../styles/Treinos.css';
import { 
  Trophy, CalendarDays, CheckCircle2, Play, Pause, 
  RotateCcw, Timer, Dumbbell, Zap, Bike, Footprints,
  BarChart3, ChevronLeft, ChevronRight, Circle 
} from 'lucide-react';

const mockWorkoutPlan = {
    'Segunda-feira': [{ id: 1, name: 'Supino Reto', load: '60kg', reps: '3 x 10' }, { id: 2, name: 'Crossover', load: '15kg', reps: '3 x 12' }],
    'Terça-feira': [{ id: 3, name: 'Agachamento', load: '80kg', reps: '4 x 10' }],
    'Quarta-feira': [{ id: 4, name: 'Remada Curvada', load: '45kg', reps: '3 x 10' }],
    'Quinta-feira': [{ id: 5, name: 'Cardio Livre', load: 'N/A', reps: '60 min' }],
    'Sexta-feira': [{ id: 6, name: 'Leg Press', load: '160kg', reps: '3 x 15' }],
    'Sábado': [{ id: 7, name: 'Funcional', load: 'N/A', reps: '45 min' }],
    'Domingo': [],
};

// Dados dinâmicos que mudam conforme o seletor
const chartData = {
    semana: [
        { label: 'Segunda-feira', value: 60 }, { label: 'Terça-feira', value: 45 }, { label: 'Quarta-feira', value: 80 },
        { label: 'Quinta-feira', value: 0 }, { label: 'Sexta-feira', value: 90 }, { label: 'Sábado', value: 50 }, { label: 'Domingo', value: 30 }
    ],
    mes: [
        { label: 'Semana 1', value: 75 }, { label: 'Semana 2', value: 60 }, { label: 'Semana 3', value: 85 }, { label: 'Semana 4', value: 40 }
    ],
    ano: [
        { label: 'Janeiro', value: 40 }, { label: 'Fevereiro', value: 55 }, { label: 'Março', value: 70 },
        { label: 'Abril', value: 65 }, { label: 'Maio', value: 80 }, { label: 'Junho', value: 95 }
    ]
};

const TreinosContent: React.FC = () => {
    const [activeMainTab, setActiveMainTab] = useState<'planilha' | 'resultados'>('planilha');
    const [activeDay, setActiveDay] = useState<string>('Segunda-feira');
    const [chartView, setChartView] = useState<'semana' | 'mes' | 'ano'>('semana');
    
    // Estados do Cronômetro
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState<string>('');
    const [workoutDoneToday, setWorkoutDoneToday] = useState(false);

    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => setSeconds(s => s + 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = (s: number) => {
        const hrs = Math.floor(s / 3600);
        const mins = Math.floor((s % 3600) / 60);
        const secs = s % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleFinish = () => {
        if (selectedActivity === 'Treino do Dia') setWorkoutDoneToday(true);
        setIsActive(false);
        setSeconds(0);
        setSelectedActivity('');
        alert("Treino registrado! 💪");
    };

    return (
        <div className="treinos-page-wrapper">
            <MenuPrincipal />
            <div className="treinos-main-container">
                <header className="treinos-page-header">
                    <h1>Área do Atleta</h1>
                    <div className="stats-badge"><Trophy size={18} /><span>Treinos Concluídos: 12</span></div>
                </header>

                <nav className="main-tabs-nav">
                    <button className={`main-tab-btn ${activeMainTab === 'planilha' ? 'active' : ''}`} onClick={() => setActiveMainTab('planilha')}>
                        <CalendarDays size={20} /> Planilha
                    </button>
                    <button className={`main-tab-btn ${activeMainTab === 'resultados' ? 'active' : ''}`} onClick={() => setActiveMainTab('resultados')}>
                        <Trophy size={20} /> Meus Resultados
                    </button>
                </nav>

                {activeMainTab === 'planilha' ? (
                    <div className="tab-content animate-fade">
                        <div className="day-pagination">
                            {Object.keys(mockWorkoutPlan).map(day => (
                                <button key={day} className={`day-page-btn ${activeDay === day ? 'active' : ''}`} onClick={() => setActiveDay(day)}>
                                    {day}
                                </button>
                            ))}
                        </div>
                        <div className="workout-details-card">
                            <h2>{activeDay}</h2>
                            {mockWorkoutPlan[activeDay as keyof typeof mockWorkoutPlan].length > 0 ? (
                                <table className="modern-workout-table">
                                    <thead>
                                        <tr><th>Exercício</th><th className="center-text">Carga</th><th className="center-text">Séries</th></tr>
                                    </thead>
                                    <tbody>
                                        {mockWorkoutPlan[activeDay as keyof typeof mockWorkoutPlan].map(ex => (
                                            <tr key={ex.id}>
                                                <td>{ex.name}</td>
                                                <td className="center-text"><span className="load-badge">{ex.load}</span></td>
                                                <td className="center-text">{ex.reps}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : <div className="rest-day"><CheckCircle2 size={40} color="#007aff" /><p>Dia de Descanso</p></div>}
                        </div>
                        <div className="timer-card">
                            <div className="timer-header"><Timer size={24} color="#007aff" /><h3>Cronômetro</h3></div>
                            {!isActive && seconds === 0 && (
                                <div className="activity-selector">
                                    <div className="activity-options">
                                        <button className={`opt-btn ${selectedActivity === 'Treino do Dia' ? 'active' : ''}`} onClick={() => !workoutDoneToday && setSelectedActivity('Treino do Dia')} disabled={workoutDoneToday}>
                                         {workoutDoneToday ? "Concluído" : "Treino do Dia"}
                                        </button>
                                        {['Esteira', 'Bicicleta', 'Escada'].map(act => (
                                            <button key={act} className={`opt-btn ${selectedActivity === act ? 'active' : ''}`} onClick={() => setSelectedActivity(act)}>{act}</button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="timer-display">{formatTime(seconds)}</div>
                            <div className="timer-controls">
                                {!isActive ? (
                                    <button className="timer-action-btn start" onClick={() => selectedActivity ? setIsActive(true) : alert("Selecione uma atividade!")}><Play size={18} /> INICIAR</button>
                                ) : (
                                    <button className="timer-action-btn pause" onClick={() => setIsActive(false)}><Pause size={18} /> PAUSAR</button>
                                )}
                                <button className="timer-action-btn finish" onClick={handleFinish} disabled={seconds === 0}>FINALIZAR</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="tab-content animate-fade">
                        <div className="results-card">
                            <div className="card-header">
                                <div className="header-title"><BarChart3 size={20} color="#007aff" /> <h3>Tempo de Treino (min)</h3></div>
                                <div className="view-selector">
                                    <button className={chartView === 'semana' ? 'active' : ''} onClick={() => setChartView('semana')}>Semana</button>
                                    <button className={chartView === 'mes' ? 'active' : ''} onClick={() => setChartView('mes')}>Mês</button>
                                    <button className={chartView === 'ano' ? 'active' : ''} onClick={() => setChartView('ano')}>Ano</button>
                                </div>
                            </div>
                            <div className="chart-container">
                                <div className="bars-wrapper">
                                    {chartData[chartView].map((d, i) => (
                                        <div key={i} className="bar-item">
                                            <div className="bar-container">
                                                <span className="bar-value-bubble">{d.value}m</span>
                                                <div className="bar-fill" style={{ height: `${d.value}%` }}></div>
                                            </div>
                                            <span className="bar-label">{d.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="results-card">
                            <div className="card-header">
                                <div className="header-title"><CalendarDays size={20} color="#007aff" /> <h3>Frequência Mensal</h3></div>
                                <div className="calendar-pagination-nav">
                                    <ChevronLeft size={20} className="nav-icon" />
                                    <span>Janeiro 2026</span>
                                    <ChevronRight size={20} className="nav-icon" />
                                </div>
                            </div>
                            <div className="calendar-grid-container">
                                {Array.from({ length: 31 }).map((_, i) => (
                                    <div key={i} className="calendar-circle-day">
                                        <Circle size={22} className={`status-circle ${[1, 2, 4, 5, 8, 12, 15, 20, 22, 26].includes(i+1) ? 'done' : 'missed'}`} fill="currentColor" />
                                        <span>{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TreinosContent;