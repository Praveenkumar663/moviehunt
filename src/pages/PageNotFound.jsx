import {Link} from "react-router-dom"
import notFound from "../assets/not found image.jpg"
export  const PageNotFound = () => {
  return (
    <div className="container">
      <img src={notFound} className="img-fluid"/>
      <p className="text-center">
        <Link to="/" className="btn btn-danger"> Goto Home Page</Link>
      </p>
    </div>
  )
}

