import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

const Heading = () => {
  const [resBtn, setResBtn] = useState(false)
  function onToggle(){
    setResBtn(!resBtn);
  }
  return (
    <header>
      <div className="logo-search">
        <img src="/vite.svg" alt="logo" />
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input type="text" className="search-box" placeholder="Search" />
      </div>
      <div className="links" style={resBtn?{top:"80px"}:{top:"-500px"}}>
        <div className="home-links">
          <a href="#">Guide</a>
          <a href="#">Config</a>
          <a href="#">Plugins</a>
          <a href="#">Resources</a>
          <a href="#">Version</a>
        {/* <button className="close-btn">
          <CloseIcon/>
        </button> */}
        
        <div className="social-icons">
        |
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookRoundedIcon />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon />
          </a>
        </div>
        </div>
      </div>
      <button className="res-icon open-btn" onClick={onToggle}>
      {resBtn? <CloseIcon/>:<MenuIcon />}
      </button>
    </header>
  );
};

export default Heading;
