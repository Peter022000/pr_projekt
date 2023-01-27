import Card from 'react-bootstrap/Card';
import React from "react";
import {Link} from 'react-router-dom'

const MovieCard = (props) => {

    return (
        <div style={{margin: '1em'}}>
            <Link style={{color: 'black', textDecoration: "none"}} to="/details" state={{ movie: props.movie }}>
            <Card style={{ width: '18rem', zIndex:1}}>
                <Card.Img variant="top" src={props.movie.image} alt={"No image"}/>
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    {/*<Card.Text>{props.movie.content}</Card.Text>*/}
                    {/*<Button variant="primary"><Link style={{color: 'white', textDecoration: "none"}} to={{pathname:"/movieDetails"}} state={{ movie: props }}>Szczegóły</Link></Button>*/}
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
}

export default MovieCard;
