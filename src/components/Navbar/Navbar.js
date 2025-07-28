import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<h2>Style Assistant</h2>
			</div>

			<div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
				<button
					onClick={() => scrollToSection("home")}
					className="navbar-link"
				>
					Home
				</button>
				<button
					onClick={() => scrollToSection("unique")}
					className="navbar-link"
				>
					What Makes Us Unique
				</button>
				<button
					onClick={() => scrollToSection("gallery")}
					className="navbar-link"
				>
					Gallery
				</button>
				<button
					onClick={() => scrollToSection("contact")}
					className="navbar-link"
				>
					Contact
				</button>
			</div>

			<div
				className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
