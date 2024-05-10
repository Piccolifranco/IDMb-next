import MovieCard from '@/components/MovieCard';
import React from 'react'

export default async function SearchPage({params}) {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`)
    const data = await res.json();
    const results = data.results;
  return (
    <div>
        {
            results && results.length === (
                <h2 className='text-center pt-6'>No resoults found</h2>
            )
        }
        {results && <MovieCard movies={results}/>}
    </div>
  )
}
