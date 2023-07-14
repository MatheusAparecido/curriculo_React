import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/app.css";

function App() {
  const [content, setContent] = useState("Select your Language");

  const handleClick = () => {
    const newContent =
      content === "Select your Language"
        ? "Selecione seu Idioma"
        : "Select your Language";
    setContent(newContent);
  };
  return (
    <div id="app">
      <div id="divLanguage">
        <label id="language">{content} </label>
        <button id="btn_language" onClick={handleClick}>
          &#10148;
        </button>
      </div>
      <div id="divButtons">
        <Link to={"/english"}>
          <button id="btn_english"></button>
        </Link>

        <Link to={"/portuguese"}>
          <button id="btn_portuguese"></button>
        </Link>
      </div>
    </div>
  );
}

export default App;
