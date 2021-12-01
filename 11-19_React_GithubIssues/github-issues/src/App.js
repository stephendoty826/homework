
import React, {useState, useEffect} from 'react'
import IssueList from './components/IssueList'
import Issue from './components/Issue';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  const [issuesArr, setIssuesArr] = useState()

    // with empty array as second parameter, useEffect() is like componentDidMount() and runs 1x
    useEffect(()=>{
        
        const fetchData = async () => {
            let url = "https://api.github.com/repos/facebook/create-react-app/issues"

            let results = await fetch(url)
            let issueData = await results.json()

            setIssuesArr(issueData)
        }

        fetchData()

    }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IssueList issuesArr={issuesArr}/>} />
          <Route path="/issue/:issue_number" element={<Issue />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
