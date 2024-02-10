import React, { useState, useEffect } from "react";
import "../index.css";

function Popular() {

  const [Movie, Setmovie] = useState([]);
  const [cureentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743"
    );
    const movieData = await res.json();
    if (movieData && movieData.results) {
      Setmovie(movieData.results);
    }
  };


  useEffect(() => {
    fetchMovies();
  }, []);

  const lastpostindex = cureentPage * postPerPage;
  const firstpostindex = lastpostindex - postPerPage;
  const currentpost = Movie.slice(firstpostindex, lastpostindex)
  const totalMovies = Movie.length
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalMovies / postPerPage); i++) {
      console.log(pages.push(i))
  }


  return (
    <>
      {
        currentpost.map((movie, i) => {
          return (
            <div key ={i} className="homepage">      
              <div className="card">
                <img className="card-img" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="Movie-Poster" />
                <h4 className="card-title">{movie.title}</h4>
                <h5 className="movie-rating card-title">{"Rating " + movie.vote_average}</h5>
              </div>
            </div>
          )
        })
      }

      <div className="pagination">
        {
          pages.map((pages, index) => {
            return <button key={index} onClick={() => setCurrentPage(pages)}>{pages}</button>
          })
        }
      </div>
    </>
  );
}

export default Popular;