
import React from 'react'

function Details({details}) {
    return (
        <>
            <div className="details">
                <h3>{details.Title ? details.Title : ""}</h3>
                <img src={details.Poster ? details.Poster: ""} alt="" height=""/>
                <h5>Directed By: {details.Director ? details.Director : ""}</h5>
                <h5>Released: {details.Released ? details.Released : ""}</h5>
                <h5>Year: {details.Year ? details.Year : ""}</h5>
                <p>{details.Plot ? details.Plot : ""}</p>
            </div>
        </>
    )
}

export default Details
