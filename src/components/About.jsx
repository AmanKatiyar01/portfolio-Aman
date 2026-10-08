import { motion } from "framer-motion";
import { FiDownload, FiMapPin, FiMail, FiPhone, FiBookOpen, FiAward, FiCheckCircle } from "react-icons/fi";

const myCertificates = [
  { name: "IBM Full Stack Software Developer" },
  { name: "Python Programming Certification" },
  { name: "SQL & Database Architecture" },
  { name: "Advanced React.js & Node.js" },
  { name: "Web Development Bootcamp" }
];

function About() {
  return (
     <div id="about" className="container about-section">
      
      {/* Background Orbs for 3D Depth */}
      <div className="bg-orb orb-cyan"></div>
      <div className="bg-orb orb-pink"></div>
      <div className="bg-orb orb-yellow"></div>

      {/* Animated Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', letterSpacing: '-1px' }}>
          <span className="text-gradient-2">About Me</span>
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginTop: '1rem', fontWeight: '400' }}>
          Get to know more about my background, education, and vision.
        </p>
      </motion.div>

      {/* Advance Bento Grid */}
      <div className="bento-grid">
        
        {/* Card 1: Who am I? (Cyan Theme) */}
        <motion.div 
          className="bento-card bento-wide cyan-glow"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        >
          <div className="bento-content">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#00f2fe', filter: 'drop-shadow(0 0 10px #00f2fe)' }}>🚀</span> 
              <span className="card-title-cyan">Who am I?</span>
            </h3>
            <p style={{ color: '#e2e8f0', lineHeight: '1.9', fontSize: '1.1rem', letterSpacing: '0.3px' }}>
              I am a dedicated and enthusiastic B.Tech Computer Science student. I am passionate about applying my technical knowledge and problem-solving skills to build scalable, impactful software solutions. I specialize in the MERN stack and Python, building everything from interactive web applications to AI-powered microservices.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Contact Info (Pink Theme) */}
        <motion.div 
          className="bento-card pink-glow"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          <div className="bento-content">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#ff758c', filter: 'drop-shadow(0 0 10px #ff758c)' }}>📌</span> 
              <span className="card-title-pink">Personal Details</span>
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#e2e8f0', fontSize: '1.05rem', fontWeight: '500' }}>
                <div style={{ background: 'rgba(255, 117, 140, 0.15)', padding: '14px', borderRadius: '14px', color: '#ff758c', boxShadow: '0 0 15px rgba(255,117,140,0.2)' }}><FiMapPin size={22}/></div>
                Lucknow, Uttar Pradesh
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#e2e8f0', fontSize: '1.05rem', fontWeight: '500' }}>
                <div style={{ background: 'rgba(255, 117, 140, 0.15)', padding: '14px', borderRadius: '14px', color: '#ff758c', boxShadow: '0 0 15px rgba(255,117,140,0.2)' }}><FiPhone size={22}/></div>
                +91 9555386897
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#e2e8f0', fontSize: '1.05rem', wordBreak: 'break-all', fontWeight: '500' }}>
                <div style={{ background: 'rgba(255, 117, 140, 0.15)', padding: '14px', borderRadius: '14px', color: '#ff758c', boxShadow: '0 0 15px rgba(255,117,140,0.2)' }}><FiMail size={22}/></div>
                skatiyar558@gmail.com
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 3: Education (Green Theme) */}
        <motion.div 
          className="bento-card green-glow"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        >
          <div className="bento-content">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#2af598', filter: 'drop-shadow(0 0 10px #2af598)' }}><FiBookOpen /></span> 
              <span className="card-title-green">Education</span>
            </h3>
            <div style={{ borderLeft: '2px solid rgba(42, 245, 152, 0.4)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-31px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: '#2af598', boxShadow: '0 0 15px #2af598' }}></div>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '6px', letterSpacing: '0.5px' }}>B.Tech Computer Science</h4>
                <p style={{ color: '#2af598', fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px' }}>2023 - 2027 | CGPA: 7.0</p>
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Bansal Institute of Engineering and Technology</p>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-31px', top: '5px', width: '14px', height: '14px', borderRadius: '50%', background: 'rgba(42, 245, 152, 0.4)' }}></div>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '6px', letterSpacing: '0.5px' }}>Intermediate (12th)</h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Completed in 2023</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Certificates (Yellow Theme) */}
        <motion.div 
          className="bento-card bento-wide yellow-glow"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        >
          <div className="bento-content">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#f9d423', filter: 'drop-shadow(0 0 10px #f9d423)' }}><FiAward /></span> 
              <span className="card-title-yellow">Global Certificates</span>
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {myCertificates.map((cert, index) => (
                // Yahan <a> tag ko hata kar <div> kar diya gaya hai
                <div 
                  key={index} 
                  className="cert-link"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <FiCheckCircle color="#f9d423" size={20} />
                  <span style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: '500' }}>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Download Resume Button */}
      <motion.div 
        style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem', paddingBottom: '4rem' }}
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
      >
        <a 
          href="/Aman_Katiyar_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-glow"
          style={{ padding: '1.2rem 3.5rem', fontSize: '1.15rem', gap: '12px', borderRadius: '50px' }}
        >
          <FiDownload size={24} /> Download Full Resume
        </a>
      </motion.div>

    </div>
  );
}

export default About;