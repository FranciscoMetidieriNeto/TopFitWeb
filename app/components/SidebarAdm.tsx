"use client";

import React from 'react';
import { 
  LayoutDashboard, Dumbbell, Video, Users, 
  DollarSign, LogOut, ChevronRight 
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importação do hook para navegação
import '../styles/admin/SidebarAdm.css';

interface SidebarAdmProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

const SidebarAdm: React.FC<SidebarAdmProps> = ({ activeTab, setActiveTab }) => {
  const router = useRouter(); // Inicialização do roteador para redirecionamento

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'treinos', label: 'Adicionar Treinos', icon: <Dumbbell size={20} /> },
    { id: 'videos', label: 'Adicionar Vídeos', icon: <Video size={20} /> },
    { id: 'alunos', label: 'Gestão de Alunos', icon: <Users size={20} /> },
    { id: 'financeiro', label: 'Financeiro', icon: <DollarSign size={20} /> },
  ];

  // Função para lidar com o encerramento da sessão administrativa
  const handleLogout = () => {
    // Redireciona o usuário para a Home Page do projeto
    router.push('/');
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        {/* Utiliza a logo oficial do cabeçalho mapeada no projeto */}
        <Image 
          src="/assets/img/TopFitLogoHeader.png" 
          alt="TopFit Logo" 
          width={120} 
          height={40} 
        />
        <span className="admin-badge">Admin</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
            {activeTab === item.id && <ChevronRight size={16} className="arrow-indicator" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Sair do Painel</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarAdm;