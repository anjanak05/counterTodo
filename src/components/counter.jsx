import React, { Fragment } from "react";
import "../components/counter.css";

let Counter = ({ initialValue }) => {
  let [count, setCount] = React.useState(initialValue);
  
  let style1
  if( count%2 === 0){
     style1 ={
        color: "green"
      }
    }else{
        style1 ={
            color: "red"
          } 
    }

    
  // const increment = () =>{
  //     setCount(count+1);
  // console.log(count)
  // }

  // const decrement = () =>{
  //     setCount( count-1);
  //     console.log(count)
  // }

  return (
    <Fragment>

        
      <h1 style={style1}>Counter App: {count}</h1>
      <button
       
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        Double
      </button>
     
    </Fragment>
  );
};
export { Counter };
