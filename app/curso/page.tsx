import Link from "next/link";
import { getCursos } from "./actions";

export default async function CursosPage() {
  const cursos = await getCursos();

  return (
    <div className="min-h-screen bg-[#f2e1c2] text-amber-950 py-10">
      <main className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10 rounded-[2rem] border border-amber-900/10 bg-[#fff7eb] p-10 shadow-[0_20px_60px_-30px_rgba(98,50,9,0.5)] sm:p-12">
          <h1 className="text-4xl font-semibold tracking-tight text-amber-950 sm:text-5xl">
            Lista de cursos
          </h1>
          <p className="mt-4 text-base leading-8 text-amber-900/80 sm:text-lg">
            Veja todos os cursos disponíveis e edite as informações de cada um.
          </p>
          <div className="mt-8">
            <Link
              href="/curso/cadastro"
              className="inline-flex items-center justify-center rounded-full bg-amber-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              Cadastrar novo curso
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cursos.length > 0 ? (
            cursos.map((curso) => (
              <article
                key={curso.id}
                className="rounded-[1.5rem] border border-amber-900/10 bg-[#fff7eb] p-6 shadow-[0_20px_60px_-30px_rgba(98,50,9,0.5)]"
              >
                <h2 className="text-2xl font-semibold text-amber-950">{curso.nome}</h2>
                <p className="mt-2 text-sm text-amber-900/80">Professor: {curso.professor}</p>
                <p className="mt-1 text-sm text-amber-900/80">Carga horária: {curso.cargaHoraria}h</p>
                <p className="mt-4 text-sm leading-6 text-amber-900/80">{curso.descricao}</p>
                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/curso/${curso.id}/editar`}
                    className="inline-flex items-center justify-center rounded-full bg-amber-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
                  >
                    Editar curso
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-[1.5rem] border border-amber-900/10 bg-[#fff7eb] p-10 text-center text-amber-950 shadow-[0_20px_60px_-30px_rgba(98,50,9,0.5)]">
              Nenhum curso encontrado.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
