import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Award, Video, CheckCircle2, IndianRupee, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../lib/LanguageContext';

export default function ProgramSection() {
  const { t } = useTranslation();

  return (
    <section id="programs" className="py-32 relative overflow-hidden bg-cyber-black">
      <div className="absolute inset-0 hex-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col mb-32 items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="px-8 py-3 glass-card rounded-full border-cyber-cyan/30 mb-12 organic-blob group hover:border-cyber-cyan transition-colors bg-cyber-cyan/5">
               <span className="text-sm font-mono font-black text-cyber-cyan uppercase tracking-[0.4em] neon-text">
                  {t('excellence_tag')}
               </span>
            </div>
            
            <span className="text-xs font-mono font-black text-slate-grey uppercase tracking-[0.8em] mb-4 block">
              {t('programs_subtitle')}
            </span>
            <h2 className="text-6xl md:text-9xl font-display font-black text-white italic uppercase leading-[0.8] tracking-tighter glitch-text">
              {t('programs_title').split(' ').map((word, i) => (
                <span key={i} className="block first:text-white last:text-transparent last:bg-clip-text last:bg-gradient-to-r last:from-india-saffron last:via-white last:to-india-green">{word}</span>
              ))}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Card 1: Offline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <div className="glass-card rounded-[3rem] p-12 md:p-16 flex flex-col h-full border-india-saffron/20 hover:border-india-saffron/50 transition-all duration-500">
               <div className="flex items-center gap-4 mb-12">
                  <div className="px-6 py-2 glass-card rounded-full border-india-saffron/30 organic-blob">
                     <span className="text-[10px] font-mono font-black text-india-saffron uppercase tracking-widest">OFFLINE ELITE</span>
                  </div>
                  <div className="h-px flex-1 bg-white/5" />
               </div>

               <h3 className="text-5xl md:text-6xl font-display font-black text-white mb-10 italic uppercase leading-none tracking-tighter">
                 A NIGHT WITH <br />
                 <span className="text-india-saffron neon-text">AMIT DUBEY</span>
               </h3>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                 <div className="flex items-center gap-5">
                   <div className="w-12 h-12 organic-blob bg-india-saffron/10 flex items-center justify-center text-india-saffron border border-india-saffron/20 neon-glow">
                     <Calendar size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-mono font-black text-slate-grey tracking-widest">Date</p>
                     <p className="text-lg font-display font-bold text-white uppercase italic">10 May 2026</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-5">
                   <div className="w-12 h-12 organic-blob bg-india-saffron/10 flex items-center justify-center text-india-saffron border border-india-saffron/20 neon-glow">
                     <Clock size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-mono font-black text-slate-grey tracking-widest">Time</p>
                     <p className="text-lg font-display font-bold text-white uppercase italic">6 PM – 9 PM</p>
                   </div>
                 </div>
               </div>

               <div className="flex items-start gap-5 mb-14 mt-12">
                 <div className="w-12 h-12 organic-blob bg-india-saffron/10 shrink-0 flex items-center justify-center text-india-saffron border border-india-saffron/20 neon-glow">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <p className="text-[10px] uppercase font-mono font-black text-slate-grey tracking-widest">Venue</p>
                   <p className="text-lg font-display font-bold text-white leading-tight uppercase italic">
                     Narmada College of Excellence, Jabalpur
                   </p>
                 </div>
               </div>

               <div className="space-y-6 mb-16 mt-12">
                 {[
                   { icon: <Award className="text-india-saffron" size={20} />, text: "Expert-Signed IIESP Certification" },
                   { icon: <CheckCircle2 className="text-india-green" size={20} />, text: "Gala Dinner & Networking" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-2xl border-white/5">
                     {item.icon}
                     <span className="text-xs font-mono font-black uppercase text-white tracking-widest">{item.text}</span>
                   </div>
                 ))}
               </div>

               <div className="mt-auto pt-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
                 <div className="flex flex-col">
                   <span className="text-[10px] font-mono uppercase font-black text-slate-grey tracking-widest leading-none mb-4">Full Pass</span>
                   <div className="flex items-center gap-2 text-white">
                      <IndianRupee size={24} className="text-india-saffron" />
                      <span className="text-5xl font-display font-black leading-none italic">200</span>
                   </div>
                 </div>
                 <button className="px-12 py-5 bg-white text-cyber-black font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-india-saffron transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    Secure Ticket
                 </button>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Online */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group h-full"
          >
            <div className="glass-card rounded-[3rem] p-12 md:p-16 flex flex-col h-full border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-500">
               <div className="flex items-center gap-4 mb-12">
                  <div className="px-6 py-2 glass-card rounded-full border-cyber-cyan/30 organic-blob">
                     <span className="text-[10px] font-mono font-black text-cyber-cyan uppercase tracking-widest">LIVE STREAM</span>
                  </div>
                  <div className="h-px flex-1 bg-white/5" />
               </div>

               <h3 className="text-5xl md:text-6xl font-display font-black text-white mb-10 italic uppercase leading-none tracking-tighter">
                 DIGITAL BHARAT <br />
                 <span className="text-cyber-cyan neon-text">WORKSHOP</span>
               </h3>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                 <div className="flex items-center gap-5">
                   <div className="w-12 h-12 organic-blob bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan border border-cyber-cyan/20 neon-glow">
                     <Calendar size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-mono font-black text-slate-grey tracking-widest">Date</p>
                     <p className="text-lg font-display font-bold text-white uppercase italic">11 May 2026</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-5">
                   <div className="w-12 h-12 organic-blob bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan border border-cyber-cyan/20 neon-glow">
                     <Clock size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-mono font-black text-slate-grey tracking-widest">Time</p>
                     <p className="text-lg font-display font-bold text-white uppercase italic">3 PM – 5 PM</p>
                   </div>
                 </div>
               </div>

               <div className="flex items-start gap-5 mb-14">
                 <div className="w-12 h-12 organic-blob bg-cyber-cyan/10 shrink-0 flex items-center justify-center text-cyber-cyan border border-cyber-cyan/20 neon-glow">
                   <Video size={20} />
                 </div>
                 <div>
                   <p className="text-[10px] uppercase font-mono font-black text-slate-grey tracking-widest">Platform</p>
                   <p className="text-lg font-display font-bold text-white leading-tight uppercase italic text-wrap">
                     Exclusive Web Portal
                   </p>
                 </div>
               </div>

               <div className="space-y-6 mb-16">
                  {[
                   { icon: <ShieldCheck className="text-cyber-cyan" size={20} />, text: "Cyber Security Toolkit" },
                   { icon: <CheckCircle2 className="text-india-green" size={20} />, text: "Interactive Live Q&A" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-2xl border-white/5">
                     {item.icon}
                     <span className="text-xs font-mono font-black uppercase text-white tracking-widest">{item.text}</span>
                   </div>
                 ))}
               </div>

               <div className="mt-auto pt-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
                 <div className="flex flex-col">
                   <span className="text-[10px] font-mono uppercase font-black text-slate-grey tracking-widest leading-none mb-4">Digital Pass</span>
                   <div className="flex items-center gap-2 text-white">
                      <IndianRupee size={24} className="text-cyber-cyan" />
                      <span className="text-5xl font-display font-black leading-none italic">200</span>
                   </div>
                 </div>
                 <button className="px-12 py-5 cyber-gradient-btn rounded-full text-xs tracking-[0.4em]">
                    Get Access
                 </button>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
