import React from 'react';
import Footer from "./Footer";
import Movies from "./Movies";
import NavigationBar from "./NavigationBar";
import '../App.css';

const movies = [
    {
        title: "movie1",
        text: "movie1",
        ratings: "1",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie3",
        text: "movie3",
        ratings: "3",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie1",
        text: "movie1",
        ratings: "1",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie3",
        text: "movie3",
        ratings: "3",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie1",
        text: "movie1",
        ratings: "1",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie3",
        text: "movie3",
        ratings: "3",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie1",
        text: "movie1",
        ratings: "1",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie3",
        text: "movie3",
        ratings: "3",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie1",
        text: "movie1",
        ratings: "1",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie3",
        text: "movie3",
        ratings: "3",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    }
]
const movies2 = [
    {
        title: "movie1",
        title2: "movie11",
        ratings: "1",
        description: "movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1movie1",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie2",
        title2: "movie22",
        ratings: "2",
        description: "movie2movie2movie2movie2movie2movie2movie2movie2movie2movie2movie2movie2",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    },
    {
        title: "movie3",
        title2: "movie33",
        ratings: "3",
        description: "movie3movie3movie3movie3movie3movie3movie3movie3movie3movie3movie3movie3movie3movie3",
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
    }
]
const movies3 = [

]


const Home = (props) => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Movies movies={movies2}></Movies>
            </div>
            <Footer/>
        </div>

    );
};

export default Home;
