
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

let count = 0

function Issue() {

    const [issueData, setIssueData] = useState([])

    const {issue_number} = useParams()

    useEffect(()=>{
        console.log("inside useEffect()");
        const showDetails = async () => {
            console.log("inside fetch function")
            let url = `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
    
            let results = await fetch(url)
            let issueDetails = await results.json()
    
            setIssueData(issueDetails)

            console.log("fetch issueData", issueData)
            console.log("fetch issueData.user",issueData.user)
        }

        console.log("useEffect issueData", issueData)
        console.log("useEffect issueData.user",issueData.user)

        showDetails()
    }, [])

    console.log("top-level issueData", issueData)
    console.log("top-level issueData.user",issueData.user)

    count ++

    console.log(count);

    return (
        <>
            <div className="detailsContainer">{console.log("div", issueData)}
                <span className="detailsTitle">{issueData ? issueData.title : ""}</span>
                <span>#{issueData ? issueData.number : ""}</span>
                {/* <div><a href={issueData ? issueData.user.html_url : ""} target="_blank">{issueData ? issueData.user.login : ""}</a> opened this issue at {issueData ? issueData.created_at : ""}</div> */}
                <div className="detailsBody">{issueData ? issueData.body : ""}</div>
            </div>
        </>
    )
    
}

export default Issue
