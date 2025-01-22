import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="flex w-full items-center justify-between">
                {/* Image aligned to the left */}
                <img
                    className="h-16 w-auto" // Adjust size of the image as needed
                    src="/images/cat_logo.gif"
                    alt="Logo"
                />

                {/* Navigation aligned to the right */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/register" className="text-white hover:text-gray-400">
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