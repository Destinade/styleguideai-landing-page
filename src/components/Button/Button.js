import React from "react";
import "./Button.css";

const defaultProps = {
	label: "Find Your Best Fit",
};

const Button = (props) => {
	return (
		<button className="button">{props.label ?? defaultProps.label}</button>
	);
};

export default Button;
