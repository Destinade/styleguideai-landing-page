import React from "react";
import "./GallerySection.css";

const GallerySection = () => {
	const galleryImages = [
		{
			src: "/images/image1.png",
			alt: "Fashion Collection 1",
			title: "Weather and Personal Calendar Integration",
		},
		{
			src: "/images/image2.png",
			alt: "Fashion Collection 2",
			title: "AI-Powered Style Recommendations",
		},
		{
			src: "/images/image3.png",
			alt: "Fashion Collection 3",
			title: "Engage with Fashion Icons and Seize the Opportunity to Become a Fashion Icon Yourself!",
		},
		{
			src: "/images/image4.png",
			alt: "Fashion Collection 4",
			title: "Rating Fashion Choices of Friends and Discovering the Latest Trends",
		},
	];

	return (
		<div className="gallery-content">
			<div className="gallery-grid">
				{galleryImages.map((image, index) => (
					<div key={index} className="gallery-item">
						<img
							src={image.src}
							alt={image.alt}
							className="gallery-image"
						/>
						<div className="gallery-overlay">
							<h3 className="gallery-item-title">
								{image.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GallerySection;
