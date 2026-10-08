import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiMonitor } from "react-icons/fi";

// =========================================================
// 🚀 APNE PROJECT KE DEPLOY LINKS YAHAN DAALEIN
// =========================================================
const myProjects = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description: "An intelligent AI-powered application that deeply analyzes resumes against job descriptions, extracts core skills, and calculates accurate ATS match scores using advanced NLP models.",
    tech: ["React.js", "Node.js", "Python", "AI/NLP"],
    link: "https://ai-resume-analyzer-eight-alpha.vercel.app/", 
    github: "https://github.com/AmanKatiyar01", // Yahan apne project ke github ka link daal dena
    glowColor: "#00f2fe" // Cyan Neon Glow
  },
  {
    id: "nxtbuild",
    title: "AI Web App Builder (NxtBuild)",
    description: "Architected a next-gen full-stack builder that generates clean, production-ready frontend code directly from natural language prompts leveraging powerful LLM APIs.",
    tech: ["React.js", "Node.js", "LLM APIs"],
    link: "https://your-nxtbuild-link.com", 
    github: "https://github.com/AmanKatiyar01", 
    glowColor: "#f9d423" // Yellow Neon Glow
  }
];

function Projects() {
  return (
    <div id="projects" className="container about-section" style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem', position: 'relative' }}>
      
      {/* Background Glowing Orbs for 3D Feel */}
      <div className="bg-orb orb-cyan" style={{ top: '15%', left: '0%', width: '30vw', height: '30vw', opacity: 0.3 }}></div>
      <div className="bg-orb orb-yellow" style={{ bottom: '10%', right: '0%', width: '25vw', height: '25vw', opacity: 0.25 }}></div>

      {/* Advanced Animated Title */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', letterSpacing: '-2px' }}>
          <span className="text-gradient-2">Featured Projects</span>
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginTop: '1rem', fontWeight: '400', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
          Explore my latest builds, from AI microservices to full-stack web applications.
        </p>
      </motion.div>

      {/* Advanced Bento Grid for Projects */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {myProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02, translateY: -10 }}
            style={{
              background: 'rgba(15, 15, 20, 0.6)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: `1px solid rgba(255, 255, 255, 0.05)`,
              borderRadius: '24px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `inset 0 0 20px rgba(255,255,255,0.02), 0 15px 35px rgba(0, 0, 0, 0.4)`,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease'
            }}
            // Hover karne par card ka glow project ke color ka ho jayega
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = project.glowColor;
              e.currentTarget.style.boxShadow = `inset 0 0 30px ${project.glowColor}22, 0 25px 50px rgba(0,0,0,0.6)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.boxShadow = `inset 0 0 20px rgba(255,255,255,0.02), 0 15px 35px rgba(0, 0, 0, 0.4)`;
            }}
          >
            {/* Top Bar: Mac Style Dots (Developer Vibe) */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            
            {/* Project Title */}
            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1.2rem', lineHeight: '1.3', fontWeight: '800', letterSpacing: '-0.5px' }}>
              {project.title}
            </h3>
            
            {/* Description */}
            <p style={{ color: '#8b9bb4', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem', flexGrow: 1 }}>
              {project.description}
            </p>

            {/* Tech Stack Glowing Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2.5rem' }}>
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  style={{ 
                    background: `${project.glowColor}15`, 
                    color: '#fff', 
                    padding: '8px 16px', 
                    borderRadius: '12px', 
                    fontSize: '0.85rem', 
                    fontWeight: '600',
                    border: `1px solid ${project.glowColor}44`,
                    boxShadow: `0 0 10px ${project.glowColor}22`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Buttons: Live Demo & GitHub */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {/* Live Link Button */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  background: project.glowColor, color: '#000', padding: '12px 20px', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem',
                  boxShadow: `0 0 20px ${project.glowColor}66`, transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FiMonitor size={18} /> Live Demo
              </a>
              
              {/* GitHub Button */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '12px 20px', borderRadius: '12px',
                  textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                <FiGithub size={20} /> Code
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Projects;