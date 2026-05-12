"use client";

import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createCurso } from "./actions";

export default function CursoCadastroPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [professor, setProfessor] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const response = await createCurso({
      nome,
      professor,
      cargaHoraria: Number(cargaHoraria),
      descricao,
    });

    if (!response) {
      setNome("");
      setProfessor("");
      setCargaHoraria("");
      setDescricao("");
      router.push("/cursos");
      return;
    }

    alert(typeof response === "string" ? response : JSON.stringify(response));
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(120,80,40,0.07) 39px, rgba(120,80,40,0.07) 40px)", fontFamily: "'Special Elite', monospace" }}>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        input, textarea { background: transparent; border: none; border-bottom: 1.5px solid #b8946a; border-radius: 0; font-family: 'Special Elite', monospace; font-size: 15px; color: #2e1f08; padding: 4px; outline: none; width: 100%; }
        input::placeholder, textarea::placeholder { color: #c9b08a; }
        input:focus, textarea:focus { border-bottom-color: #7a4f1e; }
        button { transition: background 0.2s, color 0.2s; }
        button:hover { background: #f5eed6 !important; color: #3d2b10 !important; }
      `}</style>

      <h1 className="mt-10 mb-8" style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: "#3d2b10", letterSpacing: "0.02em" }}>
        Cadastro de Curso
      </h1>

      <form className="px-10 py-5 flex flex-col gap-4"
        style={{ background: "#f5eed6", borderRadius: 2, border: "1.5px solid #b8946a", boxShadow: "4px 4px 0 #b8946a", position: "relative", minWidth: 320 }}
        onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nome do curso"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Professor"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Carga horária (horas)"
          value={cargaHoraria}
          onChange={(e) => setCargaHoraria(e.target.value)}
          required
          min={0}
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          rows={4}
          required
        />
        <button type="submit"
          style={{ background: "#3d2b10", color: "#f5eed6", border: "1.5px solid #3d2b10", borderRadius: 2, fontFamily: "'Special Elite', monospace", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "10px" }}>
          ✦ Cadastrar Curso ✦
        </button>
      </form>
    </div>
  );
}
