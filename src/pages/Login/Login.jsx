import React from "react";
import { Input, Button } from "@nextui-org/react";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";


export default function Login() {

    return (
        <main className="w-screen h-screen dark text-foreground bg-background items-center justify-center h-screen grid grid-cols-5 grid-rows-5 gap-4" >
            <img className="col-span-3 row-span-5" src="src\assets\predio.png" />
            <div className="col-span-2 row-span-5 col-start-4 flex flex-col items-center justify-center h-64">
                <Input
                    className="w-full max-w-md p-6"
                    autoFocus
                    endContent={
                        <MdOutlineEmail
                            className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Digite seu email"
                    variant="bordered"
                    isRequired
                    type="email"
                />
                <Input
                    className="w-full max-w-md p-6"
                    isRequired
                    endContent={
                        <MdLockOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    variant="bordered"
                />

                <Button color="primary" onPress={console.log('logar')}>
                    Entrar
                </Button>
            </div>
        </main>
    );
}
