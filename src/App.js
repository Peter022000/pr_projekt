import './App.css';
import NavigationBar from './components/NavigationBar';
import Movies from "./components/Movies";
import Footer from "./components/Footer";

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
const movies3 = [

]

function App() {
  return (
      <div className="page-container">
          <NavigationBar/>
          <div className="content-wrap">
              <Movies movies={movies2}></Movies>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
