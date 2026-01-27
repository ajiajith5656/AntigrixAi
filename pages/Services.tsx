
import React from 'react';
import { GlassCard, SectionHeading, Button } from '../components/UI';
import { ICONS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="Comprehensive Protection Tiers" 
        subtitle="Security for everyone, from individual users to global public figures."
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Free Tier */}
        <GlassCard className="flex flex-col border-slate-800">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Public Users</h3>
            <div className="text-cyan-400 font-mono text-sm uppercase">Free Protection</div>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            {[
              "Basic Mini AI Encryption™",
              "Blocks AI-generated nude images",
              "Prevents face manipulation & swaps",
              "Stops deceptive image generation",
              "Standard Detection Priority"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                {ICONS.Check} <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full">Sign Up Free</Button>
        </GlassCard>

        {/* Premium Tier */}
        <GlassCard className="flex flex-col border-cyan-500/30 glow-cyan relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-bl-lg">RECOMMENDED</div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Celebrities & Authorities</h3>
            <div className="text-cyan-400 font-mono text-sm uppercase">Enterprise / Premium</div>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            {[
              "Unique face-based encryption code",
              "Official digital identity verification",
              "Real-time alerts for misuse",
              "Automatic fake content blocking",
              "Priority security & platform-level protection",
              "24/7 Threat Response Team",
              "Custom policy management"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200">
                {ICONS.Check} <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-full">Contact for Custom Quote</Button>
        </GlassCard>
      </div>

      <div className="mt-24">
        <SectionHeading title="Who We Serve" subtitle="Reliable armor for diverse digital stakeholders." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ICONS.Users, label: "Content Creators" },
            { icon: ICONS.Globe, label: "Governments" },
            { icon: ICONS.Business, label: "Enterprises" },
            { icon: ICONS.Identity, label: "Journalists" }
          ].map((s, i) => (
            <GlassCard key={i} className="text-center">
              <div className="flex justify-center mb-4">{s.icon}</div>
              <div className="font-bold">{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
