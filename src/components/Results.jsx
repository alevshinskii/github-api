import React from "react";
import { useState } from "react";
import RepoItem from "./RepoItem";

const Results=({founded,repos})=>{

    return(
        <div className="results">
            <h2>Results ({founded} founded)</h2>
            {
                repos.map(repo=>
                        <RepoItem key={repo.id} item={repo}/>
                    )
            }
        </div>
    )
}

export default Results;