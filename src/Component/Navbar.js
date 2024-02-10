import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
const [moviename, setmoviename] = useState('');
const [search , setsearch] = useState(moviename)
const handlechange =(event)=>{
    setmoviename(event.target.value);
}
const handleclick = ()=>{
    setsearch(moviename)
}
console.log(search)
const submit=(e)=>{
    e.preventDefault()
}

    return (
        <div className="nav">
            <div className="logo">
                <h2 className="logo-name">MovieDb</h2>
            </div>
            <div className="nav-item-container">
                <h3 className="nav-item-head"><Link className="nav-item" to='/Popular'>Popular</Link></h3>
                <h3 className="nav-item-head"><Link className="nav-item" to='/Top_rated'>Top Rated</Link></h3>
                <h3 className="nav-item-head"><Link className="nav-item" to='/Upcoming_movies'>Upcoming</Link></h3>
                <h3 className="nav-item-head"><Link className="nav-item" to='/Casting'>Casting</Link></h3>
                <h3><input className="nav-item-head searchbox" onChange={handlechange}  type="search" placeholder="Search" /></h3>
                <h3><button className="btn" onSubmit={submit} onClick={handleclick}>Search</button></h3>
            </div>
            <Search Name= {search}/>
        </div>
    );

    

}

export default Navbar;