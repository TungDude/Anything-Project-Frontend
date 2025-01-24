import React from "react";

const Button = ({ label, onClick, variant = "primary" }) => {
    const baseClasses = "text-white font-semibold py-2 px-4 rounded-md";
    const variantClasses = {
        primary: "bg-blue hover:bg-cyan",
        secondary: "bg-lightgray hover:bg-black",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]}`}
        >
            {label}
        </button>
    );
}

export default Button;