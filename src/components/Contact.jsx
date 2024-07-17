import React from 'react';

function Contact() {
  return (
    <div id="contact">
      <section className="contact-intro">
        <h2>CONTACT ME</h2>
        <p>Thank you for taking the time to look at what I've been up to. Let's talk about how I can help you and your team in your next project.</p>
      </section>
      <section className="contact-info">
        <a className="resume-link" id="resume-button" href="#">See Resume</a>
        <div>
          <span className="contact-email">Email: </span><span>hardeepkaur@gmail.com</span>
        </div>
        <section className="socials">
          <h3>SOCIALS</h3>
          <div className="social-icons">
            <a href="https://github.com/Hardeepthiara" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github icons"></i>
            </a>
            <a href="https://www.linkedin.com/in/hardeepkaurdhami/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin icons"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-codepen icons"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-calendar icons"></i>
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Contact;
