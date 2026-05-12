"use client";

import { Curso } from "@/interfaces/cursos";
import { useParams, useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getCurso, updateCurso } from "../actions";

export default function CursoPage() {
  const { id } = useParams();
  const [curso, setCurso] = useState({} as Curso);
  const router = useRouter();

  useEffect(() => {
    getCurso(Number(id)).then((response) => setCurso(response));
  }, [id]);

  function handleChange(value : string|number, key: keyof Curso) {
    setCurso((oldState) => ({...oldState , [key]: value }));
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const response = await updateCurso(Number(id), curso);

    if (response) {
      alert(response);
      return;
    }

    router.push(`/curso/${id}`);
  }

  return (

    <div className="h-screen w-screen flex items-center justify-center">
      <form className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center" 
      onSubmit={handleSubmit}
      >
    
        <input 
        value={curso.nome} 
        onChange={(e) => handleChange(e.target.value, "nome")} 
        className="w-full border border-gray-950 px-1"
        placeholder="Nome do Curso"
        />

        <input
        value={curso.professor}
        onChange={(e) => handleChange(e.target.value, "professor")} 
        className="w-full border border-gray-950 px-1"
        placeholder="Professor"
        />

        <input 
        value={curso.cargaHoraria} 
        type="number"
        onChange={(e) => handleChange(Number(e.target.value), "cargaHoraria")} 
        className="w-full border border-gray-950 px-1"
        placeholder="Carga Horária"
        />

        <textarea 
        value={curso.descricao} 
        onChange={(e) => handleChange(e.target.value, "descricao")} 
        className="w-full border border-gray-950 px-1"
        placeholder="Descrição"
        />

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" type="submit">
            Editar 
        </button>
        </form>
      </div>

  );
}