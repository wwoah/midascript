import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <p>cole</p> <p>Welcome to MidasScript!</p> <p>phillip</p>
        </div>
        <div className="content-body">
          <div className="search">search bar and filters</div>
          <div className="center-console">console</div>
        </div>
        <div className="footer">footer</div>
      </div>
    </>
  );
}

export default App;
