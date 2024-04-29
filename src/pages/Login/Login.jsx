import React from "react";
import { Input } from "@nextui-org/react";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";


export default function Login() {

    return (
        <>
            <Input
                autoFocus
                endContent={
                    <MdOutlineEmail
                        className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
            />
            <Input
                endContent={
                    <MdLockOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
            />
        </>
    );
}
