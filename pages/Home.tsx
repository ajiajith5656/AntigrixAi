
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard, Button, SectionHeading, EncryptionVisual } from '../components/UI';
import { ICONS } from '../constants';

const HERO_IMAGE = "https://res.cloudinary.com/dpzvvdgwe/image/upload/v1769517307/Blush_Social_Media_Live_Event_Facebook_Ad_q5ir0w.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section - Single Responsive Image (400px Height) */}
      <section className="relative w-full pt-20 flex flex-col">
        {/* Image Container: Fixed 400px height across all devices */}
        <div className="w-full h-[400px] relative overflow-hidden bg-slate-950 border-b border-slate-900 shadow-xl">
          <img 
            src={HERO_IMAGE} 
            alt="Antigrix Security Visual" 
            className="w-full h-full object-cover block select-none pointer-events-none"
            loading="eager"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
        </div>

        {/* Hero Marketing Content - Positioned BELOW for 100% visibility */}
        <div className="bg-slate-950 py-16 md:py-24 border-b border-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            {/* 1. Tag at the VERY top */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-cyan-400 mb-8 border border-cyan-500/20 bg-cyan-500/5">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              NEXT-GEN AI SECURITY
            </div>
            
            {/* 2. Title: Reduced size, forced to SINGLE LINE on all displays */}
            <h1 className="w-full whitespace-nowrap overflow-hidden text-ellipsis font-display font-black mb-8 tracking-tight text-gradient-gold px-2 
              text-[5.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Your Digital Armor in the Age of AI
            </h1>
            
            {/* 3. Subtext */}
            <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Protecting digital identities from deepfakes, fake ads, AI-generated manipulation, and identity misuse — before damage happens.
            </p>
            
            {/* 4. Buttons */}
            <div className="flex flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
              <Button variant="primary" onClick={() => navigate('/contact')} className="text-sm md:text-base px-6 md:px-10 py-3 md:py-4">
                Get Protected
              </Button>
              <Button variant="outline" onClick={() => navigate('/solution')} className="text-sm md:text-base px-6 md:px-10 py-3 md:py-4 border-cyan-500/40 text-cyan-400">
                Explore Technology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prevention-First Defense</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Artificial Intelligence has transformed how content is created and shared. Unfortunately, the same technology is being misused to manipulate images, create deepfakes, and AI-generated explicit content. 
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Antigrix AI exists to stop this misuse at the source by securing digital identity using advanced AI encryption and real-time verification.
            </p>
          </div>
          <GlassCard className="border-cyan-500/20 glow-cyan w-full">
             <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="p-3 md:p-4 bg-cyan-500/10 rounded-xl shrink-0">{ICONS.Encryption}</div>
                  <div>
                    <div className="font-bold text-lg">Encrypted Origins</div>
                    <div className="text-slate-400 text-sm">Security starts at the point of capture.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="p-3 md:p-4 bg-cyan-500/10 rounded-xl shrink-0">{ICONS.Identity}</div>
                  <div>
                    <div className="font-bold text-lg">Identity Integrity</div>
                    <div className="text-slate-400 text-sm">Validating human presence in the digital wild.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="p-3 md:p-4 bg-rose-500/10 rounded-xl shrink-0">{ICONS.Threat}</div>
                  <div>
                    <div className="font-bold text-lg">Deepfake Neutralization</div>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <GlassCard className="border-rose-500/20 sm:col-span-2 lg:col-span-1">
            <div className="mb-6">{ICONS.Warning}</div>
            <h3 className="text-xl font-bold mb-4">Political & Authority Misuse</h3>
            <p className="text-slate-400">Manipulated images used for misinformation. We protect institutional trust by securing sovereign digital assets.</p>
          </GlassCard>
        </div>
      </section>

      {/* Core Solution CTA */}
      <section className="bg-slate-900/30 border-y border-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <EncryptionVisual />
          <div>
            <div className="text-cyan-400 font-bold tracking-widest text-xs md:text-sm mb-4 uppercase">PROPRIETARY TECHNOLOGY</div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 leading-tight">Introducing Mini AI Encryption™</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
              An invisible, non-removable AI-based encryption layer that attaches to every photo and video, preventing unauthorized manipulation or usage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="flex items-center gap-3">
                {ICONS.Check}
                <span className="text-sm font-semibold">Invisible to humans</span>
              </div>
              <div className="flex items-center gap-3">
                {ICONS.Check}
                <span className="text-sm font-semibold">Survives Cropping</span>
              </div>
              <div className="flex items-center gap-3">
                {ICONS.Check}
                <span className="text-sm font-semibold">AI-Readable only</span>
              </div>
              <div className="flex items-center gap-3">
                {ICONS.Check}
                <span className="text-sm font-semibold">Instant Detection</span>
              </div>
            </div>
            <Button onClick={() => navigate('/solution')} className="w-full sm:w-auto">Learn How It Works</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
