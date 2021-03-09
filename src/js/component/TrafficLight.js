import React, { useState } from "react";

export function TrafficLight() {
	const [select, setSelect] = useState("");
	let redClass = "";
	let yellowClass = "";
	let greenClass = "";

	if (select == "red") redClass = "selected";
	if (select == "yellow") yellowClass = "selected";
	if (select == "green") greenClass = "selected";
	//console.log(select);
	return (
		<>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + redClass}
					onClick={() => setSelect("red")}></div>
				<div
					className={"yellow light " + yellowClass}
					onClick={() => setSelect("yellow")}></div>
				<div
					className={"green light " + greenClass}
					onClick={() => setSelect("green")}></div>
			</div>
		</>
	);
}
