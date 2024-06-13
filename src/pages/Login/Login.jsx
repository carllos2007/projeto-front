import React from "react";
import { Input, Button } from "@nextui-org/react";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";


export default function Login() {

    return (
        <main className="w-screen h-screen dark text-foreground bg-background flex items-center justify-center" >
            <img className="w-1/2" src="src\assets\predio.png" />
            <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="font-bitter text-4xl mb-6">Portaria Express</h1>

                <Input
                    className="w-full max-w-md mb-4"
                    autoFocus
                    endContent={<MdOutlineEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Email"
                    placeholder="Digite seu email"
                    variant="bordered"
                    isRequired
                    type="email"
                />
                <Input
                    className="w-full max-w-md mb-4"
                    isRequired
                    endContent={<MdLockOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    variant="bordered"
                />

                <Button color="primary" onPress={() => console.log('logar')} className="w-full max-w-md mb-4">
                    Entrar
                </Button>
            </div>
        </main >
    );
}
