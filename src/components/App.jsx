import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// const renderConditionally = (check) => {
//   if (check) return <h1>Hello</h1>;
//   else {
//     return <Login />;
//   }
// };
const cTime = new Date().getHours();

console.log(cTime);

function App() {
  return (
    <div className="container">
      {
        isLoggedIn ? <h1>Hello</h1> : <Login />

        //use of && operator in React........
        // cTime < 12 && <h1>Go for a Run now </h1>
      }
    </div>
  );
}

export default App;
