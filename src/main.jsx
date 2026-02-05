import { createRoot } from "react-dom/client";
import "./style.css"
import React from "react";
import App from "./App";
import ThemeProvider from "./Context API/context/ThemeProvider";
// let element2 = React.createElement("header",null,React.createElement("nav",{id:"one"},
// React.createElement("section",null,"HOME"),
// React.createElement("section",null,"ABOUT"),
// React.createElement("section",null,"CONTACT")))
// let element = React.createElement("section",null,
// React.createElement("div",null,
// React.createElement("h1",{id:"one"},"The King"),
// React.createElement("h1",{id:"two"},"Virat Kohli")))
// let element1 = React.createElement("section",null,
// React.createElement("div",null,
// React.createElement("h1",{id:"one"},"The King"),
// React.createElement("h1",{id:"two"},"Virat Kohli")))
createRoot(document.getElementById("root")).render(
   <App/>
)
