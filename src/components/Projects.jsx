import React from 'react';
import '../assets/index.css'; // Ensure this path is correct

function Projects() {
  return (
    <div className="projects container-fluid">
        <h2>Projects</h2>
        <p className="project-text">Thank you for taking the time to look at what I've been up to. Let's talk about how I can help you and your team in your next project.</p>
        <div className="projects-container">
            <section id="project-1" className="project">
                <div className="project-title">
                    <h3>1. Stream Search</h3>
                    <div className="info-container">
                    <img className="project-img" src="https://raw.githubusercontent.com/Hardeepthiara/myportfolio/main/public/images/StreamSearch.png" alt="Live project looks like this" />
                    <div className="project-info">
                        <p>The Movie Database React project uses React to build a user-friendly website where you can explore and search for movies. It connects to APIs like TMDB to fetch movie information such as ratings and trailers. The site adjusts smoothly to different screen sizes and offers easy ways to find and filter movies. It's a great example of modern web development with React.</p>
                        <ul className="tech-stack">
                        <li className="skill">
                            <img src="#" alt="React logo" width="30" height="50" />
                        </li>
                        <li className="skill">
                            <img src="#" alt="CSS3 logo" width="30" height="30" />
                        </li>
                        <li className="skill">
                            <img src="#" alt="JavaScript logo" width="30" height="30" />
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <section id="project-2" className="project">
                <div className="project-title">
                    <h3>2. Apex Edutainment</h3>
                    <div className="info-container">
                    <img className="project-img" src="https://raw.githubusercontent.com/Hardeepthiara/myportfolio/main/public/images/ApexEdutainment.png" alt="Live project looks like this" />
                    <div className="project-info">
                        <p>The Leader in Online Learning,Engaging & Accessible Online Courses For All.Own your future learning new skills online</p>
                        <ul className="tech-stack">
                        <li className="skill">
                            <img src="#" alt="React logo" width="30" height="50" />
                        </li>
                        <li className="skill">
                            <img src="#" alt="CSS3 logo" width="30" height="30" />
                        </li>
                        <li className="skill">
                            <img src="#" alt="JavaScript logo" width="30" height="30" />
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <section id="project-3" className="project">
            <div className="project-title">
                    <h3>2. Apex Edutainment</h3>
                    <div className="info-container">
                    <img className="project-img" src="https://raw.githubusercontent.com/Hardeepthiara/myportfolio/main/public/images/Fashionista.png" alt="Live project looks like this" />
                    <div className="project-info">
                        <p>At FASHIONSITA, we bring the fashion world to your fingertips,
                        embracing the latest trends and styles for men, women, and kids.
                        Our MERN technology-driven platform ensures a seamless and
                        immersive shopping experience, making your journey through the
                        realms of fashion enjoyable and convenient</p>
                        <ul className="tech-stack">
                        <li className="skill">
                            <img src="#" alt="React logo" width="30" height="50" />
                        </li>
                        <li className="skill">
                            <img src="#" alt="CSS3 logo" width="30" height="30" />
                        </li>
                        <li className="skill">
                            <img src="#" alt="JavaScript logo" width="30" height="30" />
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>                    
        </div>
    </div>
  );
}

export default Projects;
