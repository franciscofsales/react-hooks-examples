import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./examples/counter";
import TitledCounter from "./examples/titledCounter";
import ContextedCounter from "./examples/contextedCounter";
import ReducedCounter from "./examples/reducedCounter";
import CustomHook from "./examples/customHook";

const components = [
  {
    value: "counter",
    label: "Counter (useState)",
    component: Counter
  },
  {
    value: "titledcounter",
    label: "Titled Counter (useEffect)",
    component: TitledCounter
  },
  {
    value: "contextedcounter",
    label: "Contexted Counter (useContext)",
    component: ContextedCounter
  },
  {
    value: "reducedcounter",
    label: "Reduced Counter (useReducer)",
    component: ReducedCounter
  },
  {
    value: "customhook",
    label: "Custom Hook",
    component: CustomHook
  }
];

const renderComponent = (component, setComponent) => {
  if (component === "main") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Hooks Examples</p>
          {components.map(comp => (
            <button
              key={comp.value}
              className="component-button"
              onClick={() => setComponent(comp.value)}
            >
              {comp.label}
            </button>
          ))}
        </header>
      </div>
    );
  }

  const Comp = components.find(cmp => cmp.value === component);
  return <Comp.component setComponent={setComponent} />;
};

export default function App() {
  const [component, setComponent] = useState("main");
  return <Fragment>{renderComponent(component, setComponent)}</Fragment>;
}
