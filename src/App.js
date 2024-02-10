import Navbar from "./Component/Navbar";
import Upcoming from "./Pages/Upcoming";
import TopRated from "./Pages/TopRated";
import Popular from "./Pages/Popular" 
import MovieCasting from "./Pages/MovieCasting";
import "./index.css";
import { Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <>
   
    <Navbar/>
    <div className="HomeApp">
    <Routes>
    <Route exact path='/' element = {<Popular/>}/>
      <Route exact path='/Popular' element = {<Popular/>}/>
      <Route exact path='/Upcoming_movies' element = {<Upcoming/>}/>
      <Route exact path='/Top_rated' element = {<TopRated/>}/>
      <Route exact path='/Casting' element = {<MovieCasting/>}/>
    </Routes>
    </div>

    
    </>
  );
}

export default App;
