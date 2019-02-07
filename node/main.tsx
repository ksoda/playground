import * as React from "react";
const { useState } = React;
import * as ReactDOM from "react-dom";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

console.log("Hello from tsx!");

ReactDOM.render(<Example />, document.querySelector("main"));
