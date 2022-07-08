import React from "react";

const Search=({start, string, set})=>{

    return(
        <form className="search">
            <input type="text" placeholder="Search in GitHub repositories..." value={string} onChange={(e)=>set(e.target.value)}/>
            <button onClick={start}>
                <img src="/images/search.svg" alt="Search" />
            </button>
        </form>
    )
}

export default Search;