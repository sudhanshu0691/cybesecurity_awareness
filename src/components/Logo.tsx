import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  wrapperClassName?: string;
  showGlow?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '',
  wrapperClassName = '',
  showGlow = true
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const glowClass = showGlow ? 'neon-glow' : '';
  
  // Using local logo from public folder with proper base path for GitHub Pages
  const logoUrl = `${import.meta.env.BASE_URL}iiesp-logo.png`;

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden ${glowClass} ${wrapperClassName} ${className}`}>
      <img 
        src={logoUrl} 
        alt="IIESP Logo" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default Logo;
