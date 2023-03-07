import React, { useState } from "react";
import '../App.css'

function Product(props) {
  const[count,setCount]= useState(0);
  const increment = () => {
    setCount(count+1)
  }
  return (
      <div className="Product">
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <h2>{props.price}</h2>
        <h3>Likes : {count}</h3>
        <button onClick={increment}>Like</button>
      </div>

    );
  }

  export default Product;