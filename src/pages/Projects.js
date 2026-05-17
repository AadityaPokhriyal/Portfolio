import React from 'react';
import { ExternalLink, Keyboard, Code, Layout } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Typing Speed Tester',
      description: 'A robust typing speed tester built to challenge and measure your Words Per Minute (WPM) accuracy and speed.',
      githubLink: 'https://github.com/aadityapokhriyal/TypingSpeedTester',
      deployLink: 'https://aadityapokhriyal.github.io/TypingSpeedTester/',
      icon: <Keyboard size={30} />,
      tags: ['Javascript', 'HTML', 'CSS']
    },
    {
      id: 2,
      title: 'Future Project 1',
      description: 'Placeholder for another amazing project you have built or will build. Showcase your skills here.',
      githubLink: '#',
      deployLink: '#',
      icon: <Code size={30} />,
      tags: ['React', 'Node.js']
    },
    {
      id: 3,
      title: 'Future Project 2',
      description: 'Placeholder for another amazing project. The layout automatically adapts to show multiple projects beautifully.',
      githubLink: '#',
      deployLink: '#',
      icon: <Layout size={30} />,
      tags: ['UI/UX', 'Design']
    }
  ];

  return (
    <div className="container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title gradient-text">My Projects</h1>
        <p className="page-subtitle">A collection of my recent work and creations.</p>
      </div>

      <div className="grid-container">
        {projects.map((project) => (
          <div key={project.id} className="card glass">
            <div className="card-icon">
              {project.icon}
            </div>
            <h2 className="card-title">{project.title}</h2>
            <div className="skill-tags" style={{ marginBottom: '1rem' }}>
              {project.tags.map(tag => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="card-desc">{project.description}</p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                GitHub <FaGithub size={16} />
              </a>
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
