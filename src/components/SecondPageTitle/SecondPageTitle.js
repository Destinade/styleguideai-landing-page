import React from "react";

const styles = {
	secondPageTitle: {
		marginTop: "5vh",
		marginLeft: "10vw",
		width: "25vw",
		color: "#000000",
		fontSize: "72px",
		fontFamily: "Poppins",
		fontWeight: 300,
		lineHeight: "102px",
	},
};

const defaultProps = {
	text: "What Makes Us Unique ?",
};

const SecondPageTitle = (props) => {
	return (
		<div style={styles.secondPageTitle}>
			{props.text ?? defaultProps.text}
		</div>
	);
};

export default SecondPageTitle;
