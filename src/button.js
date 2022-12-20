import React, { useState } from "react";
import "./App.css";


function Button() {
	const [color, setColor] = useState(0);
	const [colorVal, setColorVal] = useState("white");

	const changeColor = () => {
		setColor(color + 1);

		switch (color % 6) {
			case 0:
				setColorVal("red");
				break;
			case 1:
				setColorVal("orange");
				break;
			case 2:
				setColorVal("yellow");
				break;
			case 3:
				setColorVal("green");
				break;
			case 4:
				setColorVal("blue");
				break;
			case 5:
				setColorVal("purple");
		};

	};

	return (
		<button className={colorVal} onClick={changeColor}>Click me!</button>
	);
};

export default Button;