import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";
import Console from "./components/Console";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="content-body">
          <div className="search">
            <Search />
          </div>
          <div className="center-console">
            <Console />
          </div>
        </div>
        <div className="w-full border border-yellow-500">a</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
