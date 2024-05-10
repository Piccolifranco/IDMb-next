import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp} from 'react-icons/fi'

export default function MovieCard({movies}) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto my-10 gap-8 cursor-pointer'>
        {
            movies.map((movie)=>(
                    <Link key={movie.id} href={`/movie/${movie.id}`} className='flex flex-col gap-4 h-[600px] group'>
                    <Image 
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} 
                    alt='thumbnail' 
                    width={500} 
                    height={300}
                    className='rounded-lg group-hover:opacity-60 transition-opacity duration-300'>
                    </Image>
                    <h2 className='text-lg font-bold truncate'>{movie.title || movie.original_title|| movie.name}</h2>
                    <p className='text-md line-clamp-5'>{movie.overview}</p>
                    <div className='flex justify-between items-center text-sm'>
                       <p> {movie.release_date || movie.first_air_date}</p>
                        <p className='flex gap-2 items-center'><FiThumbsUp/>{movie.vote_count}</p>
                    </div>
                    </Link>
            ))
        }
    </div>
  )
}
