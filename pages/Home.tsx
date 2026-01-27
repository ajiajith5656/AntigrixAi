
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard, Button, SectionHeading, EncryptionVisual } from '../components/UI';
import { ICONS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-40 overflow-hidden min-h-[90vh] flex items-center">
        {/* Hero Background Image - 100% Visibility fixed stacking */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dpzvvdgwe/image/upload/v1769509874/881433e75e1199b92efdc3f5f7e48120_rpabck.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-100 block"
          />
        </div>

        {/* 
          All overlays, gradients, and tinting removed as requested. 
          Content placed in a higher z-index to stay visible over the image.
        */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold text-cyan-400 mb-10 border-cyan-500/20 bg-slate-950/40 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            NEXT-GEN AI SECURITY
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-8 leading-[1.15] tracking-tight text-gradient-gold drop-shadow-[0_5px_30px_rgba(0,0,0,1)]">
            Your Digital Armor in the Age of AI
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">
            Protecting digital identities from deepfakes, fake ads, AI-generated manipulation, and identity misuse — before damage happens.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" onClick={() => navigate('/contact')} className="w-full sm:w-auto text-lg px-12 py-4">
              Get Protected
            </Button>
            <Button variant="outline" onClick={() => navigate('/solution')} className="w-full sm:w-auto text-lg px-12 py-4 border-cyan-500/60 text-white hover:text-cyan-400 backdrop-blur-md bg-slate-950/60">
              Explore Technology
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Prevention-First Defense</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Artificial Intelligence has transformed how content is created and shared. Unfortunately, the same technology is being misused to manipulate images, create deepfakes, and AI-generated explicit content. 
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Antigrix AI exists to stop this misuse at the source by securing digital identity using advanced AI encryption and real-time verification.
            </p>
          </div>
          <GlassCard className="border-cyan-500/20 glow-cyan">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">{ICONS.Encryption}</div>
                  <div>
                    <div className="font-bold">Encrypted Origins</div>
                    <div className="text-slate-400 text-sm">Security starts at the point of capture.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">{ICONS.Identity}</div>
                  <div>
                    <div className="font-bold">Identity Integrity</div>
                    <div className="text-slate-400 text-sm">Validating human presence in the digital wild.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-rose-500/10 rounded-xl">{ICONS.Threat}</div>
                  <div>
                    <div className="font-bold">Deepfake Neutralization</div>
                    <div className="text-slate-400 text-sm">Stopping AI manipulation before it spreads.</div>
                  </div>
                </div>
             </div>
          </GlassCard>
        </div>
      </section>

      {/* Key Problems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="The AI Crisis" 
          subtitle="Modern problems require post-modern solutions. We've identified the core risks of the generative era."
          accent="red"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="border-rose-500/20">
            <div className="mb-6">{ICONS.Warning}</div>
            <h3 className="text-xl font-bold mb-4">AI-Generated Fake Nudes</h3>
            <p className="text-slate-400">Personal photos misused to create explicit content. We prevent this by making images un-processable by non-authorized AI models.</p>
          </GlassCard>
          <GlassCard className="border-rose-500/20">
            <div className="mb-6">{ICONS.Threat}</div>
            <h3 className="text-xl font-bold mb-4">Deepfakes & Fake Ads</h3>
            <p className="text-slate-400">Celebrities and creators used without consent for scams. Our technology tags every frame as 'Official' and 'Unaltered'.</p>
          </GlassCard>
          <GlassCard className="border-rose-500/20">
            <div className="mb-6">{ICONS.Warning}</div>
            <h3 className="text-xl font-bold mb-4">Political & Authority Misuse</h3>
            <p className="text-slate-400">Manipulated images used for misinformation. We protect institutional trust by securing sovereign digital assets.</p>
          </GlassCard>
        </div>
      </section>

      {/* Core Solution CTA */}
      <section className="bg-cyan-500/5 border-y border-cyan-500/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <EncryptionVisual />
          <div>
            <div className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">PROPRIETARY TECHNOLOGY</div>
            <h2 className="text-4xl font-black mb-8 leading-tight">Introducing Mini AI Encryption™</h2>
            <p className="text-slate-300 text-xl mb-8 leading-relaxed">
              An invisible, non-removable AI-based encryption layer that attaches to every photo and video, preventing unauthorized manipulation or usage.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-2">
                {ICONS.Check}
                <span className="text-sm font-medium">Invisible to humans</span>
              </div>
              <div className="flex items-start gap-2">
                {ICONS.Check}
                <span className="text-sm font-medium">Survives Cropping</span>
              </div>
              <div className="flex items-start gap-2">
                {ICONS.Check}
                <span className="text-sm font-medium">AI-Readable only</span>
              </div>
              <div className="flex items-start gap-2">
                {ICONS.Check}
                <span className="text-sm font-medium">Instant Detection</span>
              </div>
            </div>
            <Button onClick={() => navigate('/solution')}>Learn How It Works</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
