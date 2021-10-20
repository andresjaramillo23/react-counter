//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";
import Button from "./component/button.jsx";

// let timerButton = document.getElementById("b2");

// timerButton.addEventListener("change", aqui);

// function aqui() {}

//render your react application
ReactDOM.render(
	<div>
		<Counter />
		<Button name="mula" />
	</div>,
	document.querySelector("#app")
);
