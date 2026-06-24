import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import "./Contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://portfolio-backend-xzdm.onrender.com/contact";

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
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <Motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}>
        Contact Me
      </Motion.h2>

      <Motion.p className="contact-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
        Feel free to reach out for backend development, Java projects, or software opportunities.
      </Motion.p>

      <Motion.form onSubmit={handleSubmit} className="contact-form" initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>

        <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" value={formData.name}
          onChange={handleChange} required />

        <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" value={formData.email}
          onChange={handleChange} required />

        <textarea name="message" placeholder="Your Message" aria-label="Your Message" value={formData.message}
          onChange={handleChange} required />

        <Motion.button type="submit" disabled={loading} whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {loading ? "Sending..." : "Send Message"}
        </Motion.button>
      </Motion.form>

      {status && (
        <Motion.p className="status-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {status}
        </Motion.p>
      )}

      <Motion.div className="contact-info" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <a href="mailto:parthlad153@gmail.com" className="icon-email" aria-label="Email Parth Lad"><FaEnvelope /></a>
        <a href="tel:+918446723980" className="icon-phone" aria-label="Call Parth Lad"><FaPhone /></a>
        <a href="https://www.linkedin.com/in/parth-lad153" target="_blank" rel="noopener noreferrer"
          className="icon-linkedin" aria-label="Visit Parth Lad on LinkedIn"><FaLinkedin /></a>
      </Motion.div>
    </section>
  );
}

export default Contact;
