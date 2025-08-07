import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { UseFetch } from "../hooks/UseFetch";

export  const Search = ({apiPath}) => {
  const [searchParms]=useSearchParams();
  const querTerm=searchParms.get("q");
  const{data:movies}=UseFetch(apiPath,querTerm);

  useEffect(()=>{
    document.title=`Search result for ${querTerm}`;
  })

  return (
    <main className="container">
      <h5  className="text-danger py-2 border-bottom">
        {movies.length==0?`No result found for ${querTerm}`:`Result for ${querTerm}`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-2 g-3">

 {movies.map((movie)=>{
  return <Card key={movie.id} movie={movie}/>
 })}
 
</div>
    </main>
  )
}

