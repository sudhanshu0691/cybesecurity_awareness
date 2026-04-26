import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from '../lib/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_home'), href: '#home' },
    { name: t('nav_impact'), href: '#impact' },
    { name: t('nav_programs'), href: '#programs' },
    { name: t('nav_speaker'), href: '#speaker' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-6 bg-cyber-black/95 backdrop-blur-2xl border-b border-cyber-cyan/15 shadow-lg' : 'py-12 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <Logo size="sm" wrapperClassName="border border-cyber-cyan/15 group-hover:border-cyber-cyan transition-colors" />
          <div className="flex flex-col">
            <h1 className={`text-2xl font-display font-black tracking-tight text-white leading-none italic uppercase ${lang === 'hi' ? 'font-hindi' : ''}`}>
              CYBER <span className="text-cyber-cyan neon-text">SURAKSHA</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-india-saffron animate-pulse shadow-[0_0_8px_#FF9933]" />
              <p className="text-[10px] uppercase tracking-[0.4em] font-mono text-slate-grey font-bold">
                BEYOND SECURE // 2026
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="hover"
              className="relative group text-base font-mono font-black uppercase tracking-[0.2em] text-slate-grey hover:text-cyber-cyan transition-colors"
            >
              <span className={lang === 'hi' ? 'font-hindi text-lg' : ''}>{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-cyan transition-all group-hover:w-full neon-glow" />
            </a>
          ))}
          
          <div className="flex items-center gap-10 pl-12 border-l border-white/10">
            <button
               onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
               data-cursor="hover"
               className="flex items-center gap-2 text-sm font-mono font-black uppercase tracking-widest text-india-saffron hover:text-white transition-colors"
            >
              <Languages size={14} />
              {lang === 'en' ? 'हिन्दी' : 'ENG'}
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="hover"
              className="px-8 py-3 cyber-gradient-btn rounded-full text-xs"
            >
              {t('nav_register')}
            </motion.button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-6">
          <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="text-govt-gold font-bold text-sm"
          >
            {lang === 'en' ? 'HI' : 'EN'}
          </button>
          <button 
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-cyber-black z-[60] flex flex-col p-8 pt-24"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-display font-black text-white italic uppercase tracking-tighter hover:text-cyber-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-8 px-8 py-6 bg-cyber-blue text-cyber-black font-black uppercase tracking-[0.3em] rounded-2xl">
                {t('nav_register')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
