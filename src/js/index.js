//import React from "react";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";
import Button from "./component/button.jsx";

ReactDOM.render(
	<>
		<Counter />
	</>,
	document.querySelector("#app")
);
