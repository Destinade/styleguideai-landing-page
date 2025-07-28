import React from "react";

const styles = {
	secondPageImageContainer: {
		marginTop: "-67vh",
		marginLeft: "52vw",
		width: "34vw",
		height: "64vh",
		borderRadius: "8px",
		backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		maxWidth: "100%",
	},
};

const defaultProps = {
	image: "https://assets.api.uizard.io/api/cdn/stream/7a54487c-043b-4f10-98cb-0cea570e78a5.png",
};

const SecondPageImage = (props) => {
	return (
		<div
			style={{
				...styles.secondPageImageContainer,
				backgroundImage: `url(${props.image ?? defaultProps.image})`,
			}}
		/>
	);
};

export default SecondPageImage;
