
import React from 'react'
import { useNavigate } from "react-router-dom"

function IssueList({issuesArr}) {

    const navigate = useNavigate()

    const showDetails = async (e) => {
        navigate(`/issue/${e.target.id}`)
    }

    console.log(issuesArr);

    return (
        <div className="issueContainer">
            <div>
                {!issuesArr ? "" : issuesArr.map((issue, index) => {
                    return (
                        <div className="issueItem" key={index} id={issue.number} onClick={showDetails}>
                            <div className="issueTitle" id={issue.number} onClick={showDetails}>{issue.title}</div>
                            <span id={issue.number} onClick={showDetails}>#{issue.number} opened: {issue.created_at} by {issue.user.login}</span>
                        </div> 
                    )
                })}
            </div>
            
        </div>
    )
}

export default IssueList
