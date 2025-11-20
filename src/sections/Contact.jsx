import React, { useState } from "react";
import "./Contact.css"; // your CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // success/error message
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://portfolio-backend-xzdm.onrender.com/contact"; // replace with your deployed URL later

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for projects or just a friendly hello 👋</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} 
        onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} 
        onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} 
        onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}

      <div className="contact-info">
        <p>Email: parthlad153@gmail.com</p>
        <p>Phone: +91-8446723980</p>
        <p>
          <a href="https://www.linkedin.com/in/parth-lad153" target="_blank" 
          rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
