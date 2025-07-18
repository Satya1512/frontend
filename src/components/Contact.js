import React, { useState } from "react";
import "./index.css";
import fbIm from "./images/fb1.png";
import instaIm from "./images/instagram.png";
import linkd from "./images/linkedin.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const contactData = {
          name: formData.name, 
          email: formData.email,
          message: formData.message,
        };
      
        try {
          const response = await fetch('https://portfolio-backend-rtbn.onrender.com/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
          });
      
          if (response.ok) {
            setStatus('Your message has been sent successfully.');
            console.log('Your message has been sent successfully.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('Failed to send the message. Please try again.');
            console.log('Failed to send the message. Please try again.');
            setFormData({ name: '', email: '', message: '' });
        }
          setTimeout(() => setStatus(''), 5000);
    } catch (error) {
        console.error('Error:', error);
        setStatus('An error occurred. Please try again later.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    }
};   
    return (
        <div className="container">
            {/* Form Section */}
            <div className="form-section">
                <div className="form">
                    <h1>Contact Me</h1>
                    <form onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="mb-3">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Enter your name</label>
                            </div>
                        </div>
                        {/* Email Input */}
                        <div className="mb-3">
                            <div className="form-floating">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Enter a valid Email Address</label>
                            </div>
                        </div>
                        {/* Message Input */}
                        <div className="mb-3">
                            <div className="form-floating">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <label htmlFor="floatingTextarea">Message</label>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                    {/* Status Message */}
                    <p className="status-message">{status}</p>
                </div>
            </div>
            {/* Pink Section */}
            <div className="pink-section">
                <div className="get-in-touch">GET IN TOUCH</div>
                <p className="sub-text">
                    Hey! I am looking forward to starting a project with you!
                </p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/satyamanikanta.bogolu" className="icon"><img src={fbIm} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/_satya_15/" className="icon"><img src={instaIm} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/venkata-satya-manikanta/" className="icon"><img src={linkd} alt="Linkedin" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
