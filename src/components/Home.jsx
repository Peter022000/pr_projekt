import React, {useEffect, useState} from 'react';
import Footer from "./Footer";
import Movies from "./Movies";
import '../App.css';

const Home = (props) => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://at.usermd.net/api/movies');
            const json = await response.json();

            setMovies(json)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovies().then(r => {});
    }, []);

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Movies movies={movies}></Movies>
            </div>
            <Footer/>
        </div>

    );
};

export default Home;
