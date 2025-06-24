import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage(){
    return(
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Sign In to Your Account
                    </h1>
                </div>
                <LoginForm/>
            </div>
        </div>
    )
}