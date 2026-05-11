"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurso } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";
import { Curso } from "@/interfaces/cursos";

export default function AlunoPage() {
  const { id } = useParams();
  const [curso, setCurso] = useState({} as Curso);

  useEffect(() => {
    getCurso(Number(id)).then((response) => setCurso(response));
  }, [id]);

  return (

    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center">
        <div className="flex gap-2">
        <Link href={`/curso/${id}/editar`}> 
         <PenBox />
            </Link>
        </div>
       <h2 className="text-2xl font-semibold text-amber-950">{curso.nome}</h2>
                <p className="mt-2 text-sm text-amber-900/80">Professor: {curso.professor}</p>
                <p className="mt-1 text-sm text-amber-900/80">Carga horária: {curso.cargaHoraria}h</p>
                <p className="mt-4 text-sm leading-6 text-amber-900/80">{curso.descricao}</p>
                <div className="mt-6 flex gap-3">
        </div>
      </div>
    </div>
  );
}