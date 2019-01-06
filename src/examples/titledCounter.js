import React, { useState, useEffect } from "react";

export default function Counter({ setComponent }) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate -> management of side-effects:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Counter Value is ${count}`;
  });

  // would translate to:
  /*
  componentDidMount() {
    document.title = `Counter Value is ${count}`;
  }

  componentDidUpdate() {
    document.title = `Counter Value is ${count}`;
  }
  */


  return (
    <div className="App">
      <header className="App-header">
        <button
          rel="noopener noreferrer"
          onClick={() => setComponent("main")}
        >
          Back to menu
        </button>
        <p>this is my count: {count}</p>
        <button
          className="component-button"
          rel="noopener noreferrer"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="component-button"
          rel="noopener noreferrer"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </header>
    </div>
  );
}
