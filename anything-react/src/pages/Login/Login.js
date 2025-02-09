import React, { useRef } from "react";
import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput/TextInput";
import RequestController from "../../controller/RequestController";

const Login = () => {
    const username = useRef(null);
    const password = useRef(null);

    const validateInput = () => {
        const errors = {
            username: !username.current.value,
            password: !password.current.value,
        };

        return errors.username || errors.password;
    };

    const handleTestLoggedIn = () => {
        RequestController.TestProtected({})
        .then(response => {
            console.log(response);
        })
    }

    const handleClickLogin = () => {
        const error = validateInput();

        if (error) {
            return;
        }

        RequestController.LoginUser({
            username: username.current.value,
            password: password.current.value,
        })
            .then(response => {
                console.log(response);
            })
    }

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
                onClick={handleClickLogin}
                label={"Login"}
                className={"my-2 w-full"}
            />
            <Button
                onClick={handleTestLoggedIn}
                label={'Test Logged in'}
            />
        </>
    )
}

export default Login;