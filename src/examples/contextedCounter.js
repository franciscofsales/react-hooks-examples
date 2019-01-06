import React, { useState, useContext } from "react";

// Create a Context
const CounterContext = React.createContext();

function Display() {
  const value = useContext(CounterContext);
  return (
    <div>
      <div>this is my count: {value}.</div>
    </div>
  );
}

// legacy way
/*
function Display() {
  return (
    <CounterContext.Consumer>
      {value => <div>this is my count: {value}.</div>}
    </CounterContext.Consumer>
  );
}

*/

export default function Counter({ setComponent }) {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <div className="App">
        <header className="App-header">
          <button
            rel="noopener noreferrer"
            onClick={() => setComponent("main")}
          >
            Back to menu
          </button>
          <Display />
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
    </CounterContext.Provider>
  );
}
