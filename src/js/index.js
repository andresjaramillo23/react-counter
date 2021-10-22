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

let timeleft = 10;

const clickHandler = e => {
	runtimer(e);
};

function Timer(fn, t) {
	var timerObj = setInterval(fn, t);

	this.stop = function() {
		if (timerObj) {
			clearInterval(timerObj);
			timerObj = null;
		}
		return this;
	};

	this.start = function() {
		if (!timerObj) {
			this.stop();
			timerObj = setInterval(fn, t);
		}
		return this;
	};

	this.reset = function(newT = t) {
		t = newT;
		return this.stop().start();
	};
}

function runtimer(e) {
	if (!e.checked) {
		let timer = new Timer(function() {
			if (timeleft == 0) {
				timeleft = 10;
			}
			if (timeleft > 0) {
				ReactDOM.render(
					<Counter time={timeleft + " seconds remaining"} />,
					document.querySelector("#app")
				);
				timeleft -= 1;
			}
			if (timeleft == -1) {
				timer.stop();
			}
		}, 1000);
	}
	// else {
	// 	timeleft = -1;
	// }
}

ReactDOM.render(
	<Button name="Time Start" function={clickHandler} />,
	document.querySelector("#app")
);
