
import React, { useState } from 'react';
import { GlassCard, SectionHeading, Button } from '../components/UI';
import { ICONS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Antigrix AI. Our team will reach out to you shortly.');
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        title="Get in Touch" 
        subtitle="Protect your digital identity today. Our experts are ready to assist with enterprise or individual inquiries."
      />

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <GlassCard className="border-cyan-500/20 h-full">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">{ICONS.Mail}</div>
                <div>
                  <div className="font-bold">Email</div>
                  <a href="mailto:antigrixai@gmail.com" className="text-slate-400 hover:text-cyan-400">antigrixai@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">{ICONS.Map}</div>
                <div>
                  <div className="font-bold">Location</div>
                  <div className="text-slate-400">Mumbai, India</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">{ICONS.Globe}</div>
                <div>
                  <div className="font-bold">Global Operations</div>
                  <div className="text-slate-400">Available across all timezones.</div>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 glass rounded-2xl border-cyan-500/10 text-center">
               <div className="text-cyan-400 text-sm font-bold uppercase mb-2">Investor Relations</div>
               <p className="text-xs text-slate-400">For partnership and investment inquiries, please mark your subject as "INVESTOR".</p>
            </div>
          </GlassCard>
        </div>

        <div className="md:col-span-3">
          <GlassCard className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">Send Message</Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;
