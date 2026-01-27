
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`glass p-6 rounded-2xl transition-all duration-300 ${hoverEffect ? 'hover:scale-[1.02] hover:border-cyan-500/30' : ''} ${className}`}>
    {children}
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 glow-cyan",
    secondary: "bg-slate-800 hover:bg-slate-700 text-cyan-400",
    outline: "border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400",
    danger: "bg-rose-600 hover:bg-rose-500 text-white glow-red"
  };
  
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const SectionHeading: React.FC<{ title: string; subtitle?: string; centered?: boolean; accent?: 'cyan' | 'red' }> = ({ 
  title, subtitle, centered = true, accent = 'cyan' 
}) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${accent === 'cyan' ? 'text-gradient-cyan' : 'text-gradient-red'}`}>
      {title}
    </h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export const EncryptionVisual: React.FC = () => (
  <div className="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-3xl glass border border-cyan-500/20">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="grid grid-cols-12 gap-1 w-full h-full p-2">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="h-4 bg-cyan-500/20 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}></div>
        ))}
      </div>
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 border border-cyan-400/50 animate-float">
        <div className="text-cyan-400 text-5xl">🛡️</div>
      </div>
      <div className="text-center">
        <div className="text-cyan-400 font-mono text-sm mb-2">MINI_AI_ENCRYPTION_V2.1</div>
        <div className="text-slate-100 text-xl font-bold tracking-widest">ACTIVE PROTECTION</div>
      </div>
    </div>
  </div>
);
