import { motion } from 'motion/react';
import { TrendingDown, Users, ShieldX, Clock } from 'lucide-react';
import { useTranslation } from '../lib/LanguageContext';

export default function ImpactSection() {
  const { t } = useTranslation();

  const stats = [
    {
      label: 'Financial Fraud in India',
      value: t('impact_stat_1'),
      icon: <TrendingDown className="text-red-500" size={32} />,
      desc: 'Annual losses reported due to sophisticated cyber attacks.',
    },
    {
      label: 'Crime Frequency',
      value: t('impact_stat_2'),
      icon: <Clock className="text-cyber-cyan" size={32} />,
      desc: 'A new cyber crime is registered in India every seven minutes.',
    },
    {
      label: 'Cases in MP Alone',
      value: t('impact_stat_3'),
      icon: <ShieldX className="text-india-saffron" size={32} />,
      desc: 'Massive surge in localized digital security threats.',
    },
    {
      label: 'Unaware Victims',
      value: '92%',
      icon: <Users className="text-india-green" size={32} />,
      desc: 'People who fall prey due to lack of basic digital awareness.',
    }
  ];

  return (
    <section id="impact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-xs font-mono font-black text-cyber-cyan uppercase tracking-[0.8em] mb-4">{t('impact_subtitle')}</span>
              <h3 className="text-5xl md:text-8xl font-display font-black text-white italic tracking-tighter uppercase leading-none glitch-text">
                {t('impact_title').split(' ').map((word, i) => (
                  <span key={i} className="block first:text-white last:text-cyber-cyan">{word}</span>
                ))}
              </h3>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group h-full floating"
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              <div className="glass-card rounded-[2rem] p-10 flex flex-col h-full border-cyber-cyan/10">
                 <div className="mb-12 flex justify-between items-start">
                    <div className="p-4 organic-blob bg-cyber-black flex items-center justify-center neon-glow">
                       {stat.icon}
                    </div>
                    <span className="font-mono text-[10px] text-slate-grey">METRIC_{idx+1}</span>
                 </div>
                 
                 <div className="mt-auto">
                    <h4 className="text-4xl md:text-5xl font-display font-black text-white mb-2 leading-none uppercase italic">{stat.value}</h4>
                    <p className="text-[10px] font-mono font-black text-cyber-cyan uppercase tracking-[0.2em] mb-6">{stat.label}</p>
                    <p className="text-sm text-slate-grey leading-relaxed font-medium">
                      {stat.desc}
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
