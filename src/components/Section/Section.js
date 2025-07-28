import React from "react";
import "./Section.css";

const Section = ({ id, className, background = "white", children }) => {
	const sectionClass = `section ${className || ""} ${background}`;

	return (
		<section id={id} className={sectionClass}>
			<div className="section-content">{children}</div>
		</section>
	);
};

export default Section;
