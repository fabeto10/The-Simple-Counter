//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
import { SimpleCounter } from "./component/SimpleCounter";

let counter = 0;

setInterval(() => {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
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
