import React from "react";
import RequestController from "../../controller/RequestController";

const Home = () => {
    const HandleTest = () => {
        RequestController.TestAPI()
        .then(response => {
            console.log(response);
        })
    }

    const HandleCreateUser = () => {
        RequestController.CreateUser({
            username: "Tung_2", 
            email: "tung2@test.com", 
            age: "50", 
        })
        .then(response => {
            console.log(response);
        })
    };

    return (
        <>
            <div>
                <h1 className="text-3xl text-lime-500">Create User</h1>
                <button onClick={HandleCreateUser}>Click HERE</button>
            </div>
        </>
    );
}

export default Home;