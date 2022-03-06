import React from 'react'
import { Link } from "react-router-dom";
import ListCard from './ListCard';

function Home() {
  return (
    <>
        <div className="add-button">
            <Link to="/add" className="add-new">
                <i className="fa-solid fa-plus"></i>
                <span>Add New</span>
            </Link>
        </div>
        <div className="card-container">
          <ListCard />
        </div>
    </>
  )
}

export default Home