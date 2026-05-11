"use server";

import { cookies } from "next/headers";
import { Curso } from "@/interfaces/cursos";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function getCurso(id: number) {
        try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get("access_token")?.value;

        const response = await fetch(`http://localhost:8080/cursos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }, 
            next: { tags: ["pagarDados"] }
        })
        const data = await response.json();
        if (response.status === 401) {
        redirect("/login");
  }
        return data as Curso;
        } catch (e) {
            console.error(e);
            return {} as Curso;
        }
}
export async function updateCurso(id: number, curso: Curso) {
  try {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("access_token")?.value;

  const response = await fetch(`http://localhost:8080/cursos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(curso),
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
    return "Error updating curso";
  }
}