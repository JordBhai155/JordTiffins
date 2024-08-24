import React, { useState } from "react";

function Faq(props) {
    const [rotation,setRotation]= useState(false)
    const handleRotation = ()=>{
        setRotation((prevState=> !prevState))
    }
  return (
    <>
      <div className="faq">
        <div className="question">
         {props.question}
         
          <span className={`${rotation?"cross":"plus"}`} onClick={handleRotation}>+</span>
        </div>
        <div className={`answer ${rotation?"flex":"none"}`}>
          {props.answer}
          
        </div>
      </div>
    </>
  );
}

export default Faq;
