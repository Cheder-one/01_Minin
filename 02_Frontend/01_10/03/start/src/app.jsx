import React from "react";
import "./app.css";
import Page from "./page";
import Navbar from "./navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="App">
        <Page />
      </div>
    </>
  );
};

export default App;
