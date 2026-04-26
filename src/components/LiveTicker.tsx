import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

const messages = [
  "CRITICAL: UPI Fraud surge detected in central India. Stay vigilant.",
  "PROTOCOL: MFA mandatory for all institutional accounts.",
  "ALERT: New ransomware variant targeting educational portals.",
  "UPDATE: Cyber Suraksha Conclave 2026 starts in 10 days.",
  "NOTICE: Free digital security toolkit now available for download."
];

export default function LiveTicker() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-cyber-black/80 backdrop-blur-md border-t border-cyber-cyan/30 py-2 z-40 overflow-hidden flex items-center">
      <div className="flex items-center gap-4 px-6 border-r border-cyber-cyan/30 shrink-0 bg-cyber-black">
        <AlertCircle size={14} className="text-india-saffron animate-pulse" />
        <span className="text-[10px] font-mono font-black text-cyber-cyan uppercase tracking-widest">Live Feed</span>
      </div>
      
      <motion.div 
        animate={{ x: ['100%', '-100%'] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-20 py-1"
      >
        {messages.map((msg, i) => (
          <div key={i} className="flex items-center gap-4">
             <span className="w-1.5 h-1.5 rounded-full bg-india-green" />
             <span className="text-[10px] font-mono text-slate-grey uppercase tracking-wider">{msg}</span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {messages.map((msg, i) => (
          <div key={`${i}-dup`} className="flex items-center gap-4">
             <span className="w-1.5 h-1.5 rounded-full bg-india-green" />
             <span className="text-[10px] font-mono text-slate-grey uppercase tracking-wider">{msg}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
