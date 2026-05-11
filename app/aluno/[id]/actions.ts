"use server";

import { cookies } from "next/headers";
import { Aluno } from "@/interfaces/alunos";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function getAluno(id: number) {
        try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get("access_token")?.value;

        const response = await fetch(`http://localhost:8080/alunos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }, 
            next: { tags: ["pagarDados"] }
        })
        const data = await response.json();
        if (response.status === 401) {
        redirect("/login");
  }
        return data as Aluno;
        } catch (e) {
            console.error(e);
            return {} as Aluno;
        }
}
export async function updateAluno(id: number, aluno: Aluno) {
  try {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("access_token")?.value;

  const response = await fetch(`http://localhost:8080/alunos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(aluno),
  });

  if (response.status === 401) {
    redirect("/login");
  }

  const data = await response.json();

  if (response.status === 200) {
    revalidateTag("pagarDados", "max");
    return;
  }
  return data;
  } catch (e) {
    console.error(e);
    return "Error updating aluno";
  }
}
