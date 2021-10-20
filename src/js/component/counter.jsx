import React from "react";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<div className="container">
			<div className="row justify-content-md-center">
				<div className="col-6">
					<div className="far fa-clock fa-7x"></div>
				</div>
				<div className="col-1">
					<span>{props.time}</span>
				</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	time: PropTypes.string
};

export default Counter;
