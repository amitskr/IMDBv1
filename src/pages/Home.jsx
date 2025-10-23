import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id:1, title: "John Wick", relese_date: "2012"},
        {id:2, title: "Terminator", relese_date: "2020"},
        {id:3, title: "Toy Story", relese_date: "2005"},
    ];

    const handleSearch = () => {

    }

    return (<div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies" className="search-input"/>
        </form>
        <div className="movies-grid">
            {movies.map((movie => <MovieCard movie = {movie} key={movie.id}/>))}
        </div>
    </div>
    );
}

export default Home