import React from 'react'

const SearchBar = ({search, setSearch,setYear,year,getMovies}) => {
    const handleMovies = () => {
        getMovies();
        setSearch("");
        setYear("");
      };
     
     function handleClick(e) {
       
        
       alert("Please enter Movie Name and Year Both");

     }
      

    return (
        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
            <div style={{marginRight:'10px'}}>
            {/*Input for Movie Name*/}
            <input placeholder='enter movie name..' 
            value={search} 
            name='mname'
            onChange={(event) => setSearch(event.target.value)}
            required />
            </div>
             {/*Input for Movie Year*/}
            <div>
            <input  placeholder='enter movie year..'
            value={year} 
            id='myear'
            onChange={(event) => setYear(event.target.value)}
             required />
            </div>
            <div>
                <button onClick={(()=>{
                    if(document.getElementById('myear').value === '' ){
                        handleClick();
                    } else {
                        handleMovies();
                    }
                })} id="submitbutton" type="submit">Search</button>
                
            </div>
        </div>
    )
}

export default SearchBar
