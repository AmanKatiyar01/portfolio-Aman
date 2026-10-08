import { motion } from "framer-motion";

function Home() {
  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '5rem', position: 'relative' }}>
      
      {/* Background Orbs */}
      <div className="bg-orb orb-cyan" style={{ top: '20%', left: '10%', width: '40vw', height: '40vw', opacity: 0.3 }}></div>
      <div className="bg-orb orb-pink" style={{ bottom: '10%', right: '10%', width: '30vw', height: '30vw', opacity: 0.2 }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', zIndex: 2 }}
      >
        <span style={{ color: '#00f2fe', fontSize: '1.2rem', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
          • Available For Work
        </span>
        <h1 style={{ color: '#fff', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', marginTop: '1rem', marginBottom: '1rem', lineHeight: '1.1' }}>
          Hi, I'm <br />
          <span className="text-gradient-2">Aman Katiyar</span>
        </h1>
        <h2 style={{ color: '#a1a1aa', fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: '500', marginBottom: '2rem' }}>
          Full Stack MERN & Python Engineer
        </h2>
        <p style={{ color: '#8b9bb4', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
          I architect and develop high-performance web applications, intelligent AI microservices, and interactive 3D interfaces. I transform complex ideas into seamless, elegant digital products.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;