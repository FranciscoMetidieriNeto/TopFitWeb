"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Parceiros.module.css';

interface Parceiro {
  id: number;
  nome: string;
  descricao: string;
  logo: string;
}

const parceiros: Parceiro[] = [
  {
    id: 1,
    nome: "Metidieri Enterprises",
    descricao: "Líder em soluções tecnológicas e marketing digital, focada em impulsionar o crescimento de ecossistemas fitness.",
    logo: "/assets/img/MetidieriEnterprisesPropaganda.png"
  },
  {
    id: 2,
    nome: "Beba Berries",
    descricao: "Especialista em nutrição natural e sucos energéticos premium para otimizar o desempenho dos atletas.",
    logo: "/assets/img/logobebaberries.jpg"
  },
  {
    id: 3,
    nome: "Top Store",
    descricao: "Sua loja oficial de suplementos e acessórios esportivos com a garantia de qualidade TopFit.",
    logo: "/assets/img/TopStore.jpg"
  }
];

export default function ParceirosContent() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Nossos <span>Parceiros</span></h1>
        <p className={styles.subtitle}>Empresas que caminham junto com a TopFit para o seu sucesso.</p>
      </header>

      <section className={styles.list}>
        {parceiros.map((parceiro, index) => (
          <div 
            key={parceiro.id} 
            className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ''}`}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={parceiro.logo} 
                alt={parceiro.nome} 
                width={400} 
                height={250} 
                className={styles.logo}
              />
            </div>
            <div className={styles.info}>
              <h2>{parceiro.nome}</h2>
              <p>{parceiro.descricao}</p>
              <button className={styles.btnParceiro}>Conhecer Parceiro</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}