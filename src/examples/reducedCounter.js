import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "ACTION/INCREMENT":
      return { count: state.count + action.payload };
    case "ACTION/DECREMENT":
      return { count: state.count - action.payload };
    case "ACTION/RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter({ setComponent }) {
  const [state, dispatch] = useReducer(reducer, initialState, {
    type: "ACTION/RESET"
  });
  return (
    <div className="App">
      <header className="App-header">
        <button rel="noopener noreferrer" onClick={() => setComponent("main")}>
          Back to menu
        </button>
        <p>this is my count: {state.count}</p>
        <button
          className="component-button"
          rel="noopener noreferrer"
          onClick={() => dispatch({ type: "ACTION/INCREMENT", payload: 1 })}
        >
          Increment
        </button>
        <button
          className="component-button"
          rel="noopener noreferrer"
          onClick={() => dispatch({ type: "ACTION/DECREMENT", payload: 1 })}
        >
          Decrement
        </button>
      </header>
    </div>
  );
}
