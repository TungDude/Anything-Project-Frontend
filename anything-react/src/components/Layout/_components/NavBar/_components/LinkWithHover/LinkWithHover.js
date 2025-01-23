import React from "react";
import { Link } from "react-router-dom";

const LinkWithHover = ({path, label}) => {
    return (
        <>
            <Link
                to={path}
                className="text-gray-600 hover:text-black hover:font-bold hover:tracking-wide"
            >
                {label}
            </Link>
        </>
    )
}

export default LinkWithHover;