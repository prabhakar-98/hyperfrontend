import React from 'react'
import { Link } from "react-router-dom";

function Card({ id, title}) {

    return (
        <Link to={`/content/${id}}`} className="card-link">
 <div className="post">
    <h2 className="post-title">{title}</h2>
  
  </div>
        </Link>
      );
}

export default Card