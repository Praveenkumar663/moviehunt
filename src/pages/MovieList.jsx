import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { UseFetch } from "../hooks/UseFetch";

export const MovieList = ({title,apiPath}) => {

  const {data:movies}=UseFetch(apiPath);
 
  useEffect(()=>{
    document.title=title;
  });
  const navigate =useNavigate();
  return (
    <main className="container">
      {title==="Your Guide to great Movies "?(
        <div className="bg-body-tertiary p-5 border mb-5">
          <h3 className="text-primary">Welcome to MovieHunt</h3>
          <p className="lead">Discover movies you'll personalized suggestion,curated collection,and quick searches-your guide to finding great films</p>
          <button className="btn btn-primary text-light" onClick={()=>{
            navigate('movies/upcoming');
          }}>Explore Now</button>
        </div>
      ):""}
      <h5 className="text-danger border-bottom py-2">{title}</h5>
      
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-2 g-3">

 {movies.map((movie)=>{
  return <Card key={movie.id} movie={movie}/>
 })}
 
</div>

    </main>
  )
}
