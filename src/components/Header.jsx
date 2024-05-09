import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-7xl mx-auto'>
        <div className='flex gap-4'>
             <MenuItem title='home' address='/' Icon={AiFillHome}/>
             <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex items-center gap-4'>
          <DarkModeSwitch/>
        <Link href={'/'} className='flex items-center gap-1'>
          <span className='text-2xl font-bold bg-amber-500 rounded-xl py-1 px-2'>IMDb</span>
          <span className='hidden sm:inline'>Clone</span>

        </Link>
        </div>
    </div>
  )
}
