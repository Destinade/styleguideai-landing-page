import React from "react";
import "./UniqueSection.css";

const UniqueSection = () => {
	return (
		<div className="unique-content">
			{/* Title */}
			<div className="unique-title">What Makes Us Unique ?</div>

			{/* Subtitle */}
			<div className="unique-subtitle">Let's Discover Together</div>

			{/* Images Container */}
			<div className="images-container">
				{/* Main Image */}
				<div
					className="unique-main-image"
					style={{
						backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/7a54487c-043b-4f10-98cb-0cea570e78a5.png)`,
					}}
				/>

				{/* Second Image */}
				<div
					className="unique-second-image"
					style={{
						backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/14304e62-afbc-4f0a-8c21-fdebd225af0d.png)`,
					}}
				/>
			</div>
		</div>
	);
};

export default UniqueSection;
