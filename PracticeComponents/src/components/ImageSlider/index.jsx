import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

const apiBaseUrl = "https://picsum.photos/";
const ImageSlider = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [imgIndicator, setImageIndicator] = useState(0);

  async function getImageUrl() {
    try {
      const resp = await axios.get(`${apiBaseUrl}/v2/list?page=2&limit=5`);
    //   console.log(resp.data);
    setImgUrl(resp.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    getImageUrl();
  }, []);

  function showNext(){
    let cpyImgUrl = [...imgUrl];
    let popFirst = cpyImgUrl.shift();// return first element of array by removing it
    cpyImgUrl.push(popFirst);
    setImgUrl(cpyImgUrl);
    setImageIndicator(imgIndicator === imgUrl.length -1 ? 0 : imgIndicator + 1 )
  }
  function showPrevious(){
    let cpyImgUrl = [...imgUrl];
    let popLast = cpyImgUrl.pop();// return last element of array by removing it
    cpyImgUrl.unshift(popLast);
    setImgUrl(cpyImgUrl);
    setImageIndicator(imgIndicator === 0? imgUrl.length-1 : imgIndicator - 1 )
  }

  return <div className="wrapper">
    <button className="prev" onClick={showPrevious}>L</button>
    {
        imgUrl.map((image)=> {
            return <img key={image.id}  src={image.download_url} alt="image" />
        })
    }
    <button className="next" onClick={showNext}>R</button>
    <div className="indicator-box">
    {
        imgUrl.map((image,index)=>{
            return <div key={index}  className={imgIndicator === index? "indicator active":"indicator"  }></div>
        })
    }
    </div>
  </div>;
};

export default ImageSlider;
