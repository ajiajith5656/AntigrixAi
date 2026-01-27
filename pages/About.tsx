
import React from 'react';
import { GlassCard, SectionHeading } from '../components/UI';
import { ICONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Securing the Future of Identity" />

      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Antigrix AI is an AI security and digital identity protection platform designed to prevent AI misuse before it causes reputational, emotional, or financial harm. 
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Founded by cybersecurity experts and AI researchers, we believe that in an age of perfect digital replicas, authenticity must be cryptographically guaranteed.
          </p>
        </div>
        <GlassCard className="p-0 overflow-hidden border-cyan-500/20">
          <img src="https://picsum.photos/seed/cyber/800/600" alt="Cybersecurity" className="w-full h-full object-cover opacity-60" />
        </GlassCard>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <GlassCard>
          <h4 className="text-2xl font-bold mb-4 text-cyan-400">Our Vision</h4>
          <p className="text-slate-300 text-lg leading-relaxed">
            To become the world’s most trusted AI misuse protection platform, safeguarding digital identities across global digital ecosystems. We envision a world where digital content is inherently verifiable and secure.
          </p>
        </GlassCard>
        <GlassCard className="border-cyan-500/20">
          <h4 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h4>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
              <span>Protect digital identities using advanced encryption and AI detection</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
              <span>Prevent deepfakes, fake ads, and manipulated content</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
              <span>Preserve trust across social platforms, governments, and digital communities</span>
            </li>
          </ul>
        </GlassCard>
      </div>
      
      <div className="text-center">
         <h3 className="text-2xl font-bold mb-8 italic">"Trust is the ultimate currency of the digital age."</h3>
      </div>
    </div>
  );
};

export default About;
