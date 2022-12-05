import Card from 'react-bootstrap/Card';
import React from "react";

const MovieCard = (props) => {
    const {title, text, ranking, src} = props;

    return (
        <Card style={{ width: '18rem', margin: '1em' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Card.Text>Rating: {ranking}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
