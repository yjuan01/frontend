import LoginForm from "@/components/LoginForm";
import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(250,236,216,0.95),transparent_30%),linear-gradient(180deg,#f7e7d1,#d8b48c)] text-slate-950">
      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-12">
        <div className="grid w-full gap-6 rounded-[2rem] border border-[#8b5a2b]/20 bg-[#f9ede1]/95 p-6 shadow-[0_35px_80px_-40px_rgba(107,68,35,0.38)] md:grid-cols-[1.2fr_0.9fr] md:p-10">
          <section className="space-y-7 rounded-[1.75rem] bg-[#f2dfc6] p-8 shadow-[0_18px_40px_-30px_rgba(107,68,35,0.25)]">
            <span className="inline-flex rounded-full border border-[#8b5a2b]/20 bg-[#f7e2c7]/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#7a4f2b]">
              Rústico
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Login
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-700">
                Login elegante, com textura suave, paleta terrosa e foco no conforto visual.
              </p>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[#8b5a2b]/15 bg-[#fff4e7]/90 p-5 text-sm text-slate-700 shadow-[0_12px_30px_-20px_rgba(107,68,35,0.2)]">
              <div>
                <p className="font-semibold text-slate-900">Conteúdo limpo</p>
                <p className="mt-1 text-slate-700">Foco no login sem distrações desnecessárias.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Visual aconchegante</p>
                <p className="mt-1 text-slate-700">Textura suave e bordas arredondadas para uma aparência artesanal.</p>
              </div>
            </div>
          </section>

          <section className="rounded-[1.75rem] bg-[#fff4e7]/95 p-8 shadow-[0_20px_45px_-25px_rgba(107,68,35,0.22)]">
            <div className="mb-8 space-y-3">
              <span className="text-sm uppercase tracking-[0.24em] text-[#7a4f2b]">Entrar</span>
              <h2 className="text-3xl font-semibold text-slate-950">Acesse sua conta</h2>
              <p className="text-sm leading-6 text-slate-600">
                Digite seu email e senha para um acesso rápido e seguro.
              </p>
            </div>
            <LoginForm onSend={loginAction} />
          </section>
        </div>
      </main>
    </div>
  );
}
