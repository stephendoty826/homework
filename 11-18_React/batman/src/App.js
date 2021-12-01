
import React, {useState, useEffect} from 'react'
import Menu from './components/Menu'
import "./App.css"

function App() {

  const [movieData, setMovieData] = useState([])

  // use Effect with an emtpy array for second parameter runs only once, like componentDidMount
  useEffect(()=>{

    const fetchData = async () => {
      let url = "http://www.omdbapi.com/?s=batman&apikey=c8ff0a0a"
      
      let results = await fetch(url)
      
      let data = await results.json()

      setMovieData(data.Search)
    }
    
    fetchData()

  }, [])

  return (
    <>
      <Menu movieArray={movieData}/>
    </>
  )
}

export default App
