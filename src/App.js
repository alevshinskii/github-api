import Search from "./components/Search";
import Results from "./components/Results";
import { useState } from "react";
import { Octokit } from "@octokit/core";


function App() {

  const [repos,setRepos]=useState([]);
  const [founded,setFounded]=useState(0);

  const [searchString,setSearchString] = useState("");


  const [message,setMessage] = useState("Type something to search");
  

  async function doSearch(e){
    e.preventDefault();

    setMessage("Search...");

    if(searchString){
      const octokit = new Octokit();
      const queryString = '?q=' + encodeURIComponent(searchString);
      try{
        const response = await octokit.request("GET /search/repositories"+queryString, {
          headers: {
            authorization: "0000000000000000000000000000000000000001",
          }
        });
        console.log(response);
        setFounded(response.data.total_count);
        setRepos(response.data.items);
        if(founded>0){
          setMessage("");
        }
        else{
          setMessage("Can't find anything. Try another string.");
        }
      }
      catch{
        setMessage("Something goes wrong. Please try again later.")
      }
    }
    else{
      setMessage("Your string is empty. Type something.")
    }

  }


  return (
    <div className="App">
      <div className="container">
        <Search start={doSearch} string={searchString} set={setSearchString}/>
        <Results repos={repos} founded={founded} message={message}/>
      </div>
    </div>
  );
}

export default App;
