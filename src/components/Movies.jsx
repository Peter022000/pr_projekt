import React from 'react';
import MovieCard from "./MovieCard";

const Movies = (props) => {
    let poster = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180";

    return (
        <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center" }}>
            {props.movies.map((movie, index) => (
                <MovieCard title={movie.title} text={movie.text} ranking={movie.ratings} src={poster} />
            ))}
        </div>
    );
};

export default Movies;
