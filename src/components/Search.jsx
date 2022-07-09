import React from "react";
import searchIcon from './images/search.svg';

const Search=({start, string, set})=>{

    return(
        <form>
            <div className="search-block">
                <div className="search-input">
                    <input type="text" placeholder="Search through GitHub repositories..." value={string} onChange={(e)=>set(e.target.value)}/>
                </div>
                <div className="search-btn">
                    <button  onClick={start} >
                        <img src={searchIcon} alt="Search"/>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search;