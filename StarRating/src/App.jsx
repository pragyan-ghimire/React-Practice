import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import './App.css'

function App({noOfStars = 5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

function handleClick(getCurrentIndex){
  // console.log(`${getCurrentIndex} is clicked`)
  // setRating(rating === getCurrentIndex? 0 : getCurrentIndex);
  setRating(getCurrentIndex);
}

function handleMouseMove(getCurrentIndex){
  setHover(getCurrentIndex);

}
function handleMouseLeave(getCurrentIndex){
// console.log("mouse leave")
  setHover(rating)
}

  return (
    <>
      <div className="star-rating">
        {
        [...Array(noOfStars)].map((e, index)=>{
          index ++;
            return <FaStar
            key={index}
            className={(index <= rating || index <= hover) && 'active' }
            onClick={()=>handleClick(index)}
            onMouseMove={()=>{handleMouseMove(index)}}
            onMouseLeave={()=>{handleMouseLeave(index)}}
            size={40}
            />
        })
        }
      </div>
    </>
  )
}

export default App
