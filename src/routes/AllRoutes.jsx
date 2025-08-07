import {Routes,Route} from "react-router-dom"
import { MovieList,MovieDetails, Search, PageNotFound } from "../pages"


const AllRoutes = () => {
  return (
  <>
   
  <Routes>
<Route path="/" element={<MovieList title="Your Guide to great Movies " apiPath="movie/now_playing" />}/>
<Route path="movies/popular" element={<MovieList title="popular Movies " apiPath="movie/popular" />}/>
<Route path="movies/top" element={<MovieList title="Top Rated Movies " apiPath="movie/top_rated" />}/>
<Route path="movies/upcoming" element={<MovieList title="Upcoming Movies " apiPath="movie/upcoming" />}/>
<Route path="movie/:id" element={< MovieDetails />} />
<Route path="search" element={<Search apiPath="search/movie" />} />

<Route path="*" element={<PageNotFound/>} title="page not found "/>

  </Routes>
 
  </>
  );
}

export default AllRoutes