import { motion } from 'motion/react';
import { GraduationCap, Home, UserRound, UsersRound, Landmark } from 'lucide-react';
import { useTranslation } from '../lib/LanguageContext';

export default function AudienceSection() {
  const { t } = useTranslation();

  const audiences = [
    { title: 'Students', icon: <GraduationCap size={40} /> },
    { title: 'Families', icon: <Home size={40} /> },
    { title: 'Women', icon: <UserRound size={40} /> },
    { title: 'Seniors', icon: <UsersRound size={40} /> },
    { title: 'Rural Communities', icon: <Landmark size={40} /> }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-24">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-xs font-mono font-black text-cyber-cyan uppercase tracking-[0.8em] mb-4 block">
              TARGET AUDIENCE
            </span>
            <h2 className="text-6xl md:text-9xl font-display font-black text-white italic uppercase tracking-tighter leading-none glitch-text">
              {t('audience_title').split(' ').map((word, i) => (
                <span key={i} className="block first:text-white last:text-cyber-cyan">{word}</span>
              ))}
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          {audiences.map((aud, idx) => (
            <motion.div
              key={aud.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center"
            >
              <div className="w-28 h-28 glass-card organic-blob flex items-center justify-center text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-cyber-black neon-glow transition-all duration-500 mb-8 border-white/10">
                {aud.icon}
              </div>
              <div>
                <h4 className="text-xl font-display font-black text-white italic uppercase group-hover:text-cyber-cyan transition-colors tracking-widest">
                  {aud.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

