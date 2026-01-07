// app/treinos/page.tsx
import TreinosContent from "../components/TreinosContent";
import { Metadata } from "next";

// Definição do Metadata para a página (Boa prática Next.js)
export const metadata: Metadata = {
    title: "Treinos | Top Fit",
    description: "Planilha de treinos personalizada para alunos da academia Top Fit.",
};

// Exporta a função Page como o default da rota /treinos
export default function TreinosPage() {
  // A rota apenas renderiza o componente de conteúdo
  return <TreinosContent />;
}