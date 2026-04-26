import { motion } from 'motion/react';
import { Linkedin, Twitter, ExternalLink, ShieldCheck, Zap, Globe, Terminal } from 'lucide-react';
import { useTranslation } from '../lib/LanguageContext';

export default function SpeakerSection() {
  const { t } = useTranslation();

  return (
    <section id="speaker" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-5" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Speaker Image with India Spin Ring */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-8"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 india-spin-ring opacity-40 rounded-full" />
              <div className="absolute inset-2 bg-cyber-black rounded-full" />
              
              <div className="relative organic-blob overflow-hidden bg-cyber-dark p-2">
                <img 
                  src="/Amit_dubey.jpg" 
                  alt="Amit Dubey"
                  className="w-full h-full object-cover organic-blob grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card p-6 organic-blob border-cyber-cyan/30 neon-glow">
                 <ShieldCheck className="text-cyber-cyan mb-2" size={32} />
                 <p className="text-[10px] font-mono font-black text-cyber-cyan uppercase tracking-widest">Verified Expert</p>
                 <p className="text-sm font-display font-bold text-white italic">#INDIA_SECURE</p>
              </div>
            </motion.div>
          </div>

          {/* Speaker Bio */}
          <div className="lg:col-span-7 flex flex-col items-start translate-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono font-black text-cyber-cyan uppercase tracking-[0.8em] mb-4 block">
                {t('speaker_title')}
              </span>
              <h2 className="text-6xl md:text-9xl font-display font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-10 glitch-text">
                AMIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron via-white to-india-green">DUBEY</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-2xl text-white font-display font-medium italic leading-relaxed glass-card p-6 border-l-4 border-india-saffron">
                National Security Expert & Crime Investigator.
              </p>
              
              <div className="space-y-6 text-slate-grey font-medium text-lg leading-relaxed">
                <p>
                  Amit Dubey is a renowned National Security Expert, Author, and Crime Investigator on Cyber Forensics. He has addressed various national and international platforms including TEDx and the United Nations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: "Govt Advisor", icon: <ShieldCheck className="text-india-saffron" /> },
                  { text: "Cyber Architect", icon: <Zap className="text-cyber-cyan" /> },
                  { text: "TEDx Speaker", icon: <Globe className="text-india-green" /> },
                  { text: "Interpol Advisor", icon: <Terminal className="text-india-white" /> }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-5 glass-card rounded-2xl border-white/5 text-xs font-mono font-black uppercase tracking-widest text-white group cursor-default"
                  >
                    <div className="organic-blob bg-white/5 p-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-10">
                <button className="cyber-gradient-btn px-12 py-5 rounded-full text-xs">
                  Full Dossier
                </button>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:text-cyber-cyan hover:scale-110 transition-all border-white/10">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:text-cyber-cyan hover:scale-110 transition-all border-white/10">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
