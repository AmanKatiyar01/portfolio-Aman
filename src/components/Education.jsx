import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiBookmark, FiCalendar, FiCheckCircle, FiClock, FiTarget } from "react-icons/fi";

// =========================================================
// 🚀 ADVANCED EDUCATION DATA (ORIGINAL)
// =========================================================
const educationData = [
  {
    id: 1,
    type: "Undergraduate Degree",
    degree: "B.Tech – Computer Science & Engineering",
    year: "2023 - 2027",
    
    institution: "Bansal Institute of Engineering and Technology, Lucknow",
    university: "Affiliated to Dr. A. P. J. Abdul Kalam Technical University",
    status: "Pursuing",
    statusIcon: <FiClock size={14} />,
    color: "#00f2fe", // Cyan Neon Glow
    icon: <FiAward size={36} />
  },
  {
    id: 2,
    type: "Intermediate",
    degree: "12th Standard",
    year: "2023",
    
    institution: "Higher Secondary Education",
    university: "",
    status: "Completed",
    statusIcon: <FiCheckCircle size={14} />,
    color: "#2af598", // Green Neon Glow
    icon: <FiBookOpen size={36} />
  },
  {
    id: 3,
    type: "High School",
    degree: "10th Standard",
    year: "2021",
    
    institution: "Secondary Education",
    university: "",
    status: "Completed",
    statusIcon: <FiCheckCircle size={14} />,
    color: "#f9d423", // Yellow Neon Glow
    icon: <FiBookmark size={36} />
  }
];

function Education() {
  return (
    <div className="container about-section" style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem', position: 'relative' }}>
      
      {/* Dynamic Background Orbs for Deep 3D Space Effect */}
      <div className="bg-orb orb-cyan" style={{ top: '15%', left: '5%', width: '40vw', height: '40vw', opacity: 0.2 }}></div>
      <div className="bg-orb orb-yellow" style={{ bottom: '15%', right: '5%', width: '30vw', height: '30vw', opacity: 0.15 }}></div>

      {/* Advanced Animated Title */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', letterSpacing: '-2px' }}>
          <span className="text-gradient-2">Academic Journey</span>
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginTop: '1rem', fontWeight: '400', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
          My educational background and the foundation of my technical expertise.
        </p>
      </motion.div>

      {/* Futuristic Stacked Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.02, 
              translateX: 10,
              borderColor: edu.color,
              boxShadow: `inset 0 0 30px ${edu.color}15, 0 20px 40px rgba(0, 0, 0, 0.6)`
            }}
            style={{
              background: 'rgba(15, 15, 20, 0.5)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.02), 0 15px 35px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease'
            }}
          >
            {/* Background Glow Accent inside the card */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: edu.color, filter: 'blur(80px)', opacity: 0.15, borderRadius: '50%' }}></div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              
              {/* Left Side: Glowing Icon Box */}
              <div style={{ 
                background: `linear-gradient(135deg, rgba(255,255,255,0.05), ${edu.color}22)`, 
                padding: '20px', 
                borderRadius: '20px', 
                border: `1px solid ${edu.color}44`,
                color: edu.color,
                boxShadow: `0 0 20px ${edu.color}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {edu.icon}
              </div>

              {/* Right Side: Education Details */}
              <div style={{ flex: 1 }}>
                
                {/* Top Badges (Year & Status) */}
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.05)', color: '#a1a1aa', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <FiCalendar size={14} /> {edu.year}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', background: `${edu.color}15`, color: edu.color, padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', border: `1px solid ${edu.color}44` }}>
                    {edu.statusIcon} {edu.status}
                  </span>
                </div>

                {/* Main Titles */}
                <p style={{ color: edu.color, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', marginBottom: '5px' }}>
                  {edu.type}
                </p>
                <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                  {edu.degree}
                </h3>
                
                <h4 style={{ color: '#e2e8f0', fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FiTarget color={edu.color} /> {edu.institution}
                </h4>

                {edu.university && (
                  <p style={{ color: '#8b9bb4', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {edu.university}
                  </p>
                )}

                {/* Highlighted Score/CGPA Box */}
                {edu.score && (
                  <div style={{ display: 'inline-block', marginTop: '0.5rem' }}>
                    <div style={{ 
                      background: `linear-gradient(90deg, ${edu.color}22, transparent)`, 
                      borderLeft: `4px solid ${edu.color}`, 
                      padding: '10px 20px', 
                      borderRadius: '0 12px 12px 0',
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      letterSpacing: '1px'
                    }}>
                      {edu.score}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Education;