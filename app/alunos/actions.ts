"use server";

import { revalidateTag } from "next/cache";
import { Aluno } from "@/interfaces/alunos";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAlunos() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    const response = await fetch("http://localhost:8080/alunos", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        next: { tags: ["listar"] },
    })

    if (response.status === 401) {
        redirect("/login");
    }

    const data = await response.json();
    return data as Aluno[];
}
export async function deleteAluno(id: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/alunos/${id}`, {
        method: "DELETE",

        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    const data = await response.json();
     
    if (response.status === 200) {
    revalidateTag("listar", "max");
    }

    if (response.status === 401) {
        redirect("/login");
    }



    return data; 
}

