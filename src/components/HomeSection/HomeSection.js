import React from "react";
import "./HomeSection.css";

const HomeSection = () => {
	return (
		<div className="home-content">
			{/* Main title */}
			<div className="home-title">Style Assistant</div>

			{/* Subtitle */}
			<div className="home-subtitle">Through Al Innovation</div>

			{/* Call to action button */}
			<button className="home-button">Find Your Best Fit</button>

			{/* Main style assistant image */}
			<div
				className="home-main-image"
				style={{
					backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/0eb430b5-14b1-46a6-b6f6-72896d782dfa.png)`,
				}}
			/>

			{/* Get Dressed text and image */}
			<div className="home-get-dressed-text">Get Dressed</div>
			<div
				className="home-get-dressed-image"
				style={{
					backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/c441d916-9fee-46ce-bb67-e0964d915ebd.png)`,
				}}
			/>

			{/* Get Noticed text and image */}
			<div className="home-get-noticed-text">Get Noticed</div>
			<div
				className="home-get-noticed-image"
				style={{
					backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/07e88047-38fc-40c0-aa27-d5f0bb5c71f7.png)`,
				}}
			/>
		</div>
	);
};

export default HomeSection;
