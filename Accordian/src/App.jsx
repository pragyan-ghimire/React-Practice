import { useState } from "react";
import "./App.css";
import quizData from "./data";




function App() {
  const[selectMultiple, setSelectMultiple] = useState([]) // for multiple selection
  const [activeId, setActiveId] = useState(null); // for single selection
  const [enableMultiple, setEnableMultiple] = useState(false);

  function handleClick(id) {
    setActiveId((prevValue)=>{
      return prevValue === id? "null" : id
    });
  }
  function handleMultipleSelection(getCurrentId){
      let cpyMultiple = [...selectMultiple];
      const findIndexOf = cpyMultiple.findIndex((id) => id=== getCurrentId);
      if(findIndexOf === -1){
        cpyMultiple.push(getCurrentId);
      }else{
        cpyMultiple.splice(findIndexOf,1);
      }
      // console.log(cpyMultiple);
      setSelectMultiple(cpyMultiple);
  }
 
  function CreateAccordian(props){
    return <div className="sub-container">
    <div>
      <p className="question">{props.question}</p>
    {
      enableMultiple? 
      selectMultiple.includes(props.id) && <p>{props.answer}</p>:
      activeId === props.id && <p>{props.answer}</p>
    }
    </div>
    <button
      onClick={() => {
        if(enableMultiple){
          handleMultipleSelection(props.id)
        }else{
          handleClick(props.id);
        }
      }}
    >
      +
    </button>
  </div>
  }
  
  return (
    <>
      <div className="container">
        <h1>How accordian works?</h1>
        <button className="changeMulti" onClick={()=>{setEnableMultiple(!enableMultiple); setSelectMultiple([])}}>
         {enableMultiple? "Disable multiple":"Enable multiple" }
        </button>
        {quizData.map((data, index) => {
          return (
            <CreateAccordian key={index} id={data.id} question={data.question} answer={data.answer} />
          );
        })}
      </div>
    </>
  );
}

export default App;
