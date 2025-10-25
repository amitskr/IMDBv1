import { Link } from "react-router-dom";

function NaBar(){
    return <nav className="navbar">
        <div className="navbarBrand">
            <Link to = '/'>IMDBv1</Link>
        </div>
        <div className="navbar-links">
            <Link to = '/'className="nav-link" >Home</Link>
            <Link to = '/Favourites'className="nav-link" ></Link>
            </div>
    </nav>
}