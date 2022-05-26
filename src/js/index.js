//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
import PropTypes from "prop-types";

const SimpleCounter = (props) => {
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

let counter = 0;

setInterval(() => {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	ReactDOM.render(
		<SimpleCounter
			digitOne={one % 10}
			digitTwo={two % 10}
			digitThree={three % 10}
			digitFour={four % 10}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
