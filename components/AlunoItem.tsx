import Link from "next/link";

interface Props {
    id: number;
    nome: string;
    index: number;
}

export default function AlunoItem({ id, nome, index }: Props) {
  return (
    <Link href={`/alunos/${id}`}>
    <li 
                
                className="group flex items-center justify-between border-b border-[#e5d3b3] pb-2 transition-all hover:border-[#8b4513]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-[#d2b48c] font-sans group-hover:scale-125 transition-transform">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg text-[#3e2723] group-hover:text-[#8b4513] transition-colors">
                    {nome}
                  </span>
                </div>
                
                {/* Ícone sutil decorativo que aparece no hover */}
                <span className="opacity-0 group-hover:opacity-100 text-[#8b4513] text-xs transition-opacity uppercase font-bold tracking-widest">
                  Fólio
                </span>
              </li>

    </Link>
  );
}