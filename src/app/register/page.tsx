import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage(){
    return(
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-2">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Create an Account
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Enter your details to get started.
                    </p>
                </div>
                <RegisterForm/>
            </div>
        </div>
    );
}