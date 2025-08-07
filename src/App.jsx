import './App.css';
import {Header,Footer} from "./components"
import {BrowserRouter} from "react-router-dom"
import AllRoutes from './routes/AllRoutes';
import { ScrollToTop } from './components/ScrollToTop';


function App() {
  

  return (
  
        <BrowserRouter>
         <ScrollToTop/>
      <Header/>
      <AllRoutes/>
      <Footer/>
      
      </BrowserRouter>
    
  )
}

export default App;
