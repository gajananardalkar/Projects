import React, { useState, useEffect } from "react";

function TopRated() {
    const [Topmovie, settopmovie] = useState([]);
    const [cureentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)

    const TopRated = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743")
        const topRatedMovie = await res.json();
        if (topRatedMovie.results) {
            settopmovie(topRatedMovie.results)
        };
    }
    useEffect(() => {
        TopRated();
    }, []);

    const lastpostindex = cureentPage * postPerPage;
    const firstpostindex = lastpostindex - postPerPage;
    const currentpost = Topmovie.slice(firstpostindex, lastpostindex)
    const totalMovies = Topmovie.length
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalMovies / postPerPage); i++) {
        console.log(pages.push(i))
    }

    // console.log(pages)

    return (
        <>
            {
                currentpost.map((upmovie) => {
                    return (
                        <div className="homepage">
                            <div className="card">
                                <img className="card-img" src={"https://image.tmdb.org/t/p/w500" + upmovie.poster_path} alt="Movie-Poster" />
                                <h4 className="card-title">{upmovie.title}</h4>
                                <h5 className="movie-rating card-title">{"Rating " + upmovie.vote_average}</h5>
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

export default TopRated;