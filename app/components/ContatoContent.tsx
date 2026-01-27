"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import styles from '../styles/Contato.module.css';

export default function ContatoContent() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.glassCard}>
        {/* Lado Esquerdo: Informações + MAPA */}
        <div className={styles.infoSide}>
          <h1 className={styles.title}>Fale <span>Conosco</span></h1>
          <p className={styles.friendlyMessage}>
            Tem alguma dúvida ou quer conhecer nosso espaço? Estamos prontos para te receber e ajudar na sua jornada fitness!
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconBox}><MapPin size={20} /></div>
              <div>
                <h3>Nosso Endereço</h3>
                <p>R. Ismael Neri Palhares, 196 - Jardim Campestre, Itápolis - SP, 14900-000</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconBox}><Phone size={20} /></div>
              <div>
                <h3>Telefone</h3>
                <p>(16) 99962-1987</p>
              </div>
            </div>
          </div>

          {/* O MAPA INTERATIVO */}
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.90349730683!2d-48.80512112495222!3d-21.589689680203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bed1d3249ac375%3A0x3774ad54397d61cb!2sTop%20Fit%20-%20Academia%20em%20It%C3%A1polis!5e0!3m2!1spt-BR!2sbr!4v1769512703156!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização TopFit"
            ></iframe>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className={styles.formSide}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Nome Completo</label>
              <input 
                type="text" 
                placeholder="Ex: Francisco Metidieri"
                required 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label>E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Telefone</label>
                <input 
                  type="tel" 
                  placeholder="(00) 99962-1987"
                  required 
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Sua Mensagem</label>
              <textarea 
                placeholder="Como podemos te ajudar?"
                rows={4}
                required
                value={formData.mensagem}
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Enviar Mensagem <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}