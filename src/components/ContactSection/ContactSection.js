import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message! We'll get back to you soon.");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="contact-content">
			<h1 className="contact-title">Get In Touch</h1>
			<p className="contact-subtitle">
				Ready to revolutionize your style? Let's start the conversation.
			</p>

			<div className="contact-container">
				<div className="contact-info">
					<h3>Contact Information</h3>
					<div className="contact-item">
						<span className="contact-icon">📧</span>
						<div>
							<h4>Email</h4>
							<p>hello@styleassistant.ai</p>
						</div>
					</div>
					<div className="contact-item">
						<span className="contact-icon">📱</span>
						<div>
							<h4>Phone</h4>
							<p>+1 (555) 123-4567</p>
						</div>
					</div>
					<div className="contact-item">
						<span className="contact-icon">📍</span>
						<div>
							<h4>Location</h4>
							<p>San Francisco, CA</p>
						</div>
					</div>
					<div className="social-links">
						<h4>Follow Us</h4>
						<div className="social-icons">
							<a
								href="https://facebook.com/styleassistant"
								className="social-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								📘
							</a>
							<a
								href="https://instagram.com/styleassistant"
								className="social-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								📷
							</a>
							<a
								href="https://twitter.com/styleassistant"
								className="social-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								🐦
							</a>
							<a
								href="https://linkedin.com/company/styleassistant"
								className="social-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								💼
							</a>
						</div>
					</div>
				</div>

				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
							className="form-input"
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							required
							className="form-input"
						/>
					</div>
					<div className="form-group">
						<textarea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={6}
							className="form-textarea"
						></textarea>
					</div>
					<button type="submit" className="form-submit">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactSection;
