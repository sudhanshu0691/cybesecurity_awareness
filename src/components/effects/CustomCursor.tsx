import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples(prev => [...prev.slice(-4), newRipple]); // Keep last 5 ripples
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousedown', handleClick);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-10 h-10 border border-cyber-cyan rounded-full pointer-events-none z-[9997]"
            style={{
              x: ripple.x,
              y: ripple.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <div className="absolute inset-0 border border-cyber-cyan/50 rounded-full scale-125 animate-ping" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Digital Reticle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center opacity-60 hidden md:flex"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Inner core */}
        <div className={`w-1 h-1 rounded-full bg-cyber-cyan transition-transform duration-300 ${isHovering ? 'scale-[3]' : 'scale-100'}`} />
        
        {/* Outer corners (Cyber Reticle) */}
        <div className="absolute inset-0 border border-cyber-cyan/30 rounded-lg animate-spin-slow" />
        <div className="absolute -inset-1 border-t border-l border-cyber-cyan/50 rounded-tl-sm w-2 h-2" />
        <div className="absolute -inset-1 border-b border-r border-cyber-cyan/50 rounded-br-sm w-2 h-2 ml-auto mt-auto" />
      </motion.div>

      {/* Trailing Glow */}
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 pointer-events-none z-[9998] rounded-full opacity-20 hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
          scale: isHovering ? 1.5 : 1,
        }}
      />
    </>
  );
}
