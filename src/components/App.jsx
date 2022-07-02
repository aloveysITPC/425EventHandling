import React, { useState } from "react";

function App() {
  // jset the constant, set the function to use when changing state and set the starting state value useState starting text
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick() {
    console.log("clicked");
    // use the function declared to when state changes
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
