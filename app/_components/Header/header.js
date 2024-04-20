import React from 'react';
import Link from 'next/link';
const Header = () => {
    return (
        <header className="bg-gray-800">
            <nav className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center">
                    <Link href="/" className="text-white font-bold text-lg">Home</Link>
                    <Link href="/properties" className="ml-4 text-white">Properties</Link>
                    <Link href="/about" className="ml-4 text-white">About</Link>
                    <Link href="/compare" className="ml-4 text-white">Compare</Link>
                </div>
                <div className="flex items-center">
                    {/* Add any additional elements here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
