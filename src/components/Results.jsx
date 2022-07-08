import React from "react";
import { useState } from "react";
import RepoItem from "./RepoItem";

const Results=({founded,repos,message})=>{

    return(
        <div className="results">

            {
                message?
                <h2>{message}</h2>
                :
                <div>
                    <h2>Results ({founded} founded)</h2>
                    {
                        repos.slice(0,10).map(repo=>
                                <RepoItem key={repo.id} item={repo}/>
                            )
                    }
                </div>
            }

        </div>
    )
}

export default Results;