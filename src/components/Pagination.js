import React from 'react'

const Pagination = ({postPerPage, totalPosts,paginate}) => {
    const pageNumber= [];
  //Counting Number of pages
    for(let i=1; i<=Math.ceil(totalPosts / postPerPage); i++){
        pageNumber.push(i);
    }
    return (
        <nav style={{display:'flex',justifyContent:'center'}}>
            <ul className="pagination">
                {pageNumber.map(number => (
                        <li key={number} className='page-item'> 
                            <button onClick={() =>paginate(number)}  className='page-Link'>
                                {number}
                            </button>
                        </li>
                ))}
                
            </ul>
        </nav>
    )
}

export default Pagination
