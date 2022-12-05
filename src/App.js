import './App.css';
import NavigationBar from './components/NavigationBar';
import Movies from "./components/Movies";
import Footer from "./components/Footer";

const movies = [
    {
        title: "movie1",
        text: "movie1",
        ratings: "1",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    }
]
const movies2 = [
    {
        title: "movie1",
        text: "movie1",
        ratings: "1",
        src: ""
    },
    {
        title: "movie2",
        text: "movie2",
        ratings: "2",
        src: ""
    }
]
const movies3 = [

]

function App() {
  return (
      <div className="page-container">
          <NavigationBar/>
          <div className="content-wrap">
              <Movies movies={movies}></Movies>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
