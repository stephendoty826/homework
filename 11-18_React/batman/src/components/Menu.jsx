
import React, {useState} from 'react'
import Details from './Details';

function Menu({movieArray}) {

    const [movieDetails, setMovieDetails] = useState(null)

    const displayDetails = async (e) => {
        e.preventDefault()

        //url based on imdbID and make fetch call
        let url = `http://www.omdbapi.com/?i=${e.target.id}&apikey=c8ff0a0a`

        let details = await fetch(url)
        let detailsData = await details.json()

        setMovieDetails(detailsData)

    }

    return (
        <>
            <div className="flexCont">
                <ul className="flex">
                    {movieArray.map((movie, index)=>{
                        return (
                            <li className="nobullets" id={movie.imdbID} key={index}>
                                <a href="#" id={movie.imdbID} className="movieLinks" onClick={displayDetails}>
                                    <h5 id={movie.imdbID} className="h5">{movie.Title}</h5>
                                    <img id={movie.imdbID} src={movie.Poster} height="150px" alt=""/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {movieDetails === null ? "" : <Details details={movieDetails}/> }
                </ul>
            </div>
        </>
    )
}

export default Menu
