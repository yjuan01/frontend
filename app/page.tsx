import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2e1c2] text-amber-950">
      <main className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-16">
        <section className="w-full rounded-[2rem] border border-amber-900/10 bg-[#fff7eb] p-10 shadow-[0_20px_60px_-30px_rgba(98,50,9,0.5)] sm:p-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-amber-900">
                Bem-vindo de volta
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-amber-950 sm:text-5xl">
                Página inicial 
              </h1>
              <p className="max-w-2xl text-base leading-8 text-amber-900/80 sm:text-lg">
               Aqui você pode acessar as funcionalidades do sistema, visualizar informações e navegar para outras seções. Explore o conteúdo.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/alunos"
                className="inline-flex justify-center rounded-full bg-amber-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Ver alunos
              </Link>
              <Link
                href="/aluno/cadastro"
                className="inline-flex justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Cadastrar aluno
              </Link>
              <Link
                href="/curso"
                className="inline-flex justify-center rounded-full bg-amber-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Ver cursos
              </Link>
              <Link
                href="/curso/cadastro"
                className="inline-flex justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Cadastrar curso
              </Link>
              <Link
                href="/login"
                className="inline-flex justify-center rounded-full border border-amber-950/20 bg-transparent px-6 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-50"
              >
                Ir para login
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
        
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-900/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-amber-900"
                  >
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-900/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-amber-900"
                  > 
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
