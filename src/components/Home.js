import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
        <div className="add-button">
            <Link to="/add" className="add-new">
                <i class="fa-solid fa-plus"></i>
                <span>Add New</span>
            </Link>
        </div>
    </>
  )
}

export default Home