
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-slate-950 font-bold">A</div>
            <span className="text-xl font-bold tracking-tighter">ANTIGRIX<span className="text-cyan-400">AI</span></span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-6">
            Pioneering digital armor through advanced AI encryption. Protecting identities across the global digital ecosystem from misuse and manipulation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass rounded-full hover:text-cyan-400 transition-colors">{ICONS.Globe}</a>
            <a href="mailto:antigrixai@gmail.com" className="p-2 glass rounded-full hover:text-cyan-400 transition-colors">{ICONS.Mail}</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/solution" className="hover:text-cyan-400 transition-colors">Core Technology</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Enterprise Protection</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Celebrity Shield</Link></li>
            <li><Link to="/problem" className="hover:text-cyan-400 transition-colors">Threat Database</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            <li><Link to="/why-us" className="hover:text-cyan-400 transition-colors">Vision & Mission</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Antigrix AI Private Limited. All Rights Reserved.</p>
        <p className="mt-2 text-xs">Mumbai, India | Digital Identity Security Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
