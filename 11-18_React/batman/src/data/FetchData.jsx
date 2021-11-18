
import {useState, useEffect} from 'react'

function FetchData() {

    const [movieData, setMovieData] = useState([])

    const fetchData2 = async () => {
        let results = await fetch("http://www.omdbapi.com/?s=batman&apikey=c8ff0a0a")
        let data = await results.json()

        setMovieData(data.Search)

    }
    
    useEffect(() => {
        fetchData2()
    }, [])
    
    console.log(movieData);
    
    return movieData
}

export default FetchData