import React, { useState } from "react";

const Counter = props => {
	const [isRunning, setIsRunning] = useState(true);
	const [buttonState, setButtonState] = useState("Start Timer");
	const [tiempo, setTiempo] = useState("");
	const [parar, setParar] = useState(false);
	let runner = 10;

	function runtimer() {
		if (isRunning) {
			setIsRunning(false);
			setButtonState("Stop Timer");
			let timer = new Timer(function() {
				if (runner == 0) {
					runner = 10;
				} else if (runner > 0) {
					setTiempo(runner + " seconds remaining");
					runner -= 1;
				} else {
					timer.stop();
					setTiempo("");
				}

				if (parar) {
					timer.stop();
					setTiempo("");
				}
			}, 1000);
		} else {
			setButtonState("Start Timer");
			setIsRunning(true);
			runner = -1;
			setParar(true);
		}
	}

	return (
		<>
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-6">
						<div className="far fa-clock fa-7x"></div>
					</div>
					<div className="col-1">
						<span>{tiempo}</span>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col">
						<input
							type="checkbox"
							className="btn-check"
							id="b2"
							checked
							autoComplete="off"
							onChange={() => runtimer()}
						/>
						<label
							id="label"
							className="btn btn-primary"
							htmlFor="b2">
							{buttonState}
						</label>
					</div>
				</div>
			</div>
		</>
	);
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


export default Counter;
