
import React from 'react';
import { GlassCard, SectionHeading, EncryptionVisual, Button } from '../components/UI';
import { ICONS } from '../constants';

const Solution: React.FC = () => {
  const steps = [
    { label: "01", title: "Encrypted Upload", desc: "Original content is encrypted at the moment of creation or upload to the platform." },
    { label: "02", title: "Global Tracking", desc: "Any unauthorized use or attempt to modify the media is automatically detected by our neural network." },
    { label: "03", title: "Instant Enforcement", desc: "Fake or manipulated content is blocked, flagged, or watermarked instantly across partnered ecosystems." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Mini AI Encryption™" 
          subtitle="Our proprietary solution moves beyond detection to active prevention."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <EncryptionVisual />
          <div>
            <h3 className="text-3xl font-bold mb-6">What Is It?</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Mini AI Encryption™ is a proprietary AI-based digital identity and encryption layer attached to every photo or video at the time of upload. Unlike traditional watermarks, it exists within the pixel structure itself.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <GlassCard className="p-4" hoverEffect={false}>
                <div className="text-cyan-400 mb-2">{ICONS.Invisible}</div>
                <div className="font-bold mb-1">Invisible</div>
                <div className="text-xs text-slate-400">Never visible to human eyes or editors.</div>
              </GlassCard>
              <GlassCard className="p-4" hoverEffect={false}>
                <div className="text-cyan-400 mb-2">{ICONS.Speed}</div>
                <div className="font-bold mb-1">Non-removable</div>
                <div className="text-xs text-slate-400">Survives editing, cropping, and screenshots.</div>
              </GlassCard>
              <GlassCard className="p-4" hoverEffect={false}>
                <div className="text-cyan-400 mb-2">{ICONS.AI}</div>
                <div className="font-bold mb-1">AI-Readable</div>
                <div className="text-xs text-slate-400">Detectable only by Antigrix AI systems.</div>
              </GlassCard>
              <GlassCard className="p-4" hoverEffect={false}>
                <div className="text-cyan-400 mb-2">{ICONS.Encryption}</div>
                <div className="font-bold mb-1">Customizable</div>
                <div className="text-xs text-slate-400">Owner controls all usage permissions.</div>
              </GlassCard>
            </div>
          </div>
        </div>

        <SectionHeading title="Operational Workflow" />
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-cyan-500/10 -z-10"></div>
          {steps.map((s, idx) => (
            <GlassCard key={idx} className="relative z-10">
              <div className="w-12 h-12 bg-cyan-500 text-slate-950 font-black rounded-full flex items-center justify-center mb-6 text-xl shadow-lg shadow-cyan-500/20">
                {s.label}
              </div>
              <h4 className="text-xl font-bold mb-4">{s.title}</h4>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <GlassCard className="max-w-3xl mx-auto border-cyan-500/20">
             <h3 className="text-2xl font-bold mb-4">Integrate Our Protection API</h3>
             <p className="text-slate-400 mb-8">Deploy Mini AI Encryption™ across your social platform, government agency, or enterprise application with just 5 lines of code.</p>
             <Button>Developer Documentation</Button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Solution;
