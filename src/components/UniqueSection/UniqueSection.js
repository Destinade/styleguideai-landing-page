import React from "react";
import SecondPageTitle from "../SecondPageTitle/SecondPageTitle";
import SecondPageSubtitle from "../SecondPageSubtitle/SecondPageSubtitle";
import SecondPageImage from "../SecondPageImage/SecondPageImage";
import SecondPageSecondImage from "../SecondPageSecondImage/SecondPageSecondImage";

const UniqueSection = () => {
	return (
		<div className="unique-content">
			<SecondPageTitle />
			<SecondPageSubtitle />
			<div className="images-container">
				<SecondPageImage />
				<SecondPageSecondImage />
			</div>
		</div>
	);
};

export default UniqueSection;
