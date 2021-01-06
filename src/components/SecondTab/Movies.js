import React from 'react'
import MovieList from './MovieList'
import NoData from '../NoData'




export const Movies = ({movies}) => {
    

    

    return ( movies == null ? <NoData /> :
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            {movies.map((movie) => (
                <div>
                    
                   { movie.Poster == null ? <img src='https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png' alt='Movie Img'/> :
                    <MovieList movie={movie} /> 
                    }
                </div>    
            ))}
        </div>
    )
}
