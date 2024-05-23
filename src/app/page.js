import MovieCard from "@/components/MovieCard";
import Image from "next/image";
import {Suspense} from "react";

const API_KEY = process.env.API_KEY

export default function Home({searchParams}) {
  <Suspense>
    <Movies searchParams={searchParams} />
  </Suspense>
  
}


async function Movies({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week` }?api_key=${API_KEY}&page=1`);
  const data = await res.json();
  if(!res.ok){
    throw new Error('Failed to fetch movies')
  }
  const movies = data.results
  return (
    <div>
      <MovieCard movies={movies} />
    </div>
  )
}
