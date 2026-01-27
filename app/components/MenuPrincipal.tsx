// app/components/MenuPrincipal.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
// Importação do CSS isolado do menu
import '../styles/MenuPrincipal.css'; 
// Importação do componente de Modais
import AuthModals from './AuthModals'; // Certifique-se de que este componente existe

const MenuPrincipal = () => {
    // Estado para controlar a visibilidade do menu em dispositivos móveis
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Estado para controlar a visibilidade do modal de autenticação
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    // Função para alternar o estado do menu (abrir/fechar)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="header-main">
                <div className="logo">
                    {/* Exemplo de uso do componente Image do Next.js. Ajuste o path/tamanho se necessário. */}
                    <Image 
                        src="/assets/img/TopFitLogoHeader.png" 
                        alt="Logo Top Fit" 
                        width={150} 
                        height={120} 
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

                {/* Lista de Navegação (Menu Principal) */}
                <nav className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMenuOpen(false)}>
                    <Link href="/" className="nav-link">Início</Link>
                    {/* LINK ATUALIZADO: Aponta para a nova rota de treinos */}
                    <Link href="/treinos" className="nav-link">Treinos</Link>
                    <Link href="/parceiros" className="nav-link">Parceiros</Link>
                    <Link href="/contato" className="nav-link">Contato</Link>
                </nav>

                {/* Botão de Acesso Único */}
                <div className={`auth-actions ${isMenuOpen ? 'is-open' : ''}`}>
                    <button 
                        className="btn-acessar" 
                        onClick={() => {
                            setIsAuthModalOpen(true);
                            setIsMenuOpen(false); // Fecha o menu móvel ao abrir o modal
                        }}
                    >
                        Acessar
                    </button>
                </div>
            </header>

            {/* Renderiza o componente de Modais */}
            <AuthModals 
                isModalOpen={isAuthModalOpen} 
                onClose={() => setIsAuthModalOpen(false)}
            />
        </>
    );
};

export default MenuPrincipal;