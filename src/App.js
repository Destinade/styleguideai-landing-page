import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import HomeSection from "./components/HomeSection/HomeSection";
import UniqueSection from "./components/UniqueSection/UniqueSection";
import GallerySection from "./components/GallerySection/GallerySection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
	return (
		<div className="App">
			<Navbar />

			{/* Home Section with consolidated content */}
			<Section id="home" background="gradient">
				<HomeSection />
			</Section>

			{/* What Makes Us Unique Section */}
			<Section id="unique" background="white">
				<UniqueSection />
			</Section>

			{/* Gallery Section */}
			<Section id="gallery" background="gradient">
				<GallerySection />
			</Section>

			{/* Contact Section */}
			<Section id="contact" background="white">
				<ContactSection />
			</Section>
		</div>
	);
}

export default App;
