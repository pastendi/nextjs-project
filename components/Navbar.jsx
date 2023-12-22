import Link from 'next/link'
import React from 'react'
const links = [
  {
    href: '/client',
    label: 'client',
  },
  {
    href: '/drinks',
    label: 'drinks',
  },
  {
    href: '/tasks',
    label: 'tasks',
  },
  {
    href: '/query',
    label: 'query',
  },
]
const Navbar = () => {
  return (
    <div className='bg-base-300 py-4'>
      <nav className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
          Next.Js
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>
          {links.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className='capitalize'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
