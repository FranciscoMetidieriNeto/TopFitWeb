// app/components/HomePageContent.tsx
"use client";

import React from 'react';
import MenuPrincipal from './MenuPrincipal'; 
import '../styles/HomePage.css'; 
import Link from 'next/link'; 
import Image from 'next/image';
import { Dumbbell, UserPlus, UserCheck, Handshake, Crown, Zap, GraduationCap, Users, Star, Check,
    Mail, Phone, Instagram} from 'lucide-react';



const Newsletter = () => <footer className="assinatura-placeholder">Assinatura</footer>;
const Footer = () => (
  <footer className="footer-main">
    <div className="container footer-container">
      <div className="footer-logo">
        <Image 
          src="/assets/img/TopFitLogoHeader.png" 
          alt="Logo Top Fit" 
          width={80} 
          height={35} 
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="footer-rights">
        <p>&copy; {new Date().getFullYear()} Top Fit. Todos os direitos reservados.</p>
      </div>

      <div className="footer-contact">
        <div className="contact-item">
          <Mail size={16} />
          <span>contato@topfit.com.br</span>
        </div>
        <div className="contact-item">
          <Phone size={16} />
          <span>(16) 99962-1987</span>
        </div>
        <a href="https://www.instagram.com/topfit_itapolis/" target="_blank" rel="noopener noreferrer" className="social-link">
          <Instagram size={20} />
          <span>@topfit_itapolis</span>
        </a>
      </div>
    </div>
  </footer>
);
const HomePageContent: React.FC = () => {
  
  const academia1 = '/assets/img/academia1.jpeg';
  const academia2 = '/assets/img/academia2.jpeg';
  const academia3 = '/assets/img/academia3.jpeg';
  const academia4 = '/assets/img/academia4.jpg'; 

  return (
    <div className="estilos-fundo">
      
      <MenuPrincipal />

      {/* PAINEL PRINCIPAL (HERO SECTION)*/}
      <div className="painel">
        <div className="overlay">
          <h1>Top Fit</h1>
          <p className="credit">O local para se transformar na sua melhor versão, seja Top</p>
          <Link href="/contato" className="btn">CONTATE-NOS</Link> 
        </div>
      </div>

      {/* CARDS DE SERVIÇOS EXPLICATIVOS*/}
        <section className="services" id="services">
        <div className="card">
            <div className="icon" style={{ color: '#007aff' }}>
            <Dumbbell size={32} />
            </div>
            <h3>Treinos</h3>
            <p>Aqui na Top Fit você pode contar com a melhor equipe para te ajudar a encontrar o seu treino ideal.</p>
            <Link href="/treinos" className="mais">Acessar treinos</Link>
        </div>

        <div className="card">
            <div className="icon" style={{ color: '#007aff' }}>
            <UserPlus size={32} />
            </div>
            <h3>Seja um aluno</h3>
            <p>Oferecemos uma estrutura e treinos personalizados para nossos alunos, faça parte e garanta seus melhores resultados.</p>
            <Link href="/gerenciamento" className="mais">Seja um aluno</Link> 
        </div>

        <div className="card">
            <div className="icon" style={{ color: '#007aff' }}>
            <UserCheck size={32} />
            </div>
            <h3>Personal</h3>
            <p>Treinos especialmente pensados na sua necessidade específica e acompanhamento durante toda a trajetória.</p>
            <Link href="/relatorio" className="mais">Saiba mais</Link>
        </div>

        <div className="card">
            <div className="icon" style={{ color: '#007aff' }}>
            <Handshake size={32} />
            </div>
            <h3>Parceiros</h3>
            <p>Acreditamos que parcerias são essenciais para realizar os nossos e os seus objetivos da melhor maneira.</p>
            <Link href="/parceiros" className="mais">Nossos parceiros</Link>
        </div>
        </section>

      {/* SEÇÕES DE SERVIÇOS - Imagens Fixas */}
      <section className="servico">
        <div className="texto1">
          <h1>O Templo da sua Evolução</h1>
          <ul>
            <li>💪 Estrutura de Elite: Equipamentos de última geração projetados para biomecânica perfeita e máximo desempenho.</li>
            <li>✨ Ambiente Motivador: Um espaço amplo, climatizado e higienizado, onde cada detalhe foi pensado para você superar seus limites.</li>
            <li>🔥 Energia Contagiante: Aqui você não apenas treina, você se transforma em sua melhor versão cercado por quem busca o mesmo.</li>
          </ul>
        </div>
        <div className="imagem-container">
            <Image 
              src={academia1} 
              alt="Infraestrutura Premium Top Fit" 
              className="img-servico"
              width={600} 
              height={400} 
              priority
              unoptimized={true}
            />
        </div>
      </section>

      {/* SEÇÃO 2: Imagem à Esquerda, Texto à Direita */}
      <section className="servico">
        <div className="imagem-container">
            <Image 
              src={academia2} 
              alt="Treinamento Personalizado" 
              className="img-servico"
              width={600} 
              height={400} 
              unoptimized={true}
            />
        </div>
        <div className="texto">
          <h1>Treinos Inteligentes</h1>
          <ul>
            <li>✅ Prescrição Sob Medida: Chega de fichas genéricas. Seu treino é construído com base na sua avaliação física e metas reais.</li>
            <li>✅ Tecnologia na Palma  Mão: Acesse sua planilha digital de qualquer lugar e acompanhe cada série e carga pelo celular.</li>
            <li>✅ Variedade de Estímulos: Da musculação pesada ao funcional dinâmico, temos o método certo para manter seu corpo em constante evolução.</li>
          </ul>
        </div>
      </section>

      {/* SEÇÃO 3: Texto à Esquerda, Imagem à Direita */}
      <section className="servico">
        <div className="texto1">
          <h1>Resultados que Aparecem</h1>
          <ul>
            <li>📊 Bioimpedância Avançada: Entenda sua composição corporal detalhadamente e ajuste sua rota para o sucesso.</li>
            <li>📈 Gráficos de Evolução: Visualize seu progresso mês a mês. Ver a mudança no espelho e nos dados é o maior combustível para continuar.</li>
            <li>🏁 Metas Alcançáveis: Definimos marcos realistas e saudáveis para que você celebre cada pequena vitória na sua jornada.</li>
          </ul>
        </div>
        <div className="imagem-container">
            <Image 
              src={academia3} 
              alt="Resultados e Avaliação Física" 
              className="img-servico"
              width={600} 
              height={400}
              unoptimized={true}
            />
        </div>
      </section>

      {/* SEÇÃO 4: Imagem à Esquerda, Texto à Direita */}
      <section className="servico">
        <div className="imagem-container">
            <Image 
              src={academia4} 
              alt="Equipe de Especialistas" 
              className="img-servico"
              width={600} 
              height={400}
              unoptimized={true}
            />
        </div>
        <div className="texto">
          <h1>Você Nunca Treina Só</h1>
          <ul>
            <li>🏆Mentoria Especializada: Professores certificados prontos para corrigir sua execução e garantir sua segurança.</li>
            <li>🤝 Comunidade Focada: Junte-se a um grupo de pessoas que compartilham o mesmo propósito: saúde, força e bem-estar.</li>
            <li>🚀 Suporte Integral: Dúvidas sobre o treino ou motivação? Nossa equipe está sempre presente para te dar o empurrão necessário.</li>
          </ul>
        </div>
      </section>
      
        {/* SEÇÃO DE PARCEIROS */}
        <section className="parceiros-section">
        <div className="container">
            <div className="parceiros-home-titulo">
            <h1>Parceiros em Destaque</h1>
            <p>Unimos forças com quem entende de performance para elevar seus resultados.</p>
            </div>

            <div className="logo-container">
            <div className="logo-track">
                {/* SET ORIGINAL DE LOGOS */}
                <Image src="/assets/img/logobebaberries.jpg" alt="Bebaberries" width={250} height={100} unoptimized />
                <Image src="/assets/img/MetidieriEnterprisesPropaganda.png" alt="ME enterprises" width={250} height={100} unoptimized />
                <Image src="/assets/img/TopStore.jpg" alt="Top Store" width={250} height={100} unoptimized />
                <Image src="/assets/img/TopFit.jpg" alt="Top Fit" width={250} height={100} unoptimized />

                {/* DUPLICAÇÃO PARA EFEITO INFINITO */}
                <Image src="/assets/img/logobebaberries.jpg" alt="Bebaberries" width={250} height={100} unoptimized />
                <Image src="/assets/img/MetidieriEnterprisesPropaganda.png" alt="ME enterprises" width={250} height={100} unoptimized />
                <Image src="/assets/img/TopStore.jpg" alt="Top Store" width={250} height={100} unoptimized />
                <Image src="/assets/img/TopFit.jpg" alt="Top Fit" width={250} height={100} unoptimized />

                <Image src="/assets/img/logobebaberries.jpg" alt="Bebaberries" width={250} height={100} unoptimized />
                <Image src="/assets/img/MetidieriEnterprisesPropaganda.png" alt="ME enterprises" width={250} height={100} unoptimized />
                <Image src="/assets/img/TopStore.jpg" alt="Top Store" width={250} height={100} unoptimized />
                <Image src="/assets/img/TopFit.jpg" alt="Top Fit" width={250} height={100} unoptimized />
            </div>
            </div>

            <div className="ver-todos-container">
            <Link href="/parceiros" className="btn btn-parceiros">
                Conhecer Todos os Parceiros
            </Link>
            </div>
        </div>
        </section>

      {/* SEÇÃO DE PLANOS DE ASSINATURA */}
        <section className="planos-section">
        <div className="container">
            <div className="planos-header">
            <h1>Escolha seu Plano</h1>
            <p>Invista em você. Temos o plano ideal para cada etapa da sua jornada.</p>
            </div>

            <div className="planos-grid">
            {/* Plano 1: Essencial */}
            <div className="plano-card">
                <Dumbbell className="plano-icon" size={40} />
                <h3>Essencial</h3>
                <div className="plano-preco">
                <span>R$</span> <strong>89</strong> <span>/mês</span>
                </div>
                <ul className="plano-features">
                <li><Check size={16} /> Acesso à musculação</li>
                <li><Check size={16} /> Área de cardio completa</li>
                <li><Check size={16} /> Vestiário premium</li>
                </ul>
            </div>

            {/* Plano 2: Premium (Destaque) */}
            <div className="plano-card destaque">
                <div className="badge-popular">MAIS VENDIDO</div>
                <Crown className="plano-icon" size={40} />
                <h3>Premium</h3>
                <div className="plano-preco">
                <span>R$</span> <strong>119</strong> <span>/mês</span>
                </div>
                <ul className="plano-features">
                <li><Check size={16} /> Musculação e Cardio</li>
                <li><Check size={16} /> Aulas de Ginástica</li>
                <li><Check size={16} /> Treinar em qualquer unidade</li>
                </ul>
            </div>

            {/* Plano 3: Elite */}
            <div className="plano-card">
                <Zap className="plano-icon" size={40} />
                <h3>Elite</h3>
                <div className="plano-preco">
                <span>R$</span> <strong>159</strong> <span>/mês</span>
                </div>
                <ul className="plano-features">
                <li><Check size={16} /> Acesso Total (VIP)</li>
                <li><Check size={16} /> Área de Crossfit</li>
                <li><Check size={16} /> Plano Nutricional incluso</li>
                </ul>
            </div>

            {/* Plano 4: Universitário */}
            <div className="plano-card">
                <GraduationCap className="plano-icon" size={40} />
                <h3>Universitário</h3>
                <div className="plano-preco">
                <span>R$</span> <strong>79</strong> <span>/mês</span>
                </div>
                <ul className="plano-features">
                <li><Check size={16} /> Musculação e Cardio</li>
                <li><Check size={16} /> Horários flexíveis</li>
                <li><Check size={16} /> Desconto na matrícula</li>
                </ul>
            </div>

            {/* Plano 5: Família */}
            <div className="plano-card">
                <Users className="plano-icon" size={40} />
                <h3>Família</h3>
                <div className="plano-preco">
                <span>R$</span> <strong>259</strong> <span>/mês</span>
                </div>
                <ul className="plano-features">
                <li><Check size={16} /> Até 3 pessoas inclusas</li>
                <li><Check size={16} /> Avaliação mensal</li>
                <li><Check size={16} /> Espaço Kids disponível</li>
                </ul>
            </div>

            {/* Plano 6: Personal VIP */}
            <div className="plano-card">
                <Star className="plano-icon" size={40} />
                <h3>Personal VIP</h3>
                <div className="plano-preco">
                <span>R$</span> <strong>399</strong> <span>/mês</span>
                </div>
                <ul className="plano-features">
                <li><Check size={16} /> Treino 100% individual</li>
                <li><Check size={16} /> Fisioterapia preventiva</li>
                <li><Check size={16} /> Kit suplementação mensal</li>
                </ul>
            </div>
            </div>
        </div>
        </section>

        <Footer />

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