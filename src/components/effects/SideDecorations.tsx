import { motion } from 'motion/react';

export default function SideDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 hidden xl:block overflow-hidden">
      {/* LEFT SIDE: System Status & Binary Stream */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12">
        {/* Vertical Text */}
        <div className="[writing-mode:vertical-rl] text-[10px] font-mono tracking-[0.5em] text-cyber-cyan/40 uppercase">
          Digital Defense Initiative // Batch 2026
        </div>
        
        {/* Tricolor Pulse Dots */}
        <div className="flex flex-col gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-india-saffron shadow-[0_0_8px_#FF9933] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF] animate-pulse delay-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-india-green shadow-[0_0_8px_#138808] animate-pulse delay-700" />
        </div>

        {/* Animated Line */}
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-cyber-cyan/30 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 128] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-8 bg-cyber-cyan shadow-[0_0_15px_#22d3ee]"
          />
        </div>
      </div>

      {/* RIGHT SIDE: System Telemetry & Radar */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12">
        {/* Circular Radar Visual */}
        <div className="relative w-16 h-16 border border-cyber-cyan/20 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 border-t-2 border-india-saffron/40 rounded-full animate-spin-slow" />
          <div className="w-8 h-8 border border-white/10 rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-india-green rounded-full shadow-[0_0_10px_#138808]" />
          
          {/* Scanning Line */}
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-gradient-to-t from-cyber-cyan to-transparent origin-bottom"
          />
        </div>

        {/* System Log Snippets */}
        <div className="flex flex-col gap-4 font-mono text-[8px] text-right text-cyber-cyan/30">
          <div className="flex items-center justify-end gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-red-500 font-bold">SYSTEM LIVE</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-india-saffron/60">NODE: JABALPUR_SEC</span>
            <span>UPLINK: ACTIVE</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-india-green/60">LAT: 23.1815° N</span>
            <span>LON: 79.9864° E</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/60">INTEGRITY: 100%</span>
            <span>SHIELD: ONLINE</span>
          </div>
        </div>
      </div>

      {/* Bottom Tricolor Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] flex">
        <div className="flex-1 bg-india-saffron/30" />
        <div className="flex-1 bg-white/30" />
        <div className="flex-1 bg-india-green/30" />
      </div>
    </div>
  );
}
