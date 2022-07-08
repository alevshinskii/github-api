import React from "react";

const Search=({start, string, set})=>{

    return(
        <form>
            <div className="search-block">
                <div className="search-input">
                    <input type="text" placeholder="Search through GitHub repositories..." value={string} onChange={(e)=>set(e.target.value)}/>
                </div>
                <div className="search-btn">
                    <button  onClick={start} >
                        <img src="/images/search.svg" alt="Search" />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search;