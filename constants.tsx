
import React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Fingerprint, 
  Lock, 
  AlertTriangle, 
  EyeOff, 
  Globe, 
  Cpu, 
  Zap,
  Users,
  Briefcase,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Problem', path: '/problem' },
  { label: 'Solution', path: '/solution' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' }
];

export const ICONS = {
  Threat: <ShieldAlert className="w-8 h-8 text-rose-500" />,
  Protection: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
  Identity: <Fingerprint className="w-8 h-8 text-cyan-400" />,
  Encryption: <Lock className="w-8 h-8 text-cyan-400" />,
  Warning: <AlertTriangle className="w-8 h-8 text-rose-500" />,
  Invisible: <EyeOff className="w-8 h-8 text-cyan-400" />,
  Globe: <Globe className="w-6 h-6" />,
  AI: <Cpu className="w-8 h-8 text-cyan-400" />,
  Speed: <Zap className="w-8 h-8 text-cyan-400" />,
  Users: <Users className="w-8 h-8 text-cyan-400" />,
  Business: <Briefcase className="w-8 h-8 text-cyan-400" />,
  Mail: <Mail className="w-6 h-6" />,
  Map: <MapPin className="w-6 h-6" />,
  Check: <CheckCircle2 className="w-5 h-5 text-cyan-400" />
};
