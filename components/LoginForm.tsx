"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    onSend: (email: string, password: string) => Promise<void | string>;
}

export default function LoginForm({onSend}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    async function handleSubmit() {
        const response = await onSend(email, password);

        if (response) {
            alert(response);
            return;
        }

        router.push("/");

    }

  return (
    <div
        className="group flex items-center justify-between px-5 py-4 rounded-xl 
        from-[#ff0000] to-[#e8d3a8] 
        border border-[#c8a97e] 
        shadow-md hover:shadow-xl 
        transition-all duration-300 hover:scale-[1.01]"
    >

        {/* Lado esquerdo */}
        <div className="flex items-center gap-4 w-full">

        <div className="flex flex-col w-full gap-2">
            <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#fffaf0]/60 backdrop-blur-sm
            border border-[#d2b48c] rounded-md px-3 py-2
            text-sm text-[#030303] placeholder-[#8b6f47]
            focus:outline-none focus:ring-2 focus:ring-[#8b4513]
            transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Senha"
            className="w-full bg-[#fffaf0]/60 backdrop-blur-sm
            border border-[#d2b48c] rounded-md px-3 py-2
            text-sm text-[#e0d2d0] placeholder-[#8b6f47]
            focus:outline-none focus:ring-2 focus:ring-[#8b4513]
            transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        {/* Indicador lateral */}
        <button
        className="ml-4 opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 
        text-[#8b4513] text-xs font-bold tracking-[0.25em] uppercase 
        transition-all duration-300"
        onClick={handleSubmit}>
        Acessar →
        </button>
    </div>
    </div>
  )
}