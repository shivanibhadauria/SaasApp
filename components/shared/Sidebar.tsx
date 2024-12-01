"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'

import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='sidebar' >
      <div className='' >
<Link href="/" className='sidebar-logo' >
<Image src="/assets/images/logo.png" alt='logo' width={180}  height={28}  />

</Link>

<nav className='sidebar-nav' >
  <SignedIn>
    <ul className='sidebar-nav_elements' >
      {navLinks.map((link) => {
        const isActive =  link.route === pathname;

       return ( 
        <li key={link.route} className={`sidebar-nav_element group ${isActive ? "bg-purple-500" : ""}`} ><Link href={link.route}>{link.label}</Link></li>
       )

        
})}
    </ul>
  </SignedIn>
</nav>

      </div>


    </aside>
  )
}

export default Sidebar