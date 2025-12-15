import Link from "next/link";
import React from "react";


const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
                <Link href="/" passHref legacyBehavior>
                    <a className="text-2xl font-bold hover:text-indigo-400 transition duration-300">
                        Meu Blog Next.js
                    </a>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/posts" passHref legacyBehavior>
                                <a className="hover:text-indigo-400 transition duration-300">Posts</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref legacyBehavior>
                                <a className="hover:text-indigo-400 transition duration-300">Sobre</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;