import React from 'react';
import MovieCard from "./MovieCard";

const Movies = (props) => {

    return (
        <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center" }}>
            {props.movies.map((movie, index) => (
                <MovieCard title={movie.title} text={movie.text} ranking={movie.ratings} src={movie.src} description={movie.description} />
            ))}
        </div>
    );
};

export default Movies;
