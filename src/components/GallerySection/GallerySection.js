import React from "react";
import "./GallerySection.css";

const GallerySection = () => {
	const galleryImages = [
		{
			src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&crop=center",
			alt: "Fashion Collection 1",
			title: "Elegant Evening Wear",
		},
		{
			src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop&crop=center",
			alt: "Fashion Collection 2",
			title: "Casual Street Style",
		},
		{
			src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=600&fit=crop&crop=center",
			alt: "Fashion Collection 3",
			title: "Professional Attire",
		},
		{
			src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop&crop=center",
			alt: "Fashion Collection 4",
			title: "Summer Collection",
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
