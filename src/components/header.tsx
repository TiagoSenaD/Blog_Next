'use client';
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
    { label: "Login", href: "/login" },
    { label: "Home", href: "/" },
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
                <Link href="/" className="text-2xl font-bold hover:text-indigo-400 transition duration-300">
                    Meu Blog Next.js
                </Link>
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xl transition duration-300"
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>

                <aside className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-900 shadow-xl z-[60] transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
                }
                >
                    <div className="p-4 flex justify-end">
                        <button
                            onClick={closeMenu}
                            className="p-2 rounded-md hover:bg-gray-200 text-gray-900 text-xl"
                            aria-label="Fechar Menu"
                        >
                            x
                        </button>
                    </div>

                    <nav className="flex flex-col p-4 space-y-4 border-t border-gray-200">
                        {menuItems.map((link) => (
                            <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-indigo-600 transition duration-150 p-2 block rounded-md">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                )}

            </header >
        </>
    );
};

export default Header;