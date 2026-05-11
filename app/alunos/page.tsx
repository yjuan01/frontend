import AlunoItem from "@/components/AlunoItem";

import { getAlunos } from "./actions";

export default async function AlunosPage() {
  const alunos = await getAlunos();

  return (
    // Fundo: Degradê radial que simula uma mesa de madeira sob luz centralizada
    <div className="min-h-screen w-full bg-[radial-gradient(circle,_#3e2723_0%,_#1b120f_100%)] flex flex-col items-center p-6 sm:p-12 font-serif selection:bg-[#d2b48c] selection:text-[#3e2723]">
      
      {/* Título: Efeito de entalhe com sombra projetada */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-[#d2b48c] tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          ACADEMIA
        </h1>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="h-[1px] w-12 bg-[#d2b48c] opacity-50"></div>
          <span className="text-[#a68b6d] uppercase tracking-[0.3em] text-sm font-light">Lista de Integrantes</span>
          <div className="h-[1px] w-12 bg-[#d2b48c] opacity-50"></div>
        </div>
      </header>
      
      
      {/* Container "Pergaminho": Bordas duplas e textura de papel rico */}
      <main className="relative w-full max-w-2xl bg-[#ffffff] border-[12px] border-[#2c1b0e] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Detalhe de borda interna decorativa */}
        <div className="border border-[#995700] m-1 p-8 md:p-12">
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[#11100e] font-bold text-xl">
            {alunos.map((aluno) => (
              <li key={aluno.id}>
                <AlunoItem id={aluno.id} nome={aluno.nome}/>
              </li>
            ))}
                    
          </ul>

          {/* Selo de Autenticidade / Rodapé */}
          <footer className="mt-12 flex flex-col items-center opacity-40">
            
            <div className="w-16 h-16 border-2 border-[#d2b48c] rounded-full flex items-center justify-center mb-2">
              <span className="text-[#d2b48c] font-bold text-xl">DC</span>
            </div>
            <p className="text-[#8b4513] text-[10px] uppercase tracking-[0.2em]">
              Documento Oficial
            </p>
          </footer>
        </div>

        {/* Efeito de sombra nas quinas para dar volume de papel grosso */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(210,180,140,0.2)]"></div>
      </main>
    </div>
  );
}