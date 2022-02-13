import React from "react";
import { Link } from "react-router-dom";

import Container from "./Container";

/**
 * A simple navbar to demonstrate navigating between pages using the 
 * `react-router-dom` package.
 */
const Navbar = () => {
    return (
        <nav className="bg-gray-100 mb-8">
            <Container className="flex items-center">
                {/* The "logo" links to the home page. */}
                <Link
                    to="/"
                    className="text-lg font-black py-4"
                >
                    React Template
                </Link>
                <ul className="flex items-center ml-auto">
                    <li>
                        <Link
                            to="/redux"
                            className="block px-4 py-4"
                        >
                            Redux
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="block px-4 py-4"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar;
