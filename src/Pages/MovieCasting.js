import { useEffect, useState } from "react";

function MovieCasting() {
  const [cast, setCast] = useState([]);
  const [movie, setmovie] = useState([]);
  const Casting = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/740952/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US")
    const castDetail = await res.json();
    setCast(castDetail.cast)

    const movieRes = await fetch("https://api.themoviedb.org/3/movie/740952?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US")
    const movieDetail = await movieRes.json();
    setmovie(movieDetail)
    console.log(movie)
  };


  useEffect(() => {
    Casting();
  }, []);

  return (
    <>
    <div className="card-background">
        <img className="card-background-img" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="Movie-Poster" />
        </div>
      <div className="Poster">
        <div className="movieDetails-container">
          <div className="movie-details">
            <div className="movie-poster">
              <img className="movie-poster-img" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="Cast-Poster" />
            </div>
            <div className="movie-review FC">
              <h2 className="movie-basic">{movie.original_title}</h2>
              <h5 className="movie-basic">{"Rating " + movie.vote_average}</h5>
              <span className="movie-basic">{"Release Date" + movie.release_date}</span>
            </div>
          </div>
          <div className="overview">
            <h2 className="FC PM">Review</h2>
            <p className="PM">{movie.overview}</p>
          </div>
        </div>
      </div>

      {
        cast.map((cast) => {
          return (
            <div className="cast-homepage">
              <div className="cast-card">
                <img className="cast-img" src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} alt="Cast-Poster" />
                <h4 className="cast-name">{cast.name}</h4>
              </div>
            </div>
          )
        })
      }
    </>

  );
}

export default MovieCasting;