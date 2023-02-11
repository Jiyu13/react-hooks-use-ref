// Accessing DOM Elements

import React, { useRef } from "react";

function Box() {
  // 1. create the ref using the useRef hook to use it on a DOM element
  const elementRef = useRef();

  // 3. access info about that DOM element in our component:
  // getBoundingClientReact returns a DOMReact obj with info about the size of an element and its position relative to the viewport
  function handleMeasureClick() {
    const div = elementRef.current
    console.log("Measurements: ", div.getBoundingClientRect())
  }

  return (
    // 2. attach the ref to a DOM element by adding a special ref attritube to JSX element
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;
