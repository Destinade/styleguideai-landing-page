import React from "react";

const Image = (props) => {
	return (
		<div
			className={props.className}
			style={{
				backgroundImage: `url(${props.image})`,
			}}
		/>
	);
};

export default Image;
