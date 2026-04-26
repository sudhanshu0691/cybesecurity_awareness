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
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 organic-blob bg-gradient-to-br from-govt-gold/20 to-transparent border border-govt-gold/10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                 <span className="text-[10px] font-black text-govt-gold uppercase tracking-[0.3em] mb-4 block">Package Potential</span>
                 <h4 className="text-5xl md:text-6xl font-display font-black text-white mb-10 tracking-tighter italic">₹8L – ₹40L+</h4>
                 
                 <div className="space-y-4 mb-10">
                    <div className="h-2 w-full bg-cyber-black/50 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-govt-gold cyber-line-glow"
                       />
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase text-cyber-muted tracking-widest leading-none">
                       <span>Entry</span>
                       <span>Expert</span>
                    </div>
                 </div>

                 <div className="flex items-center gap-6 p-6 glass-morph organic-blob">
                    <Briefcase className="text-govt-gold" size={24} />
                    <div>
                       <p className="text-xl font-display font-black text-white leading-none">3.5M+</p>
                       <p className="text-[10px] font-black text-cyber-muted uppercase">Open Jobs Globally</p>
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
