import React from "react";
import {Link} from 'react-router-dom'

const Homepage = () => {
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <nav>
        <ul>
          <li>
            <Link to="/FirstTab">First Tab</Link>
          </li>
          <li>
            <Link to="/SecondTab">SecondTab</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Homepage;
