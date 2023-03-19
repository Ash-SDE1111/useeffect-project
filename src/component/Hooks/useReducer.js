import React, { useState} from "react";
import "./style.css";

const useReducer = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);
  useReducer(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </> 
  );
};

export default useReducer;
