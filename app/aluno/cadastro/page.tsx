"use client";

import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createAluno } from "./actions";

export default function AlunoCadastroPage() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");

    function formatCpf(value: string) {
        let v = value.replace(/\D/g, "").slice(0, 11);
        if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
        else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        else if (v.length > 3) v = v.replace(/(\d{3})(\d{1,3})/, "$1.$2");
        return v;
    }

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();                 
        const response = await createAluno({ 
            nome, 
            idade: Number(idade), 
            cpf: Number(cpf.replaceAll(/\D/g, "")),
            email,
        });

        if (!response) {
            setNome("");
            setIdade("");
            setCpf("");
            setEmail("");
            router.push("/alunos");
            return;
        }

        alert(response);
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(120,80,40,0.07) 39px, rgba(120,80,40,0.07) 40px)", fontFamily: "'Special Elite', monospace" }}>

            <style>{`@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
                input { background: transparent; border: none; border-bottom: 1.5px solid #b8946a; border-radius: 0; font-family: 'Special Elite', monospace; font-size: 15px; color: #2e1f08; padding: 4px; outline: none; width: 100%; }
                input::placeholder { color: #c9b08a; }
                input:focus { border-bottom-color: #7a4f1e; }
                button { transition: background 0.2s, color 0.2s; }
                button:hover { background: #f5eed6 !important; color: #3d2b10 !important; }
            `}</style>

            <h1 className="mt-10 mb-8" style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: "#3d2b10", letterSpacing: "0.02em" }}>
                Cadastro de Aluno
            </h1>

            <form className="px-10 py-5 flex flex-col gap-2"
                style={{ background: "#f5eed6", borderRadius: 2, border: "1.5px solid #b8946a", boxShadow: "4px 4px 0 #b8946a", position: "relative", minWidth: 320 }}
                onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(formatCpf(e.target.value))}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit"
                    style={{ background: "#3d2b10", color: "#f5eed6", border: "1.5px solid #3d2b10", borderRadius: 2, fontFamily: "'Special Elite', monospace", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "10px" }}>
                    ✦ Cadastrar ✦
                </button>

            </form>
        </div>
    );
}