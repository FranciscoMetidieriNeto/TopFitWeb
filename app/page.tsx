// Importa o componente principal de conteúdo que foi movido
import HomePageContent from "./components/HomePageContent";

// Exporta a função Page como o default da rota
export default function HomePage() {
  // A rota apenas renderiza o componente de conteúdo
  return <HomePageContent />;
}