//import React from "react";
import ReactDOM from "react-dom";
import React from "react";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Counter from "./component/counter.jsx";

ReactDOM.render(
	<>
		<Counter />
	</>,
	document.querySelector("#app")
);
