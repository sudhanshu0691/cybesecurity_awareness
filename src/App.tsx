import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import ProgramSection from './components/ProgramSection';
import SpeakerSection from './components/SpeakerSection';
import AwarenessSection from './components/AwarenessSection';
import AudienceSection from './components/AudienceSection';
import CareerSection from './components/CareerSection';
import LiveTicker from './components/LiveTicker';
import { RegistrationCTA, Footer } from './components/FinalSections';
import { LanguageProvider } from './lib/LanguageContext';
import DynamicBackground from './components/effects/DynamicBackground';
import CustomCursor from './components/effects/CustomCursor';
import SideDecorations from './components/effects/SideDecorations';
import Logo from './components/Logo';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className="relative selection:bg-cyber-cyan selection:text-cyber-black">
        <CustomCursor />
        <DynamicBackground />
        <SideDecorations />
        
        {/* Hacking Scanlines Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[80] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-cyber-black flex flex-col items-center justify-center gap-8"
            >
              <div className="relative">
                 <motion.div
                   animate={{ 
                     scale: [1, 1.2, 1],
                     rotate: [0, 360]
                   }}
                   transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                   className="w-32 h-32 india-spin-ring rounded-full absolute -top-4 -left-4 p-1"
                 />
                  <motion.div
                   animate={{ 
                     scale: [1, 1.1, 1]
                   }}
                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                   className="w-24 h-24 rounded-full overflow-hidden relative z-10 neon-glow border border-cyber-cyan/30"
                 >
                   <Logo size="md" showGlow={false} />
                 </motion.div>
              </div>
              
              <div className="flex flex-col items-center gap-6">
                <p className="text-[10px] font-mono font-black text-cyber-cyan uppercase tracking-[1em] animate-pulse">
                  STRENGTHENING BHARAT'S DIGITAL DEFENSE
                </p>
                <div className="w-80 h-[2px] bg-white/5 relative overflow-hidden">
                  <motion.div 
                    initial={{ left: '-100%' }}
                    animate={{ left: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent neon-glow"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          
          <div className="relative">
             <div className="absolute top-0 w-full h-px bg-cyber-cyan/20 z-20" />
             <div className="-mt-1 relative z-20">
               <ImpactSection />
             </div>
          </div>

          <ProgramSection />
          <SpeakerSection />
          
          <div className="bg-cyber-dark/30 py-20 relative">
             <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
             <AwarenessSection />
          </div>

          <AudienceSection />
          <CareerSection />
          <RegistrationCTA />
        </main>

        <Footer />
        <LiveTicker />
        
        {/* Floating Particles Simulation (CSS Orbs handled in Hero but global static line here) */}
        <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-india-saffron/20 via-white/20 to-india-green/20 z-[60] pointer-events-none" />
      </div>
    </LanguageProvider>
  );
}
