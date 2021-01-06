import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import { Movies } from "./components/SecondTab/Movies";
import SearchBar from "./components/SearchBar";
import Homepage from './Homepage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstTab from "./components/FirstTab/FirstTab";
import Pagination from "./components/Pagination";


//storing API key and BaseURl in Variables
const baseUrl = "https://www.omdbapi.com/";
const APIkey = "7a336e41";

function App() {
  
  //For storing Movie Object
  const [movies, setmovies] = useState([]);
  //For searching Movie
  const [search, setSearch] = useState("");
  //For Searching year
  const [year, setYear] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage] = useState(5);



  //fetch using Movie_Name and Movie_Year
  const getMovies = async () => {
    const url = `${baseUrl}?s=${search}&y=${year}&apikey=${APIkey}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson) {
      setmovies(responseJson.Search);
      
    } 
    
    
  };
  

    
  //Get Current Page
   const indexOfLastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;
   const currentPost = movies.slice(indexOfFirstPost,indexOfLastPost);

   //Change Page
   const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    //Routing Pages
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/SecondTab">
          <div style={{}}>
            <div
              style={{
                background: "black",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div>
                <Heading heading="Movies" />
              </div>

              <div>
                <SearchBar
                  search={search}
                  setSearch={setSearch}
                  year={year}
                  setYear={setYear}
                  getMovies={getMovies}
                  movies={movies}
                />
              </div>
            </div>
            <div>
              <Movies movies={currentPost} />
              <Pagination postPerPage={postPerPage} totalPosts={movies.length} paginate={paginate}/>
            </div>
          </div>
        </Route>
        <Route exact path="/FirstTab">
        <div style={{}}>
            <div
              style={{
                background: "black",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div>
                <Heading heading="Movies" />
              </div>

              <div>
                <SearchBar
                  search={search}
                  setSearch={setSearch}
                  year={year}
                  setYear={setYear}
                  getMovies={getMovies}
                  movies={movies}
                />
              </div>
            </div>
            <div>
              <FirstTab movies={movies} />
              <Pagination postPerPage={postPerPage} totalPosts={movies.length} paginate={paginate} />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
