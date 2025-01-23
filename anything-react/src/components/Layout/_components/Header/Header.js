import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    function handleClickLogo() {
        navigate("/");
    }

    return (
        <>
            <div className="flex w-full items-center justify-between">
                {/* Image and Text aligned to the left */}
                <div 
                    className="flex space-x-4 items-center cursor-pointer"
                    onClick={handleClickLogo}
                >
                    <img
                        className="h-16 w-auto" // Adjust size of the image as needed
                        src="/images/main_logo.png"
                        alt="Logo"
                    />
                    <span className="font-semibold text-xl tracking-[4px] hover:text-gray-400">Anything Project</span>
                    <img
                        className="h-16 w-auto" // Adjust size of the image as needed
                        src="/images/main_logo.png"
                        alt="Logo"
                    />
                </div>

                {/* Navigation aligned to the right */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/register" className="text-white hover:text-gray-400 hover:underline">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;