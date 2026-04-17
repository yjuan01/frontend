import LoginForm from "@/components/LoginForm";
import { loginAction } from "./actions";

export default function LoginPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black w-screen h-screen">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <LoginForm onSend={loginAction}/>
            </main>
        </div>
    )
}
