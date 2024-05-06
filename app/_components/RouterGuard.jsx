"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const RouterGuard = ({ children }) => {
 const router = useRouter();
 const isLoggedIn = true;
 useEffect(() => {
  if (!isLoggedIn) {
   router.push('/login');
  }
 }, [isLoggedIn]);

 return isLoggedIn ? children : null
}

export default RouterGuard