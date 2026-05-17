import { useState } from 'react';
import { Mail, Code2, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../images/aaditya.jpeg';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container animate-fade-in">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">Hello, I am</span>
          <h1 className="hero-title">
            <span className="gradient-text">Aaditya</span> Pokhriyal
          </h1>
          <p className="hero-description">
            A passionate software developer creating dynamic, premium web experiences.
            I turn complex problems into elegant, modern solutions.
          </p>

          <div className="hero-actions">
            <a href="mailto:pokhriyal.adi@gmail.com" className="btn btn-primary">
              <Mail size={20} /> Contact Me
            </a>
            <a href="/projects" className="btn btn-secondary">
              View Work
            </a>
          </div>

          <div className="socials-container">
            <a href="https://github.com/AadityaPokhriyal" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/aaditya-pokhriyal-b47a56322" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/MjX043f9np/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
              <Code2 size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-placeholder glow-on-hover" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
            <div className="image-placeholder-inner" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={profileImage}
                alt="Aaditya Pokhriyal"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="image-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            {/*the e.stopPropogation() will stop the click from bubbling up/the parent's
            event signal will not be emitted from this element and only till propogation is stopped */}
            <button className="image-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={32} />
            </button>
            <img src={profileImage} alt="Aaditya Pokhriyal" className="image-modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
