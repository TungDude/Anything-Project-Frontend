import React, { useRef } from "react";
import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput/TextInput";

const Login = () => {
    const username = useRef(null);
    const password = useRef(null);

    return (
        <>
            <h1
                className="text-4xl text-blue font-bold"
            >
                Welcome back
            </h1>
            <div
                className="flex flex-col"
            >
                <TextInput
                    label={"Username"}
                    ref={username}
                />
                {/* {isUsernameError && (
                    <>
                        <span
                            className="text-xs text-red"
                        >
                            Please enter a username
                        </span>
                    </>
                )} */}
            </div>
            <div
                className="flex flex-col"
            >
                <TextInput
                    label={"Password"}
                    type={"password"}
                    ref={password}
                />
                {/* {isPasswordError && (
                    <>
                        <span
                            className="text-xs text-red"
                        >
                            Please enter a password
                        </span>
                    </>
                )} */}
            </div>

            <Button
                label={"Login"}
                className={"my-2 w-full"}
            />
        </>
    )
}

export default Login;