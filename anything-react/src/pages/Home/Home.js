import React from "react";
import RequestController from "../../controller/RequestController";

const Home = () => {

    return (
        <>
            <div>
                <h1 className="text-3xl text-lime-500">Welcome to the Anything Website</h1>
                <img
                    className="h-64 w-auto"
                    src="/images/cat_logo.gif"
                    alt="Logo"
                />
            </div>
        </>
    );
}

export default Home;