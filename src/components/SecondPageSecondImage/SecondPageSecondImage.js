import React from "react";

const styles = {
	secondPageSecondImageContainer: {
		marginTop: "-25vh",
		marginLeft: "75vw",
		width: "10vw",
		height: "27vh",
		borderRadius: "8px",
		backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		maxWidth: "100%",
	},
};

const defaultProps = {
	image: "https://assets.api.uizard.io/api/cdn/stream/14304e62-afbc-4f0a-8c21-fdebd225af0d.png",
};

const SecondPageSecondImage = (props) => {
	return (
		<div
			style={{
				...styles.secondPageSecondImageContainer,
				backgroundImage: `url(${props.image ?? defaultProps.image})`,
			}}
		/>
	);
};

export default SecondPageSecondImage;
