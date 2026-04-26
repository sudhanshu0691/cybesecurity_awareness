import { motion } from 'motion/react';
import { Shield, Phone, Mail, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { useTranslation } from '../lib/LanguageContext';
import Logo from './Logo';

export function RegistrationCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative p-12 md:p-24 overflow-hidden"
        >
           <div className="absolute inset-0 organic-blob bg-gradient-to-br from-cyber-blue/10 to-govt-gold/10 border border-white/5 -z-10 group-hover:scale-110 transition-transform duration-1000" />
           
           <div className="text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
               <span className="text-xs font-black text-cyber-blue uppercase tracking-[0.6em] mb-6 block">
                 FINAL PROTOCOL
               </span>
               <h2 className="text-5xl md:text-7xl font-display font-black text-white italic mb-10 leading-[0.9] tracking-tighter uppercase">
                 {t('cta_final_title').split(' ').map((word, i) => (
                   <span key={i} className="block first:text-white last:text-cyber-blue">{word}</span>
                 ))}
               </h2>
             </motion.div>

             <p className="text-xl text-cyber-muted font-medium mb-12 max-w-2xl mx-auto italic leading-relaxed">
               "Don't wait to be a victim. Join the movement and become cyber-aware before it's too late."
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
               <button className="group relative px-12 py-5 bg-white text-cyber-black font-black uppercase text-xs tracking-[0.3em] rounded-full hover:bg-govt-gold transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                 <span className="flex items-center gap-3">
                   Register Offline <ChevronRight size={18} />
                 </span>
               </button>
               <button className="flex items-center gap-4 text-xs font-black text-cyber-blue uppercase tracking-[0.3em] hover:text-white transition-colors">
                 Access Virtual Pass
               </button>
             </div>
             
             <div className="mt-12 flex items-center justify-center gap-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <p className="text-[10px] uppercase font-black text-red-500 tracking-[0.3em]">
                  {t('limited_seats')}
                </p>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="pt-32 pb-16 relative overflow-hidden bg-cyber-black">
      <div className="absolute inset-0 cyber-grid opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Logo size="sm" />
              <div className="flex flex-col">
                <h1 className="text-xl font-display font-black text-white italic uppercase leading-none">CYBER <span className="text-cyber-blue">SURAKSHA</span></h1>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cyber-muted font-bold">CONCLAVE // 2026</p>
              </div>
            </div>
            <p className="text-cyber-muted text-sm leading-relaxed font-medium">
              {t('footer_desc')}
            </p>
            <div className="flex items-center gap-6">
               <a href="#" className="w-10 h-10 organic-blob bg-white/5 flex items-center justify-center text-cyber-muted hover:text-cyber-blue transition-all border border-white/5"><Instagram size={18} /></a>
               <a href="#" className="w-10 h-10 organic-blob bg-white/5 flex items-center justify-center text-cyber-muted hover:text-cyber-blue transition-all border border-white/5"><Twitter size={18} /></a>
               <a href="#" className="w-10 h-10 organic-blob bg-white/5 flex items-center justify-center text-cyber-muted hover:text-cyber-blue transition-all border border-white/5"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em]">Resource Hub</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-cyber-muted">
              <li><a href="#home" className="hover:text-cyber-blue transition-colors">Digital Archive</a></li>
              <li><a href="#impact" className="hover:text-cyber-blue transition-colors">Risk Assessment</a></li>
              <li><a href="#programs" className="hover:text-cyber-blue transition-colors">Skill Modules</a></li>
              <li><a href="#speaker" className="hover:text-cyber-blue transition-colors">Expert Network</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em]">Protocol</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-cyber-muted">
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Privacy Shield</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Refund Gateway</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em]">Nexus Access</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-cyber-muted group">
                 <div className="w-10 h-10 organic-blob bg-white/5 flex items-center justify-center group-hover:text-cyber-blue transition-colors"><Phone size={18} /></div>
                 <span className="text-xs font-black">7800098235 // 8989119369</span>
              </div>
              <div className="flex items-center gap-4 text-cyber-muted group">
                 <div className="w-10 h-10 organic-blob bg-white/5 flex items-center justify-center group-hover:text-cyber-blue transition-colors"><Mail size={18} /></div>
                 <span className="text-xs font-black">support@iiesp.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <p className="text-[9px] uppercase font-black text-cyber-muted tracking-[0.3em]">
             © 2026 IIESP // INTERNATIONAL INSTITUTE OF EDUCATION & SKILL PROGRESS
           </p>
           <div className="flex items-center gap-4">
              <span className="text-[9px] uppercase font-black text-govt-gold tracking-[0.3em]">Designed for sudhanshu singh</span>
              <div className="w-2 h-2 organic-blob bg-govt-gold animate-pulse" />
           </div>
        </div>
      </div>
    </footer>
  );
}
