"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

interface CreateCurso {
  nome: string;
  professor: string;
  cargaHoraria: number;
  descricao: string;
}

export async function createCurso(curso: CreateCurso) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  const response = await fetch("http://localhost:8080/cursos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(curso),
  });

  if (response.status === 201) {
    revalidateTag("listar-cursos", "max");
    return;
  }

  if (response.status === 401) {
    redirect("/login");
  }

  const data = await response.json();
  return data;
}
