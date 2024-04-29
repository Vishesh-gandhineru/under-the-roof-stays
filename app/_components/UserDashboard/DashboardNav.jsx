"use client"
import React from 'react'
import Link from 'next/link'


const DashboardNav = ({links}) => {
  return (
    <section>
        <nav>
            <ul>
                {links.map((link, index) => {
                    return(
                        <li key={index}>
                            <Link href={`/dashboard/${link.href}`}>{link.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </section>
  )
}

export default DashboardNav