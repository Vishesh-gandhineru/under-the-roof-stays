"use client"

import { useSession } from '@/app/context/useSession';
import { logout } from '@/app/_util/LoginAPI';
import { Button } from '../ui/button';

import React from 'react'


const LogoutButton = () => {
    const session = useSession(state => state.session);
  return (
    <Button onClick={()=>logout(session.sessionId)}>Logout</Button>
  )
}

export default LogoutButton