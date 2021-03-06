import React from "react";
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
                    <table>
                        <thead>
                            <tr className="table-head">
                                <td className="item-id">
                                    ID
                                </td>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Owner
                                </td>
                                <td>
                                    <span className="desktop">Description</span><span className="mobile">Desc</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                repos.slice(0,10).map(repo=>
                                        <RepoItem key={repo.id} item={repo}/>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

export default Results;