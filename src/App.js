import React, { useEffect, useState } from 'react';
import './App.css';
import { createBrowserHistory } from "history";
let history = createBrowserHistory();

function App() {

  const [x, setX] = useState(1);

  const click = () => {
    console.log(history);
    console.log(history.push);
    console.log(history === window.history);
    if(x % 5 === 6) {
      history.push("/home" + x, { some: "state" });
    }
    setX(x + 1);
  }

  return (
    <div>
      Hello World
      <button onClick={click}>Click + {x}</button>
    </div>
  );
}

export default App;
