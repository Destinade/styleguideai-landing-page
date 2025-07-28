import React from "react";

const styles = {
	secondPageSubtitle: {
		color: "#000000",
		fontSize: "56px",
		fontFamily: "Poppins",
		lineHeight: "95px",
		marginTop: "48vh",
		marginLeft: "10vw",
	},
};

const defaultProps = {
	text: "Let's Discover Together",
};

const SecondPageSubtitle = (props) => {
	return (
		<div style={styles.secondPageSubtitle}>
			{props.text ?? defaultProps.text}
		</div>
	);
};

export default SecondPageSubtitle;
