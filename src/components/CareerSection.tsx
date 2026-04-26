import { motion } from 'motion/react';
import { Briefcase, LineChart, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from '../lib/LanguageContext';

export default function CareerSection() {
  const { t } = useTranslation();
  const roles = [
    "Security Analyst", "Ethical Hacker", "Incident Responder", "Forensic Expert"
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-xs font-black text-govt-gold uppercase tracking-[0.5em] mb-4 block">
                CAREER GROWTH
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-none mb-10">
                {t('career_title').split(' ').map((word, i) => (
                  <span key={i} className="block first:text-white last:text-govt-gold">{word}</span>
                ))}
              </h2>
            </motion.div>

            <p className="text-xl text-cyber-muted font-medium leading-relaxed mb-12 max-w-xl">
              Cyber security is one of the fastest-growing industries in the world. 
              Gain world-class training and secure high-paying roles in top organizations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {roles.map((role, idx) => (
                 <motion.div 
                    key={role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-4 p-6 organic-blob bg-white/[0.02] border border-white/5 hover:border-govt-gold/30 transition-all group"
                 >
                    <div className="w-4 h-4 organic-blob bg-govt-gold/20 group-hover:bg-govt-gold transition-colors" />
                    <span className="text-lg font-display font-bold text-white italic">{role}</span>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Right Visual Stats */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm aspect-square"
            >
              {/* Animated Blob Background */}
              <div className="absolute inset-0 organic-blob bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent border-2 border-cyan-400/40 opacity-80" />
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                 <span className="text-xs font-black text-cyber-muted uppercase tracking-[0.2em] mb-6 block opacity-90">Age Potential</span>
                 
                 <h4 className="text-6xl md:text-7xl font-display font-black text-white mb-12 tracking-tighter italic leading-none">
                    ₹8L – ₹40L+
                 </h4>
                 
                 {/* Entry to Expert Scale */}
                 <div className="flex justify-between w-full px-4 mb-16">
                    <div className="text-left">
                       <p className="text-xs font-black uppercase text-cyber-muted tracking-widest">ENTRY</p>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-black uppercase text-cyber-muted tracking-widest">EXPERT</p>
                    </div>
                 </div>

                 {/* Open Jobs Stat */}
                 <div className="flex flex-col items-center gap-3">
                    <Briefcase className="text-govt-gold" size={32} />
                    <div>
                       <p className="text-2xl font-display font-black text-white leading-none">3.5M+</p>
                       <p className="text-xs font-black text-cyber-muted uppercase tracking-wide mt-2">Open Jobs Globally</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
