
import { useEffect, useState } from 'react'

export const UseFetch = (apiPath,queryTerm="") => {
    
    const [data, setData]=useState([]);
    const key=import.meta.env.VITE_API_KEY;

const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

useEffect(() => {
    async function fetchMovies() {
        try {
            let response = await fetch(url);
            let jsonData = await response.json();
            setData(jsonData.results);  // Check if results exist
        } catch (error) {
            console.error("Failed to fetch movies:", error);
        }
    }
    fetchMovies();
}, [url]);
  return {data}
}
