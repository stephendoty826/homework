
import React, {useState, useEffect}  from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MovieList() {

    const [movieData, setMovieData] = useState([])
    const [hidden, setHidden] = useState(true)

    const fetchData2 = async () => {
        let results = await fetch("http://www.omdbapi.com/?s=batman&apikey=c8ff0a0a")
        let data = await results.json()

        setMovieData(data.Search)

    }
    
    useEffect(() => {
        fetchData2()
    }, [])
    
    console.log(movieData);

    // const movieDisplayStyles

    const cardStyles = {
        paddingBottom: "25px", 
        paddingLeft: "50px",
        paddingTop: "25px"
    }



    return (
        <>
            <div className="row">
                <div className="row col-6">
                    {movieData.map(obj => {
                        return (
                            <div style={cardStyles} className="col-3" key={obj.imdbID}>
                                <Card style={{ width: '11rem' }}>
                                    <Card.Img variant="top" src={obj.Poster} />
                                    <Card.Body>
                                        <Button onClick={(e)=>{console.log(e.target.id);}}variant="primary" id={obj}>More Info</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
                <div styles={{hidden}}>
                    Hello world
                </div>
            </div>

        </>
    )
}

export default MovieList
