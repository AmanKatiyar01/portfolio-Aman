import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// =========================================================
// 🚀 ADD YOUR CERTIFICATE PDF LINKS HERE
// =========================================================
// Replace the 'link' values with the exact names of your PDFs
// Make sure those PDFs are placed inside your 'public' folder.
const mySkills = [
  { 
    title: "Python Programming", 
    cert: "Certification",
    icon: <FaPython size={46} color="#f9d423" />, 
    hoverColor: "#f9d423",
    link: "/python-cert.pdf" // Example: Place python-certificate.pdf in public folder
  },
  { 
    title: "Web Development", 
    cert: "Certification (HTML, CSS, JavaScript)",
    icon: <FaCode size={46} color="#ff758c" />, 
    hoverColor: "#ff758c",
    link: "/html-cert.pdf"
  },
  { 
    title: "React.js", 
    cert: "Certification",
    icon: <FaReact size={46} color="#00f2fe" />, 
    hoverColor: "#00f2fe",
    link: "/react-cert.pdf"
  },
  { 
    title: "Node.js & Express.js", 
    cert: "Certification",
    icon: <FaNodeJs size={46} color="#2af598" />, 
    hoverColor: "#2af598",
    link: "/node-certificate.pdf"
  },
  { 
    title: "SQL & Database Management", 
    cert: "Certification",
    icon: <FaDatabase size={46} color="#b19fff" />, 
    hoverColor: "#b19fff",
    link: "/sql-cert.pdf"
  }
];

function Skills() {
  return (
      <div id="skills" className="container about-section" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
      {/* Background Glowing Orbs for 3D Feel */}
      <div className="bg-orb orb-cyan" style={{ top: '20%', left: '10%' }}></div>
      <div className="bg-orb orb-pink" style={{ bottom: '20%', right: '10%' }}></div>

      {/* Animated Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', letterSpacing: '-1px' }}>
          <span className="text-gradient-2">Skills & Certifications</span>
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginTop: '1rem', fontWeight: '400' }}>
          Click on any card to view the official certificate.
        </p>
      </motion.div>

      {/* 3D Glass Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', position: 'relative', zIndex: 2 }}>
        
        {mySkills.map((skill, index) => (
          <motion.a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              translateY: -10,
              borderColor: skill.hoverColor,
              boxShadow: `inset 0 0 20px ${skill.hoverColor}22, 0 20px 40px ${skill.hoverColor}33`
            }}
            style={{
              textDecoration: 'none',
              background: 'rgba(10, 10, 15, 0.6)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.02), 0 15px 35px rgba(0, 0, 0, 0.5)',
              transition: 'border-color 0.3s ease',
              position: 'relative'
            }}
          >
            {/* External Link Icon indicator */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', color: skill.hoverColor, opacity: 0.7 }}>
              <FiExternalLink size={20} />
            </div>

            {/* Icon Box */}
            <div style={{ 
              marginBottom: '1.8rem', 
              background: 'rgba(255,255,255,0.03)', 
              padding: '20px', 
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              {skill.icon}
            </div>
            
            {/* Skill Details */}
            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.8rem', letterSpacing: '0.5px' }}>
              {skill.title}
            </h3>
            <p style={{ color: skill.hoverColor, fontSize: '0.95rem', fontWeight: '700', letterSpacing: '0.5px' }}>
              {skill.cert}
            </p>
          </motion.a>
        ))}

      </div>
    </div>
  );
}

export default Skills;