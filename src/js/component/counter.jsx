import React, { useState } from "react";

const Counter = props => {
	const [isRunning, setIsRunning] = useState(false);
	const [buttonState, setButtonState] = useState("Start Timer");
	const [tiempo, setTiempo] = useState("");
	const [timeleft, setTimeleft] = useState(10);

	const clickHandler = e => {
		runtimer(e);
	};

	function runtimer(e) {
		if (!e.checked) {
			setIsRunning(true);
			setButtonState("Stop Timer");
		} else {
			setIsRunning(false);
			setButtonState("Start Timer");
			setTimeleft(-1);
		}
	}

	if (isRunning) {
		let timer = new Timer(function() {
			if (timeleft == 0) {
				timer.start();
			}
			if (timeleft > 0) {
				setTiempo(timeleft + " seconds remaining");
				let papo = timeleft - 1;
				setTimeleft(papo);
			}
			if (timeleft == -1) {
				timer.stop();
			}
		}, 1000);

		// else {
		// 	timeleft = -1;
		// }
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
							onChange={clickHandler}
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
