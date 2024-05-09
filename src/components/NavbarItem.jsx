'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title, param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div>
   <Link className={`hover:text-amber-500 ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500' : ''}`} href={`/?genre=${param}`}>
   <p className='uppercase hidden sm:inline'>{title}</p>
   </Link>
   </div>
  )
}
