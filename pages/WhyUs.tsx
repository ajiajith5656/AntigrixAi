
import React from 'react';
import { GlassCard, SectionHeading } from '../components/UI';
import { ICONS } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="The Antigrix Advantage" />

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { title: "Prevention-First", desc: "Unlike competitors who only detect deepfakes after they've gone viral, we prevent the creation and processing of fake content at the source." },
          { title: "Platform-Level", desc: "Designed to scale across entire social networks and government databases, ensuring universal protection." },
          { title: "AI + Encryption", desc: "A hybrid approach combining neural network detection with cryptographic validation for zero-trust authenticity." }
        ].map((item, idx) => (
          <GlassCard key={idx} className="border-cyan-500/10">
            <div className="text-3xl mb-4 font-black text-cyan-500/20">0{idx + 1}</div>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-slate-400">{item.desc}</p>
          </GlassCard>
        ))}
      </div>

      <SectionHeading title="Future Expansion & Roadmap" subtitle="Our vision extends beyond images to the entire horizon of AI security." />
      
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <GlassCard className="bg-slate-900/40">
           <h4 className="text-xl font-bold mb-6 text-cyan-400">Communication Security</h4>
           <ul className="space-y-4 text-slate-400">
             <li className="flex items-center gap-2">{ICONS.Check} <span>Fake voice & call detection</span></li>
             <li className="flex items-center gap-2">{ICONS.Check} <span>Scam number & message analysis</span></li>
             <li className="flex items-center gap-2">{ICONS.Check} <span>Fake news detection engine</span></li>
           </ul>
        </GlassCard>
        <GlassCard className="bg-slate-900/40">
           <h4 className="text-xl font-bold mb-6 text-cyan-400">AI, IT & Robotics</h4>
           <ul className="space-y-4 text-slate-400">
             <li className="flex items-center gap-2">{ICONS.Check} <span>Next-gen AI security protocols</span></li>
             <li className="flex items-center gap-2">{ICONS.Check} <span>Enterprise cyber defense solutions</span></li>
             <li className="flex items-center gap-2">{ICONS.Check} <span>Robotics AI safety integration</span></li>
           </ul>
        </GlassCard>
      </div>

      <div className="glass p-12 rounded-3xl text-center border-cyan-500/20">
         <div className="inline-block p-4 bg-cyan-500/10 rounded-2xl mb-6">{ICONS.Globe}</div>
         <h3 className="text-3xl font-bold mb-4">Scalable Global Deployment</h3>
         <p className="text-slate-400 max-w-2xl mx-auto text-lg">
           Antigrix AI is designed to meet the rigorous demands of creators, governments, and enterprises worldwide. We are ready for the global stage.
         </p>
      </div>
    </div>
  );
};

export default WhyUs;
