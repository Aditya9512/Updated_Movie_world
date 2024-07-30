import React from "react";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="hero">
                <h1>Welcome to Movie World!</h1>
                <p>Explore the latest movies, TV shows, and more...</p>
            </div>
            <h2>Search for Movies</h2>
            <input type="search" placeholder="Search for movies, actors, or directors" />
            <button>Search</button>

            <section className="latest-movies">
                <h2>Latest Movies</h2>
                <ul>
                    <li>
                        <img src="movie1-poster.jpg" alt="Movie 1 Poster" />
                        <h3>Movie 1 Title</h3>
                        <p>Movie 1 Description</p>
                    </li>
                    <li>
                        <img src="movie2-poster.jpg" alt="Movie 2 Poster" />
                        <h3>Movie 2 Title</h3>
                        <p>Movie 2 Description</p>
                    </li>
                    <li>
                        <img src="movie3-poster.jpg" alt="Movie 3 Poster" />
                        <h3>Movie 3 Title</h3>
                        <p>Movie 3 Description</p>
                    </li>
                </ul>
            </section>

            <section className="search-bar">
               
            </section>
        </>
    );
}

export default Home;