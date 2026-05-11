"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Curso } from "@/interfaces/cursos";

export async function getCursos() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  const response = await fetch("http://localhost:8080/cursos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { tags: ["listar-cursos"] },
  });

  if (response.status === 401) {
    redirect("/login");
  }

  if (!response.ok) {
    return [] as Curso[];
  }

  const data = await response.json();
  return data as Curso[];
}
