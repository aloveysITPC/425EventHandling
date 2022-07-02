import React, { useState } from "react";

function App() {
  // jset the constant, set the function to use when changing state and set the starting state value useState starting text
  const [headingText, setHeadingText] = useState("Hello");
  const [bkgColor, changeColor] = useState(false);
  function handleClick() {
    console.log("clicked");
    // use the function declared to when state changes
    setHeadingText("Submitted");
  }
  function goBlack() {
    console.log("mouse over");
    changeColor(true);
    console.log({ bkgColor });
  }

  function goWhite() {
    changeColor(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: bkgColor ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={goBlack}
        onMouseOut={goWhite}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
