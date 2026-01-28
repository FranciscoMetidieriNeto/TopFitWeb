"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import SidebarAdm from '../components/SidebarAdm';
import AddWorkout from '../components/admin/AddWorkout';
import ManageStudents from '../components/admin/ManageStudents';
import Financial from '../components/admin/Financial';
import AddVideos from '../components/admin/AddVideos';

// Estilos base e de layout para o painel administrativo
import '../styles/admin/AdminLayout.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  /**
   * Renderiza o conteúdo principal com base na aba selecionada no Sidebar.
   * Cada caso retorna um componente modular para facilitar a manutenção.
   */
  const renderContent = () => {
    switch (activeTab) {
      case 'treinos':
        return <AddWorkout />;
      case 'alunos':
        return <ManageStudents />;
      case 'financeiro':
        return <Financial />;
      case 'videos':
        return <AddVideos />;
      case 'dashboard':
      default:
        return (
          <div className="admin-section dashboard-center animate-fade">
            <div className="dashboard-welcome-card">
              {/* Logo da academia com animação de flutuação definida no CSS */}
              <div className="dashboard-logo-wrapper">
                <Image 
                  src="/assets/img/TopFitLogoHeader.png" 
                  alt="TopFit Logo" 
                  width={400} 
                  height={120} 
                  priority
                  className="dashboard-main-logo"
                />
              </div>
              
              <h2>Bem-vindo ao Sistema de Gestão</h2>
              <p>
                Olá, o seu painel está pronto. 
                Utilize o menu lateral para gerenciar treinos, alunos e o financeiro da sua unidade.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="admin-layout">
      {/* Menu Lateral que controla o estado global da navegação */}
      <SidebarAdm activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Área de Conteúdo Dinâmica */}
      <main className="admin-main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminPage;