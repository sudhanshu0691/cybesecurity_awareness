import { motion } from 'motion/react';
import { ShieldAlert, ChevronRight, Globe, Zap, Cpu, Terminal, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from '../lib/LanguageContext';
import Logo from './Logo';

const Typewriter = () => {
  const phrases = ["BEYOND SECURE.", "DIGITALLY RESILIENT.", "STRENGTHENING BHARAT.", "UNITING NATIONS."];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(currentPhrase.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="text-cyber-cyan font-mono tracking-widest">{text}<span className="animate-pulse">_</span></span>
  );
};

export default function Hero() {
  const { lang, t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-52">
      {/* Hex Grid Overlay */}
      <div className="absolute inset-0 hex-grid opacity-30" />
      
      {/* Ambient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-india-saffron/10 organic-blob blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-india-green/10 organic-blob blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 blur-[150px] animate-pulse delay-500" />

      {/* Data Stream Lines */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full overflow-hidden opacity-20">
        <div className="w-full h-20 data-stream" />
      </div>
      <div className="absolute top-0 left-[15%] w-[1px] h-full overflow-hidden opacity-20">
        <div className="w-full h-20 data-stream [animation-delay:2s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="px-5 py-2 glass-card rounded-full border-white/10 overflow-hidden relative group bg-white/[0.02]">
              <span className={`text-[10px] font-mono tracking-[0.5em] uppercase transition-all duration-500 font-bold ${lang === 'hi' ? 'font-hindi text-india-saffron text-lg' : 'text-slate-grey opacity-70'}`}>
                {t('hero_tagline')}
              </span>
            </div>
            <div className="h-[2px] w-16 bg-white/5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={`text-6xl md:text-8xl lg:text-[10rem] font-display font-black text-white leading-[0.8] tracking-tighter mb-12 italic uppercase glitch-text ${lang === 'hi' ? 'font-hindi text-8xl md:text-9xl leading-none' : ''}`}>
              {t('hero_title').split(' ').map((word, i) => (
                <span key={i} className="block last:text-transparent last:bg-clip-text last:bg-gradient-to-r last:from-india-saffron last:via-white last:to-india-green">
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-xl text-xl text-slate-grey mb-12 font-medium leading-relaxed flex flex-col gap-2"
          >
            <p>{t('hero_subtitle')}</p>
            <div className="h-6">
              <Typewriter />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 lg:gap-12"
          >
            <button 
              data-cursor="hover"
              className="group relative px-12 py-5 cyber-gradient-btn rounded-full hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            >
              <span className="flex items-center gap-3">
                {t('hero_cta_primary')} <ChevronRight size={18} />
              </span>
            </button>
            <button 
              data-cursor="hover"
              className="flex items-center gap-4 px-10 py-5 text-cyber-cyan border border-cyber-cyan/30 rounded-full font-mono uppercase text-xs tracking-[0.3em] transition-all hover:bg-cyber-cyan/10 hover:border-cyber-cyan group"
            >
              <Globe size={18} className="group-hover:rotate-180 transition-transform duration-1000" /> 
              {t('hero_cta_secondary')}
            </button>
          </motion.div>
        </div>

        {/* Right Side: Visual Data */}
        <div className="lg:col-span-4 hidden lg:flex flex-col gap-8">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="w-full aspect-square glass-card rounded-[3rem] floating flex flex-col items-center justify-center relative group"
           >
              <div className="absolute inset-0 india-spin-ring opacity-20 rounded-full p-1" />
              
              <div className="relative z-10 text-center p-12">
                 <div className="mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Logo size="lg" wrapperClassName="border-2 border-india-saffron" />
                 </div>
                 <div className="font-mono text-[10px] text-cyber-cyan mb-2 uppercase tracking-widest leading-none">Scanning Network</div>
                 
                 <div className="flex justify-center gap-4 mb-6">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-1 h-3 bg-india-saffron rounded-full animate-pulse" />
                      <div className="w-1 h-6 bg-india-saffron/40 rounded-full" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-1 h-8 bg-white rounded-full shadow-[0_0_8px_white]" />
                      <div className="w-1 h-2 bg-white/40 rounded-full" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-1 h-5 bg-india-green rounded-full" />
                      <div className="w-1 h-4 bg-india-green/40 rounded-full animate-pulse" />
                    </div>
                 </div>

                 <div className="h-1 lg:w-48 bg-white/5 rounded-full overflow-hidden mx-auto mb-6">
                    <motion.div 
                       animate={{ x: ['-100%', '100%'] }} 
                       transition={{ repeat: Infinity, duration: 2 }}
                       className="w-1/2 h-full bg-cyber-cyan neon-glow" 
                    />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                       <p className="text-[10px] font-black text-slate-grey uppercase font-mono">Nodes</p>
                       <p className="text-lg font-display text-white">4.2k</p>
                    </div>
                    <div className="text-center">
                       <p className="text-[10px] font-black text-slate-grey uppercase font-mono">Uptime</p>
                       <p className="text-lg font-display text-white">99.9%</p>
                    </div>
                 </div>
              </div>
           </motion.div>
           
           <div className="flex items-center gap-4 p-6 glass-card rounded-2xl">
              <div className="w-10 h-10 organic-blob bg-india-green/10 flex items-center justify-center text-india-green">
                 <Terminal size={18} />
              </div>
              <div className="text-left font-mono text-[10px] text-slate-grey uppercase tracking-tight">
                 Packet loss detected at sector 7-G. <br />
                 Re-routing through secure gateway.
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
