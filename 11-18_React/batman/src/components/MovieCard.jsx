
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MovieCard(props) {

    return (
        <>
            <Card style={{ width: '11rem' }}>
                <Card.Img variant="top" src={props.poster} />
                <Card.Body>
                    <Button variant="primary">More Info</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard


