import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Sparkles, Float } from "@react-three/drei";

function Hero() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      
      {/* 3D BACKGROUND */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[2, 2, 5]} intensity={1.5} color="#00f2fe" />
          <directionalLight position={[-2, -2, -5]} intensity={1} color="#4facfe" />
          <Sparkles count={250} scale={15} size={2} speed={0.4} color="#00f2fe" opacity={0.6} />
          <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[2.5, 0, -3]}>
            <Sphere args={[2.5, 32, 32]} scale={1.2}>
              <MeshDistortMaterial color="#000000" emissive="#00f2fe" emissiveIntensity={0.3} distort={0.5} speed={1.5} wireframe={true} transparent={true} opacity={0.4} />
            </Sphere>
          </Float>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={1} position={[-3, -1, -4]}>
            <Sphere args={[2, 16, 16]} scale={1}>
              <MeshDistortMaterial color="#4facfe" distort={0.6} speed={2} wireframe={true} opacity={0.15} transparent={true} />
            </Sphere>
          </Float>
        </Canvas>
      </div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap-reverse', width: '100%', gap: '3rem', paddingTop: '6rem' }}>
        
        {/* LEFT SIDE: Colorful Text Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: '1 1 100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', zIndex: 1 }}
        >
          <div className="status-badge">
            <span className="status-dot"></span> AVAILABLE FOR WORK
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '1rem', letterSpacing: '-1px' }}>
            <span className="text-gradient-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Hi, I'm</span> <br />
            <span className="text-gradient-2">Aman Katiyar</span>
          </h1>
          
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '500' }}>
            Full Stack MERN & Python Engineer
          </h2>
          
          <p style={{ color: '#8b9bb4', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '550px', lineHeight: '1.8', fontWeight: '400', marginBottom: '2rem' }}>
            I architect and develop high-performance web applications, intelligent AI microservices, and interactive 3D interfaces. I transform complex ideas into seamless, elegant digital products.
          </p>
          
          <div className="btn-container">
            <Link to="/projects" className="btn btn-glow">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 100%', maxWidth: '400px', display: 'flex', justifyContent: 'center', zIndex: 1 }}
        >
          <div className="profile-wrapper">
            <div className="profile-inner">
              <img 
                src="/86952.png" 
                alt="Aman Katiyar" 
                className="profile-img"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Hero;