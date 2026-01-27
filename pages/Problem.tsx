
import React from 'react';
import { GlassCard, SectionHeading } from '../components/UI';
import { ICONS } from '../constants';

const Problem: React.FC = () => {
  const problems = [
    {
      title: "Image & Identity Misuse",
      icon: ICONS.Warning,
      desc: "AI tools are being used to convert normal photos into explicit and nude images, permanently damaging privacy and dignity.",
      impacts: ["Loss of control over personal images", "Permanent reputational damage"],
      imageUrl: "https://res.cloudinary.com/dpzvvdgwe/image/upload/v1769507805/AI-generated_poverty_porn_fake_images_being_used_by_aid_agencies_u9r5ji.jpg"
    },
    {
      title: "Deepfakes & Fake Advertising",
      icon: ICONS.Threat,
      desc: "AI-generated videos and images are used to create fake ads, scams, and impersonation content.",
      impacts: ["Financial fraud", "Loss of public trust"],
      imageUrl: "https://res.cloudinary.com/dpzvvdgwe/image/upload/v1769508486/In-House-Banner_AI-Deepfake-vs.-Facial-Biometric-The-Battle-for-Secure-Authentication_AW.png_sf9wdv.webp"
    },
    {
      title: "Political & Authority Misuse",
      icon: ICONS.Warning,
      desc: "Images of politicians and officials are manipulated to spread misinformation.",
      impacts: ["Political instability", "National security risks"],
      imageUrl: "https://res.cloudinary.com/dpzvvdgwe/image/upload/v1769509254/Trump_pushes_an_end_to_medical_care_for_transgender_youth_nationally_nhia5i.jpg"
    }
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="The Growing Threat of AI Misuse" 
        subtitle="As Generative AI becomes more accessible, the barriers to high-impact identity fraud have vanished."
        accent="red"
      />
      
      <div className="space-y-24">
        {problems.map((p, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="mb-6">{p.icon}</div>
              <h3 className="text-3xl font-bold mb-6">{p.title}</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {p.desc}
              </p>
              <div className="space-y-4">
                <div className="font-bold text-rose-400 uppercase tracking-widest text-sm mb-2">Critical Impact</div>
                {p.impacts.map((impact, i) => (
                  <div key={i} className="flex items-center gap-3 bg-rose-500/5 border border-rose-500/20 p-4 rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                    <span className="text-slate-300 font-medium">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
               <GlassCard className="aspect-video flex items-center justify-center border-rose-500/10 overflow-hidden relative p-0 group">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={p.imageUrl} 
                      alt={p.title} 
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Decorative Frame Corners */}
                  <div className="absolute inset-0 border-2 border-rose-500/20 m-4 pointer-events-none rounded-lg z-10">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-rose-500"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rose-500"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rose-500"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rose-500"></div>
                  </div>
               </GlassCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
