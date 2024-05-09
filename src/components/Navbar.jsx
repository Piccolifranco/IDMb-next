import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex gap-5 justify-center p-3 lg:text-lg bg-amber-100 dark:bg-gray-600'>
   <NavbarItem title='Trending' param='fetchTrending'/>
   <NavbarItem title='Top Rated' param='fetchTopRated'/>
   </div>
  )
}
