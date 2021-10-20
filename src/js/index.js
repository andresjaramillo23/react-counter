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

let now = 12;
let timeleft = 10;

const clickHandler = e => {
	runtimer(e);
};

function runtimer() {
	let timer = new Timer(function() {
		if (timeleft == 0) {
			timer.stop();
		}
		timeleft -= 1;
		now = timeleft + " seconds remaining";
	}, 1000);
}

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

ReactDOM.render(
	<div>
		<Counter time={timeleft} />
		<Button name="Time Start" function={clickHandler} />
	</div>,
	document.querySelector("#app")
);
