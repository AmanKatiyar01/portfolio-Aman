import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiArrowRight } from "react-icons/fi";

function Contact() {
  const contactInfo = {
    email: "skatiyar558@gmail.com",
    phone: "+91 9555386897",
    location: "Mohammadapur, Lakhimpur Kheri, Uttar pradesh",
    linkedin: "https://linkedin.com/in/aman-katiyar01",
    github: "https://github.com/AmanKatiyar01"
  };

  return (
      <div id="contact" className="container about-section" style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem', position: 'relative' }}>
      {/* Dynamic Background Orbs */}
      <div className="bg-orb orb-cyan" style={{ top: '15%', left: '10%', width: '35vw', height: '35vw', opacity: 0.25 }}></div>
      <div className="bg-orb orb-pink" style={{ bottom: '15%', right: '10%', width: '30vw', height: '30vw', opacity: 0.2 }}></div>

      {/* Advanced Animated Title */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', letterSpacing: '-2px' }}>
          <span className="text-gradient-2">Get In Touch</span>
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginTop: '1rem', fontWeight: '400', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
          My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      {/* Centered Premium Grid for Contact Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Email Card */}
        <ContactCard 
          icon={<FiMail size={34} />} 
          title="Email Address" 
          detail={contactInfo.email} 
          link={`mailto:${contactInfo.email}`} 
          color="#ff758c" 
          delay={0.1} 
        />
        
        {/* Phone Card */}
        <ContactCard 
          icon={<FiPhone size={34} />} 
          title="Phone Number" 
          detail={contactInfo.phone} 
          link={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
          color="#2af598" 
          delay={0.2} 
        />
        
        {/* Location Card */}
        <ContactCard 
          icon={<FiMapPin size={34} />} 
          title="Location" 
          detail={contactInfo.location} 
          link="#" 
          color="#f9d423" 
          delay={0.3} 
        />

        {/* Social Links Row (Bottom Centered) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', gridColumn: '1 / -1', justifyContent: 'center', marginTop: '2rem' }}
        >
          <SocialWidget icon={<FiLinkedin size={26} />} name="LinkedIn Profile" link={contactInfo.linkedin} color="#00f2fe" />
          <SocialWidget icon={<FiGithub size={26} />} name="GitHub Profile" link={contactInfo.github} color="#ffffff" />
        </motion.div>

      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Reusable Component: 3D Contact Card
// ---------------------------------------------------------
function ContactCard({ icon, title, detail, link, color, delay }) {
  return (
    <motion.a 
      href={link} target={link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
      whileHover={{ scale: 1.05, translateY: -10, borderColor: color, boxShadow: `inset 0 0 20px ${color}15, 0 20px 40px rgba(0,0,0,0.5)` }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', textDecoration: 'none',
        background: 'rgba(15, 15, 20, 0.6)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
        padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.3s ease', cursor: link !== "#" ? 'pointer' : 'default',
        boxShadow: 'inset 0 0 20px rgba(255,255,255,0.02), 0 15px 35px rgba(0, 0, 0, 0.4)'
      }}
    >
      <div style={{ background: `${color}15`, padding: '22px', borderRadius: '50%', color: color, boxShadow: `0 0 25px ${color}33` }}>
        {icon}
      </div>
      <div>
        <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem', fontWeight: '700', letterSpacing: '0.5px' }}>{title}</h3>
        <p style={{ color: '#e2e8f0', fontSize: '1.1rem', fontWeight: '500' }}>{detail}</p>
      </div>
    </motion.a>
  );
}

// ---------------------------------------------------------
// Reusable Component: Pill-Shaped Social Widget
// ---------------------------------------------------------
function SocialWidget({ icon, name, link, color }) {
  return (
    <motion.a 
      href={link} target="_blank" rel="noopener noreferrer"
      whileHover={{ scale: 1.05, translateY: -5, borderColor: color, boxShadow: `0 15px 30px ${color}33` }}
      style={{
        display: 'flex', alignItems: 'center', gap: '15px',
        background: 'rgba(15, 15, 20, 0.6)', padding: '1.2rem 2.5rem', borderRadius: '50px',
        border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'all 0.3s ease',
        backdropFilter: 'blur(30px)'
      }}
    >
      <div style={{ color: color, filter: `drop-shadow(0 0 8px ${color}88)` }}>{icon}</div>
      <span style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '600', letterSpacing: '0.5px' }}>{name}</span>
      <FiArrowRight color={color} size={20} style={{ marginLeft: '10px' }} />
    </motion.a>
  );
}

export default Contact;