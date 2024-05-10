"use client";

import React from 'react'
import {useSession} from '../../context/useSession'
import { logout } from '@/app/_util/LoginAPI';
import Link from 'next/link';
const HeaderLoginButton = () => {
    const session = useSession(state => state.session);
    const sessionkey = session.sessionId  
  return (
    <div className="flex items-center" suppressHydrationWarning>
    {sessionkey ? <Link href="/dashboard" className="ml-4 text-white">Dashboard</Link> : null}
    {!sessionkey ? <Link href="/login" className="ml-4 text-white">Login</Link> : <button onClick={()=> logout(session)} className="ml-4 text-white" suppressHydrationWarning>Logout</button>}
</div>
  )
}

export default HeaderLoginButton