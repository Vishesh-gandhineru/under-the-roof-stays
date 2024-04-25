"use client"

import React from 'react';
import Link from 'next/link';
import { useSession } from '@/app/context/useSession';
import { logout } from '@/app/_util/LoginAPI';

const Header = () => {
 
    const session = useSession(state => state.session);

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
                    {session && <Link href="/dashboard" className="ml-4 text-white">Dashboard</Link>}
                    {!session ? <Link href="/login" className="ml-4 text-white">Login</Link> : <button onClick={()=> logout(session)} className="ml-4 text-white">Logout</button>}
                </div>
            </nav>
        </header>
    );
};

export default Header;
