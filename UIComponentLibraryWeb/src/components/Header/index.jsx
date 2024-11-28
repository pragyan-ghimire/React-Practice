import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import './styles.css'
const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Yt2YOwXRwaU839P7_tNgW4B8C_QfjGVb9w&s" alt="" />
        </div>
        <div className="home-links">
            <a href="#">OFarm App</a>
            <a href="#">Resources</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
        </div>
        <div className='home-actions'>
          <form action="" method="post">
            <div className="search-icon"><CiSearch /></div>
            <input type="text" placeholder='Search' className="search-bar" />
          </form>
          <div className="user"><CiUser /></div>
        </div>
    </header>
  )
}

export default Header
