import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Settings, Layers, Box, 
  Cpu, Truck, ShieldCheck, Zap, Globe, FileText, Upload
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">Subtractry</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#capabilities" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Capabilities</a>
              <a href="#materials" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Materials</a>
              <a href="#industries" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Industries</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
            </div>

            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30"
              >
                Request a Quote
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#capabilities" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Capabilities</a>
                <a href="#materials" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Materials</a>
                <a href="#industries" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Industries</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">About</a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full mt-4 bg-blue-600 text-white px-3 py-3 rounded-lg font-medium text-center"
                >
                  Request a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Mission-Critical Manufacturing.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Delivered with Precision.
              </span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              Accelerate your supply chain with Subtractry. We provide high-precision, custom manufacturing for Aerospace and Defense innovators across the US and Europe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                Request a Quote <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => {
                  document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                Explore Capabilities
              </button>
            </div>
          </motion.div>

          {/* Stats/Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-10"
          >
            <div>
              <div className="text-3xl font-bold text-slate-900">AS9100</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Certified Network</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">ITAR</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Compliant Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">±0.001"</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Tight Tolerances</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Traceability</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Manufacturing Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive suite of manufacturing processes to bring your designs to life, from single prototypes to high-volume production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Settings, title: 'CNC Machining', desc: '3-axis and 5-axis milling for aerospace-grade alloys with tight tolerances.' },
              { icon: Layers, title: 'Additive Manufacturing', desc: 'Advanced 3D printing for rapid prototyping and complex, lightweight geometries.' },
              { icon: Box, title: 'Sheet Metal Fabrication', desc: 'Precision laser cutting, bending, and welding for rugged enclosures and brackets.' },
              { icon: Cpu, title: 'Injection Molding', desc: 'High-quality tooling and molding for scalable, mission-critical production.' }
            ].map((cap, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                <p className="text-slate-600 mb-6">{cap.desc}</p>
                <a href="#" className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Industries Sections */}
      <section id="materials" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Aerospace-Grade Materials</h2>
              <p className="text-lg text-slate-600 mb-8">
                We work with a wide range of high-performance metals and polymers certified for mission-critical applications. Full material traceability and certifications (CoC, Material Test Reports) are available upon request.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Aluminum (7075, 6061)</li>
                  <li className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Titanium (Ti-6Al-4V)</li>
                  <li className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Stainless Steel (17-4 PH, 316L)</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Inconel (718, 625)</li>
                  <li className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> High-Temp Polymers (PEEK, ULTEM)</li>
                  <li className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Carbon Fiber Composites</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1565439390-28546de54204?auto=format&fit=crop&q=80&w=800" alt="Precision CNC Machined Part" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">5-Axis CNC Machined Titanium Impeller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Subtractry is trusted by leading contractors and innovators across the most demanding sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=600" alt="Commercial Aviation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Commercial Aviation</h3>
                <p className="text-slate-600">Lightweight structural components, interior brackets, and engine parts manufactured to strict AS9100 standards.</p>
              </div>
            </div>
            
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" alt="Defense Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Defense Systems</h3>
                <p className="text-slate-600">ITAR-compliant manufacturing for land, sea, and air defense systems. Secure data handling and domestic production.</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=600" alt="Space Exploration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Space Exploration</h3>
                <p className="text-slate-600">High-performance alloys and composites for satellites, launch vehicles, and orbital infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Precision in Practice</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A glimpse into the mission-critical components we manufacture for our defense and aerospace partners.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-md group h-80 md:h-auto">
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" alt="Complex CNC Machined Aerospace Part" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">CAD Engineering & Prototyping</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=400" alt="Drone Chassis Component" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">UAV Components</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" alt="Satellite Housing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">Satellite Structures</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" alt="Turbine Blade" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">Turbine Blades</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=400" alt="Optics Mount" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">Precision Optics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="about" className="py-24 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Agile Supply Chain Solutions</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A secure, streamlined process designed for the rigorous demands of defense and aerospace.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
            
            {[
              { icon: FileText, title: '1. Submit Request', desc: 'Reach out via our secure form or email founder@subtractry.com.' },
              { icon: Cpu, title: '2. Engineering Review', desc: 'Our experts analyze your requirements for manufacturability.' },
              { icon: Settings, title: '3. Precision Production', desc: 'Manufactured by our vetted, defense-ready partner network.' },
              { icon: ShieldCheck, title: '4. Secure Delivery', desc: 'Fully inspected, traceable parts delivered to your facility.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 border-4 border-slate-900">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="font-bold text-xl text-slate-900">Subtractry</span>
          </div>
          <div className="text-slate-500 text-sm">
            Â© {new Date().getFullYear()} Subtractry. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600">Terms</a>
            <a href="#" className="text-slate-400 hover:text-slate-600">Contact</a>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}

function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', email: '', phone: '', requirements: '' });
        }, 3000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Request a Quote</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Fill out the form below or email us directly at <a href="mailto:founder@subtractry.com" className="text-blue-600 font-medium hover:underline">founder@subtractry.com</a>
                  </p>
                </div>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors shrink-0 ml-4">
                  <X size={20} />
                </button>
              </div>

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600">We'll review your requirements and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                        placeholder="jane@aerospace-corp.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-1">What do you want to manufacture? *</label>
                    <input 
                      type="text"
                      id="requirements" 
                      required
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                      placeholder="e.g., 500 units of aluminum 7075 brackets for drone chassis"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                      {errorMessage || 'Something went wrong. Please try again or contact support.'}
                    </div>
                  )}

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all shadow-md shadow-blue-600/20 disabled:opacity-70 flex justify-center items-center"
                    >
                      {status === 'submitting' ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting, you agree to Subtractry's Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
