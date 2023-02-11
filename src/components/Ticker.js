import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  // 2. create the ref and set its initial value to make prevPrice persist
  const prevPriceRef  = useRef(price)  //return an object {current: -25}

  useEffect(() => {
    // every 1 second, generate a new random price
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    // 3. use the current value of ref
    const prevPrice = prevPriceRef .current
    // 1. we need some way to get the prevPrice...
    if (price > prevPrice) {
      setColor("green")
    } else if (price < prevPrice) {
      setColor("Red")
    } else {
      setColor("black")
    }

    // 4. set the new value of the ref (note: this doesn't trigger a re-render)
    prevPriceRef .current = price
    
  }, [price])

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
