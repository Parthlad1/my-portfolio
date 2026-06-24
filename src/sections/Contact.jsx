import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import './Contact.css';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = async (event) => {
    event.preventDefault(); setLoading(true); setStatus('');
    try {
      const response = await fetch('https://portfolio-backend-xzdm.onrender.com/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (response.ok) { setStatus('Message sent successfully.'); setFormData({ name: '', email: '', message: '' }); } else setStatus(data.message || 'Unable to send your message.');
    } catch (error) { console.error(error); setStatus('Something went wrong. Please try again.'); }
    setLoading(false);
  };
  return (
    <section id="contact" className="contact-section"><div className="section-shell contact-layout">
      <Motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}><p className="section-kicker">05 / Contact</p><h2 className="section-heading">Let&apos;s build something dependable.</h2><p className="section-intro">Have a Java, backend, or software engineering opportunity in mind? I&apos;d be glad to hear about it.</p><div className="contact-links"><a href="mailto:parthlad153@gmail.com"><FiMail /> Email me</a><a href="tel:+918446723980"><FiPhone /> Call me</a><a href="https://www.linkedin.com/in/parth-lad153" target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a><a href="https://github.com/Parthlad1" target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a></div></Motion.div>
      <Motion.form onSubmit={handleSubmit} className="contact-form" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }}><label>Name<input type="text" name="name" value={formData.name} onChange={handleChange} required /></label><label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label><label>Message<textarea name="message" value={formData.message} onChange={handleChange} required /></label><button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send message'} <FiArrowUpRight /></button>{status && <p className="status-message" role="status">{status}</p>}</Motion.form>
    </div></section>
  );
}
export default Contact;
