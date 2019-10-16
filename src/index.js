import React from "react";
import ReactDOM from "react-dom";
import publications from "./assets/publications.json";
import Reader from "./components/Reader/Reader";

ReactDOM.render(
  <Reader items={publications} />,
  document.getElementById("root")
);
