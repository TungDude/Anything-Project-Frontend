import React from "react";
import RequestController from "../../controller/RequestController";
import { useRef } from "react";
import Button from "../../components/Button/Button";

const Register = () => {
    const username = useRef(null);
    const password = useRef(null);

    const handleClickCreateUser = () => {
        RequestController.CreateUser({
            username: username.current.value,
            password: password.current.value,
        })
            .then(response => {
                console.log(response);
            })
    };

    return (
        <>
            <div>
                <h1 className="text-3xl text-blue">Create User</h1>
                <div>
                    <span className="mr-4">Username</span>
                    <input
                        type="text"
                        ref={username}
                    />
                </div>
                <div>
                    <span className="mr-4">Password</span>
                    <input
                        type="text"
                        ref={password}
                    />
                </div>
                <Button
                    label={"Create User"}
                    onClick={handleClickCreateUser}
                />
            </div>
        </>
    );
}

export default Register;