import { useEffect, useState } from "react";
// import Navbar from "./Navbar";

function Search({Name}){
const [ movie, setmovie] = useState();

     console.log(Name)
    const SearchMovie = async () => {
        const res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${Name}&page=1")
        const search = await res.json();
        console.log("search",search)
        if (search) {
            setmovie(search.results)
        };
    }
    useEffect(() => {
        SearchMovie();
    }, []);

    console.log("test", movie)

    // let result =  movie.map((movie)=>{
    //    return movie.original_title
    // })
    // console.log("result",result)

//     for (var i = result.length - 1; i >= 0; --i) {
//     if (Name.indexOf(result[i]) != -1) {
//         console.log("contains")
//     }
// }



//   const funct = ()=>{
    // for(let i = 0 ; i<= movie.length() ; i++){
    //     if(toString(movie.original_title).includes(Name)){
    //         console.log("heelo")
    //     }else{
    //         console.log("not found")
    //     }

    // }

//   } 
// console.log("test",movie);


    return(
        <>
        {/* <div>
         {
          movie.map(()=>{
          })
            
         }
         </div> */}
        </>
        );
}

export default Search;