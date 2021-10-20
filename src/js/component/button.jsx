import React from "react";
import PropTypes from "prop-types";

const Button = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<input
						type="checkbox"
						className="btn-check"
						id="b2"
						checked
						autoComplete="off"
					/>
					<label id="label" className="btn btn-primary" htmlFor="b2">
						{props.name}
					</label>
				</div>
			</div>
		</div>
	);
};

Button.propTypes = {
	name: PropTypes.string
};

export default Button;
