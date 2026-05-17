import { Database, Code2, Monitor, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <Monitor size={30} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Programming Languages',
      icon: <Code2 size={30} />,
      skills: ['JavaScript', 'Python', 'C++', 'Java', 'C']
    },
    {
      id: 3,
      title: 'Backend & Tools',
      icon: <Server size={30} />,
      skills: ['Node.js', 'Express', 'Git', 'GitHub', 'VS Code', 'Antigravity']
    },
    {
      id: 4,
      title: 'Databases',
      icon: <Database size={30} />,
      skills: ['MongoDB', 'MySQL']
    }
  ];

  return (
    <div className="container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title gradient-text">Technical Skills</h1>
        <p className="page-subtitle">Technologies and tools I work with</p>
      </div>

      <div className="grid-container">
        {skillCategories.map((category) => (
          <div key={category.id} className="card glass">
            <div className="card-icon">
              {category.icon}
            </div>
            <h2 className="card-title">{category.title}</h2>
            <div className="skill-tags">
              {category.skills.map(skill => (
                <span key={skill} className="skill-tag glow-on-hover">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
