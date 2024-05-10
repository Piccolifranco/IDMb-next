'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)

    } 
  return (
    <form className='max-w-7xl mx-auto flex px-5'  onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Search a movie!' 
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
       
        />
        <button className='text-amber-500 disabled:text-gray-400' disabled={!search}>Search</button>
    </form>
  )
}
