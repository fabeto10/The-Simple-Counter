import React from "react";
import PropTypes from "prop-types";

export const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div style={{ borderRadius: "30px" }} className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div style={{ borderRadius: "30px" }} className="four">
				{props.digitFour}
			</div>
			<div style={{ borderRadius: "30px" }} className="three">
				{props.digitThree}
			</div>
			<div style={{ borderRadius: "30px" }} className="two">
				{props.digitTwo}
			</div>
			<div style={{ borderRadius: "30px" }} className="one">
				{props.digitOne}
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
