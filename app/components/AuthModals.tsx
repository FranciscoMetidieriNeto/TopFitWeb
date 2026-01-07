// app/components/AuthModals.tsx
"use client";

import React, { useState } from 'react';
// Importação do CSS para estilizar os modais (será adicionado no HomePage.css para simplicidade)
import '../styles/AuthModal.css'; 
// Tipos de formulário que o modal pode exibir
type FormType = 'login' | 'register' | 'forgotPassword';

// Definição das propriedades que o componente aceita
interface AuthModalsProps {
    isModalOpen: boolean;
    onClose: () => void;
}

// --- FUNÇÕES DE VALIDAÇÃO ---

// Validação de E-mail usando uma expressão regular básica
const isValidEmail = (email: string): boolean => {
    // Regex: verifica formato (ex: user@domain.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validação de Telefone (Exemplo para Brasil: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX)
// Simplificando para 10 ou 11 dígitos, permitindo espaços, hífens e parênteses.
const isValidPhone = (phone: string): boolean => {
    // Remove tudo que não for dígito
    const cleaned = ('' + phone).replace(/\D/g, '');
    // Verifica se tem 10 ou 11 dígitos (padrão brasileiro com DDD)
    return cleaned.length >= 10 && cleaned.length <= 11;
};

// --- COMPONENTE PRINCIPAL ---

const AuthModals: React.FC<AuthModalsProps> = ({ isModalOpen, onClose }) => {
    // Estado para controlar qual formulário está ativo
    const [currentForm, setCurrentForm] = useState<FormType>('login');
    
    // Estados dos campos de registro
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    if (!isModalOpen) {
        return null; // Não renderiza nada se o modal estiver fechado
    }

    // Função genérica para mudar o formulário
    const navigateTo = (form: FormType) => {
        setCurrentForm(form);
    };

    // Submissão de exemplo
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (currentForm === 'register') {
            
            // 1. Validação de Senha
            if (password !== confirmPassword) {
                console.error("As senhas não coincidem!");
                // ATENÇÃO: Use um modal customizado, não alert() em produção.
                alert("Erro de Registro: As senhas não coincidem.");
                return;
            }

            // 2. Validação de E-mail
            if (!isValidEmail(email)) {
                console.error("Formato de e-mail inválido.");
                alert("Erro de Registro: Por favor, insira um e-mail válido (ex: seuemail@dominio.com).");
                return;
            }

            // 3. Validação de Telefone
            if (!isValidPhone(phone)) {
                console.error("Formato de telefone inválido.");
                alert("Erro de Registro: Por favor, insira um telefone válido com DDD (10 ou 11 dígitos).");
                return;
            }

            // Se todas as validações passarem
            console.log('Dados de Registro VÁLIDOS:', { name, email, phone, password });
            // Lógica de Registro (API call, etc.) aqui...
            // onClose(); 
            
        } else if (currentForm === 'login') {
             // Lógica de Login
             if (!isValidEmail(email)) {
                alert("Erro de Login: Por favor, insira um e-mail válido.");
                return;
             }
             console.log('Dados de Login:', { email, password });
             // onClose();

        } else if (currentForm === 'forgotPassword') {
             // Lógica de Recuperação de Senha
             if (!isValidEmail(email)) {
                alert("Erro: Por favor, insira um e-mail válido.");
                return;
             }
             console.log('Recuperação solicitada para:', { email });
             // onClose();
        }
    };

    const renderForm = () => {
        switch (currentForm) {
            case 'login':
                return (
                    <>
                        <h2 className="modal-title">Acessar Conta</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                placeholder="E-mail" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button type="submit" className="modal-btn-primary">Entrar</button>
                        </form>
                        <p className="modal-footer-link" onClick={() => navigateTo('forgotPassword')}>Esqueci minha senha</p>
                        <p className="modal-footer-link" onClick={() => navigateTo('register')}>Não tem conta? Registre-se</p>
                    </>
                );
            case 'register':
                return (
                    <>
                        <h2 className="modal-title">Criar Conta</h2>
                        <form onSubmit={handleSubmit}>
                            {/* CAMPO NOME */}
                            <input 
                                type="text" 
                                placeholder="Nome Completo" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                            {/* CAMPO E-MAIL */}
                             <input 
                                type="email" 
                                placeholder="E-mail" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            {/* CAMPO TELEFONE */}
                            <input 
                                type="tel" 
                                placeholder="Telefone (Ex: 11 99999-8888)" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                            {/* CAMPO SENHA */}
                            <input 
                                type="password" 
                                placeholder="Senha (Mínimo 6 caracteres)" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                minLength={6}
                            />
                            {/* CAMPO CONFIRMAR SENHA */}
                            <input 
                                type="password" 
                                placeholder="Confirmar Senha" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required 
                                minLength={6}
                            />
                            <button type="submit" className="modal-btn-primary">Registrar</button>
                        </form>
                        <p className="modal-footer-link" onClick={() => navigateTo('login')}>Já tenho conta. Acessar</p>
                    </>
                );
            case 'forgotPassword':
                return (
                    <>
                        <h2 className="modal-title">Recuperar Senha</h2>
                        <form onSubmit={handleSubmit}>
                            <p className="text-sm">
                                Digite seu e-mail para receber um link de recuperação.
                            </p>
                            <input 
                                type="email" 
                                placeholder="Seu E-mail" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <button type="submit" className="modal-btn-primary">Enviar Link</button>
                        </form>
                        <p className="modal-footer-link" onClick={() => navigateTo('login')}>Voltar para o Login</p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        // Overlay do modal
        <div className="modal-overlay" onClick={onClose}>
            {/* Conteúdo do modal (Impede o fechamento ao clicar no conteúdo) */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                {renderForm()}
            </div>
        </div>
    );
};

export default AuthModals;