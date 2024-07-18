import React from 'react';
import '../assets/index.css'
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <h2>Hello, World!</h2>
        <p>This is your first React page created using Vite.</p>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <footer style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2024 My Portfolio App</p>
      </footer>
    </div>
  );
};

export default Home;
