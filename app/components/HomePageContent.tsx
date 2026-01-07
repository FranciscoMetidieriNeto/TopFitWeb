// app/components/HomePageContent.tsx
// Componente principal que integra o MenuPrincipal e o restante do conteúdo da página.
"use client";

import React from 'react';
// Importação do novo componente modular de Menu
import MenuPrincipal from './MenuPrincipal'; 
// Importação do CSS: Volta para a pasta 'app' e entra em 'styles'
import '../styles/HomePage.css'; 
// Importe o Link do Next.js para roteamento otimizado 
import Link from 'next/link'; 
// Importe o Image do Next.js para otimização de imagem 
import Image from 'next/image';

// Componentes Placeholder (Idealmente, você também os moveria para arquivos separados)
const Newsletter = () => <footer className="assinatura-placeholder">Assinatura</footer>;
const Footer = () => <footer className="footer-placeholder">Rodapé</footer>;


const HomePageContent: React.FC = () => {
  
  // CAMINHOS CORRIGIDOS PARA OS ARQUIVOS DA ACADEMIA COM EXTENSÃO E NOME EXATOS:
  // academia1.jpeg, academia2.jpeg, academia3.jpeg e academia4.jpg
  const academia1 = '/assets/img/academia1.jpeg';
  const academia2 = '/assets/img/academia2.jpeg';
  const academia3 = '/assets/img/academia3.jpeg';
  const academia4 = '/assets/img/academia4.jpg'; // Note que este é .jpg

  return (
    <div className="estilos-fundo">
      
      {/* UTILIZAÇÃO DO NOVO COMPONENTE DE MENU */}
      <MenuPrincipal />

      {/* PAINEL PRINCIPAL (HERO SECTION)*/}
      <div className="painel">
        <div className="overlay">
          <h1>Top Fit</h1>
          <p className="credit">O local para se transformar na sua melhor versão, seja Top</p>
          {/* Usando <Link> do Next.js para a navegação */}
          <Link href="/contato" className="btn">CONTATE-NOS</Link> 
        </div>
      </div>

      {/* CARDS DE SERVIÇOS EXPLICATIVOS*/}
      <section className="services" id="services">
        <div className="card">
          <div className="icon" style={{ color: '#28a745' }}>
            {/* Ícones de Font Awesome */}
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Treinos</h3>
          <p>Aqui na Top Fit você pode contar com a melhor equipe para te ajudar a encontrar o seu treino ideal.</p>
          {/* LINK ATUALIZADO: Usando Link e apontando para a rota /treinos */}
          <Link href="/treinos" className="mais">Acessar treinos</Link>
        </div>
        <div className="card">
          <div className="icon" style={{ color: '#ff6347' }}>
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Seja um aluno</h3>
          <p>Oferecemos uma estrutura e treinos personalizados para nossos alunos, faça parte e garanta seus melhores resultados. </p>
          {/* RECOMENDADO: Usar Link do next/link em vez de <a> puro */}
          <Link href="/gerenciamento" className="mais">Seja um aluno</Link> 
        </div>
        <div className="card">
          <div className="icon" style={{ color: '#007bff' }}>
            <i className="fas fa-file-alt"></i>
          </div>
          <h3>Personal</h3>
          <p>Treinos especialmente pensados na sua necessidade específica e acompanhamento durante toda a trajetória.</p>
          {/* RECOMENDADO: Usar Link do next/link em vez de <a> puro */}
          <Link href="/relatorio" className="mais">Saiba mais</Link>
        </div>
        <div className="card">
          <div className="icon" style={{ color: '#ffc107' }}>
            <i className="fas fa-handshake"></i>
          </div>
          <h3>Parceiros</h3>
          <p>Acreditamos que parcerias são essenciais para realizar os nossos e os seus objetivos da melhor maneira.</p>
          {/* RECOMENDADO: Usar Link do next/link em vez de <a> puro */}
          <Link href="/parceiros" className="mais">Nossos parceiros</Link>
        </div>
      </section>

      {/* SEÇÕES DE SERVIÇOS DETALHADOS - Academia 1 (USANDO <Image> e unoptimized)*/}
      <section className="servico">
        <div className="texto1">
          <h1>Nossa academia</h1>
          <ul>
            <li>💪 Maximize Seu Potencial: Descubra a Estrutura da Nossa Academia!</li>
            <li> Seja você um iniciante buscando dar o primeiro passo ou um atleta experiente visando o próximo nível, nossa academia foi projetada pensando em você. Entendemos que a chave para a consistência e o sucesso a longo prazo é ter acesso à estrutura correta e um ambiente que inspire.</li>
          </ul>
        </div>
        <div className="carousel-container">
          <div className="carousel-slide">
            <Image 
              src={academia1} 
              alt="Estrutura da Academia 1" 
              className="carousel-img"
              width={600} 
              height={400} 
              priority
              unoptimized={true} // Força o carregamento como tag <img> normal
            />
          </div>
          {/* Botões e Indicadores (Estáticos, apenas para o visual) */}
          <button className="carousel-btn prev" aria-label="Imagem Anterior">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" aria-label="Próxima Imagem">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="carousel-indicators">
            <span className="active" aria-label="Imagem 1"></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* SEÇÕES DE SERVIÇOS DETALHADOS - Academia 2 (USANDO <Image> e unoptimized)*/}
      <section className="servico1">
        <div className="carousel-container">
          <div className="carousel-slide">
            <Image 
              src={academia2} 
              alt="Estrutura da Academia 2" 
              className="carousel-img"
              width={600} 
              height={400} 
              unoptimized={true}
            />
          </div>
          <button className="carousel-btn prev" aria-label="Imagem Anterior">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" aria-label="Próxima Imagem">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="carousel-indicators">
            <span className="active" aria-label="Imagem 1"></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="texto">
          <h1>Gerenciamento</h1>
          <ul>
            <li>O FAVEP oferece ferramentas inteligentes para gerenciar sua propriedade com eficiência e simplicidade. Centralize todas as operações e tome decisões estratégicas com base em dados precisos.</li>
            <li> ✅ Controle Integrado - acompanhe atividades agrícolas, estoque, finanças e recursos em um único lugar.</li>
            <li> ✅ Otimização de Recursos</li>
            <li> ✅ Gestão Financeira</li>
            <li> ✅ Planejamento Estratégico Programe safras, manejo animal e manutenções com calendários personalizados. </li>
            <li> ✅ Acesso Remoto Transforme dados em resultados!</li>
          </ul>
        </div>
      </section>

      {/* SEÇÕES DE SERVIÇOS DETALHADOS - Academia 3 (USANDO <Image> e unoptimized)*/}
      <section className="servico">
        <div className="texto1">
          <h1>Relatórios</h1>
          <ul>
            <li>O módulo de Relatórios do FAVEP transforma dados complexos da sua propriedade em informações claras e acionáveis, facilitando a análise e a tomada de decisões estratégicas.</li>
            <li> 📊 Relatórios Personalizados - Gere documentos sob medida para acompanhar produtividade, finanças, estoque e mais.</li>
            <li>📅 Análises Temporais - Compare desempenho entre períodos (safras, meses, anos) e identifique tendências.</li>
            <li>🌱 Gestão Agrícola Detalhada - Acompanhe custos de insumos, rendimento por cultura e eficiência operacional.</li>
            <li>💵 Controle Financeiro - Visualize receitas, despesas e lucratividade em gráficos e tabelas intuitivas.</li>
            <li>🔄 Exportação Simplificada - Compartilhe relatórios em PDF, Excel ou CSV com parceiros e técnicos.</li>
          </ul>
        </div>
        <div className="carousel-container">
          <div className="carousel-slide">
            <Image 
              src={academia3} 
              alt="Estrutura da Academia 3" 
              className="carousel-img"
              width={600} 
              height={400}
              unoptimized={true}
            />
          </div>
          <button className="carousel-btn prev" aria-label="Imagem Anterior">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" aria-label="Próxima Imagem">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="carousel-indicators">
            <span className="active" aria-label="Imagem 1"></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* SEÇÕES DE SERVIÇOS DETALHADOS - Academia 4 (USANDO <Image> e unoptimized)*/}
      <section className="servico1">
        <div className="carousel-container">
          <div className="carousel-slide">
            <Image 
              src={academia4} 
              alt="Estrutura da Academia 4" 
              className="carousel-img"
              width={600} 
              height={400}
              unoptimized={true}
            />
          </div>
          <button className="carousel-btn prev" aria-label="Imagem Anterior">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" aria-label="Próxima Imagem">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="carousel-indicators">
            <span className="active" aria-label="Imagem 1"></span>
            <span></span>
          </div>
        </div>
        <div className="texto">
          <h1>Colaboradores</h1>
          <ul>
            <li>Sua equipe é o coração da sua fazenda, e a gestão eficiente dela é a chave para o sucesso. Com o módulo "Convidar Novo Colaborador" do FAVEP - Gestão Agrícola, você ganha controle, segurança e agilidade, tudo em um só lugar.</li>
            <li> ✅ Identificação Clara - Basta inserir o E-mail do Usuário e você já pode começar a configurar o acesso.</li>
            <li> ✅ Nível de Acesso Personalizado - Atribua funções específicas (Gerente, Funcionário.) para definir o que cada pessoa pode visualizar ou editar no sistema.</li>
            <li> ✅ Foco por Propriedade - Tem várias fazendas? Com o recurso "Liberar Acesso às Propriedades (Opcional)", você garante que cada colaborador veja apenas os dados e operações da propriedade para a qual ele foi designado</li>
          </ul>
        </div>
      </section>
      
      {/* SEÇÃO DE PARCEIROS NA HOME (USANDO <Image> e unoptimized)*/}
      <section className="parceiros-section">
        <div className="container">
          <div className="parceiros-home-titulo">
            <h1>Parceiros em Destaque</h1>
            <p>Colaboramos com os melhores para impulsionar seus resultados.</p>
          </div>

          <div className="carousel">
            <div className="carousel-track">
              {/* Logos de Parceiros */}
              <Image src="/assets/img/agrovital.png" alt="Agrovital Insumos" width={150} height={50} unoptimized />
              <Image src="/assets/img/terraviva.png" alt="Terraviva Nutrientes" width={150} height={50} unoptimized />
              <Image src="/assets/img/FAVEP_LOGO.png" alt="FAVEP" width={150} height={50} unoptimized />
              <Image src="/assets/img/Agrotech.png" alt="Agrotech Solutions" width={150} height={50} unoptimized />

              {/* Logos Duplicados para Carrossel Infinito */}
              <Image src="/assets/img/agrovital.png" alt="Agrovital Insumos" width={150} height={50} unoptimized />
              <Image src="/assets/img/terraviva.png" alt="Terraviva Nutrientes" width={150} height={50} unoptimized />
              <Image src="/assets/img/FAVEP_LOGO.png" alt="FAVEP" width={150} height={50} unoptimized />
              <Image src="/assets/img/Agrotech.png" alt="Agrotech Solutions" width={150} height={50} unoptimized />
            </div>
          </div>

          <div className="ver-todos-container">
            <a href="/parceiros" className="btn btn-parceiros">Ver Todos os Parceiros</a>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />

      {/* Botão Voltar ao Topo (Estático, sem a lógica de rolagem)*/}
      <button 
        id="scrollToTopBtn" 
        className="btn-scroll-top" 
        aria-label="Voltar ao topo da página"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default HomePageContent;