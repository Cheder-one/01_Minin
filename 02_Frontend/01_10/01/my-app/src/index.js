import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const App = () => {
   return <Counter />;
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
