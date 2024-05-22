import Image from 'next/image'
import React from 'react'
import {FaStar} from 'react-icons/fa'
import { FaArrowUpRightDots } from "react-icons/fa6";

export default async function MoviePage({params}) {
    const movieId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json()
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between py-10 items-center'>
            <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-semibold'>{movie.title}</h1>
            <p>{movie.release_date}</p>
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-2'>
                <p>IMDb Rating</p>
                <p className='flex items-center gap-2'><FaStar className='text-amber-500'/>{movie.vote_average}</p>
                </div>
                <div className='flex flex-col gap-2'>
                 <p>Popularity</p>  
                <p className='flex items-center gap-2'><FaArrowUpRightDots className='text-green-500'/>{movie.popularity}</p>
                </div>
            </div>

        </div>
        <div className='flex gap-10'>
            <Image
             src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} 
              alt='poster'
              width={400}
              height={200}
              />
              <p className='text-xl'>{movie.overview}</p>
        </div>
        <div>

        </div>
   </div>
  )
}
