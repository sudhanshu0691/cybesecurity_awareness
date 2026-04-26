import { motion } from 'motion/react';
import { MousePointer2, Smartphone, ShieldAlert, PhoneIncoming, AlertTriangle } from 'lucide-react';
import { useTranslation } from '../lib/LanguageContext';

export default function AwarenessSection() {
  const { t } = useTranslation();

  const threats = [
    {
      title: 'UPI Fraud',
      icon: <MousePointer2 className="text-cyber-cyan" />,
      desc: 'Sophisticated spoofing techniques used to drain bank accounts through fake UPI links and QR codes.'
    },
    {
      title: 'Social Media Hijack',
      icon: <Smartphone className="text-india-saffron" />,
      desc: 'Account takeover attacks targeting personal identities and spreading malicious propaganda.'
    },
    {
      title: 'Sextortion Scams',
      icon: <ShieldAlert className="text-red-500" />,
      desc: 'Blackmail schemes involving personal videos/photos used to emotionally and financially exploit victims.'
    },
    {
      title: 'Fake Job Calls',
      icon: <PhoneIncoming className="text-india-green" />,
      desc: 'Fraudulent recruitment schemes promising lucrative offers to steal sensitive personal information.'
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 organic-blob bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/20 neon-glow shadow-[0_0_40px_rgba(239,68,68,0.2)]"
          >
            <AlertTriangle className="text-red-500" size={32} />
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-xs font-mono font-black text-red-500 uppercase tracking-[0.8em] mb-4 block">
              CRITICAL THREATS
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-black text-white italic uppercase tracking-tighter leading-none glitch-text">
              {t('threats_title').split(' ').map((word, i) => (
                <span key={i} className="block first:text-white last:text-red-500">{word}</span>
              ))}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {threats.map((threat, idx) => (
            <motion.div
              key={threat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group h-full"
            >
              <div className="glass-card rounded-[2rem] p-10 flex items-start gap-8 h-full border-white/5">
                <div className="w-16 h-16 organic-blob bg-cyber-black flex items-center justify-center shrink-0 border border-white/10 group-hover:rotate-12 transition-transform duration-500 neon-glow">
                  {threat.icon}
                </div>
                <div>
                   <h4 className="text-2xl font-display font-black text-white mb-4 italic uppercase tracking-tight group-hover:text-cyber-cyan transition-colors">
                     {threat.title}
                   </h4>
                   <p className="text-slate-grey font-medium leading-relaxed">
                     {threat.desc}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
