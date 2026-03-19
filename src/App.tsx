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
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-orange-200">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-bold text-2xl tracking-tight text-zinc-900">Subtractry</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#capabilities" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Capabilities</a>
              <a href="#materials" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Materials</a>
              <a href="#industries" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">Industries</a>
              <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-orange-600 transition-colors">About</a>
            </div>

            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm shadow-orange-600/20 hover:shadow-md hover:shadow-orange-600/30"
              >
                Request a Quote
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-600">
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
              className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#capabilities" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:text-orange-600 hover:bg-zinc-50 rounded-md">Capabilities</a>
                <a href="#materials" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:text-orange-600 hover:bg-zinc-50 rounded-md">Materials</a>
                <a href="#industries" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:text-orange-600 hover:bg-zinc-50 rounded-md">Industries</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-zinc-700 hover:text-orange-600 hover:bg-zinc-50 rounded-md">About</a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full mt-4 bg-orange-600 text-white px-3 py-3 rounded-lg font-medium text-center"
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611078512133-727b14732168?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-zinc-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight mb-6">
              Mission-Critical Manufacturing.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                Delivered with Precision.
              </span>
            </h1>
            <p className="mt-4 text-xl text-zinc-600 max-w-3xl mx-auto mb-10">
              Accelerate your supply chain with Subtractry. A global Manufacturing as a Service (MaaS) platform powered by an elite network of manufacturers in India and Southeast Asia, delivering high-precision components for aerospace, defense, and advanced industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/30 flex items-center justify-center gap-2"
              >
                Request a Quote <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => {
                  document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
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
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-200 pt-10"
          >
            <div>
              <div className="text-3xl font-bold text-zinc-900">AS9100</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Certified Network</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900">ITAR</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Compliant Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900">±0.001"</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Tight Tolerances</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900">100%</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mt-1">Traceability</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Manufacturing Capabilities</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
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
              <div key={i} className="group p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{cap.title}</h3>
                <p className="text-zinc-600 mb-6">{cap.desc}</p>
                <a href="#" className="text-orange-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Industries Sections */}
      <section id="materials" className="py-24 bg-zinc-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Aerospace-Grade Materials</h2>
              <p className="text-lg text-zinc-600 mb-8">
                We work with a wide range of high-performance metals and polymers certified for mission-critical applications. Full material traceability and certifications (CoC, Material Test Reports) are available upon request.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-zinc-700"><div className="w-2 h-2 bg-orange-600 rounded-full"></div> Aluminum (7075, 6061)</li>
                  <li className="flex items-center gap-2 text-zinc-700"><div className="w-2 h-2 bg-orange-600 rounded-full"></div> Titanium (Ti-6Al-4V)</li>
                  <li className="flex items-center gap-2 text-zinc-700"><div className="w-2 h-2 bg-orange-600 rounded-full"></div> Stainless Steel (17-4 PH, 316L)</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-zinc-700"><div className="w-2 h-2 bg-orange-600 rounded-full"></div> Inconel (718, 625)</li>
                  <li className="flex items-center gap-2 text-zinc-700"><div className="w-2 h-2 bg-orange-600 rounded-full"></div> High-Temp Polymers (PEEK, ULTEM)</li>
                  <li className="flex items-center gap-2 text-zinc-700"><div className="w-2 h-2 bg-orange-600 rounded-full"></div> Carbon Fiber Composites</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" alt="Industrial Robotics Manufacturing" className="w-full h-auto object-cover min-h-[300px]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent flex items-end p-6">
                  <span className="text-white font-medium text-lg">Advanced Robotics Components</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Subtractry is trusted by leading contractors and innovators across the most demanding sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600" alt="Aerospace & Jet Engine Components" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Aerospace & Jet Engines</h3>
                <p className="text-zinc-600">High-temperature alloys and precision turbine components manufactured to strict AS9100 standards for global aviation.</p>
              </div>
            </div>
            
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" alt="Advanced Robotics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Advanced Robotics</h3>
                <p className="text-zinc-600">Custom end-effectors, structural chassis, and precision gears for industrial automation and next-gen robotics platforms.</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600" alt="Semiconductor Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Semiconductor</h3>
                <p className="text-zinc-600">Ultra-clean, high-precision vacuum chamber components and wafer handling equipment for global foundries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-zinc-50 border-t border-zinc-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Precision in Practice</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              A glimpse into the mission-critical components we manufacture for our global aerospace, defense, and high-precision industry partners.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-md group h-80 md:h-auto">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Complex CNC Machined Aerospace Part" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">CAD Engineering & Prototyping</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400&h=400&crop=center" alt="Engine Component Machining" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">Engine Component Machining</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=400&crop=center" alt="Semiconductor Wafer Inspection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">Semiconductor Wafer Inspection</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400&h=400&crop=center" alt="Turbine Engine Assembly" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">Turbine Engine Assembly</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400&h=400&crop=center" alt="Precision CNC Milling" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">Precision CNC Milling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get a Quote */}
      <section id="about" className="py-24 bg-zinc-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Request a Quote</h2>
              <p className="text-lg text-zinc-400 mb-10">
                Our streamlined quoting process is designed to get your project into production faster. Follow these simple steps to get started.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Upload, title: '1. Upload 3D CAD Models', desc: 'Securely upload your designs. We accept STEP, IGES, STL, and native CAD formats.' },
                  { icon: Settings, title: '2. Specify Requirements', desc: 'Select your desired materials, surface finishes, tolerances, and production quantities.' },
                  { icon: FileText, title: '3. Receive Your Quote', desc: 'Get a comprehensive breakdown of pricing, lead times, and manufacturability feedback.' },
                  { icon: Truck, title: '4. Production & Delivery', desc: 'Once approved, we manufacture your parts with full traceability and deliver them to your facility.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-600/20 text-orange-500 rounded-xl flex items-center justify-center shrink-0 border border-orange-600/30">
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-zinc-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="mt-10 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/30 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Start Your Quote <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
                <img src="/cnc-parts-hero.jpg" alt="Precision CNC Machined Parts" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white font-medium text-lg">High-Precision Machined Components</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="font-bold text-xl text-zinc-900">Subtractry</span>
          </div>
          <div className="text-zinc-500 text-sm">
            Â© {new Date().getFullYear()} Subtractry. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-600">Privacy</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-600">Terms</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-600">Contact</a>
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
    material: '',
    quantity: '',
    requirements: '',
    cadLink: ''
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
          setFormData({ name: '', email: '', phone: '', material: '', quantity: '', requirements: '', cadLink: '' });
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
        <motion.div 
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-50"
        />
      )}
      {isOpen && (
        <motion.div 
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">Request a Quote</h2>
                  <p className="text-sm text-zinc-500 mt-1">
                    Fill out the form below or email us directly at <a href="mailto:founder@subtractry.com" className="text-orange-600 font-medium hover:underline">founder@subtractry.com</a>
                  </p>
                </div>
                <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 rounded-full p-2 transition-colors shrink-0 ml-4">
                  <X size={20} />
                </button>
              </div>

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Request Received!</h3>
                  <p className="text-zinc-600">We'll review your requirements and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                        placeholder="jane@aerospace-corp.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="material" className="block text-sm font-medium text-zinc-700 mb-1">Material *</label>
                      <select 
                        id="material" 
                        required
                        value={formData.material}
                        onChange={(e) => setFormData({...formData, material: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all bg-white"
                      >
                        <option value="" disabled>Select material</option>
                        <option value="Aluminum 6061">Aluminum 6061</option>
                        <option value="Aluminum 7075">Aluminum 7075</option>
                        <option value="Stainless Steel 316L">Stainless Steel 316L</option>
                        <option value="Stainless Steel 17-4 PH">Stainless Steel 17-4 PH</option>
                        <option value="Titanium Ti-6Al-4V">Titanium Ti-6Al-4V</option>
                        <option value="Inconel 718/625">Inconel 718/625</option>
                        <option value="PEEK / ULTEM">PEEK / ULTEM</option>
                        <option value="Other">Other (Specify below)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-zinc-700 mb-1">Quantity *</label>
                      <input 
                        type="number" 
                        id="quantity" 
                        required
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                        placeholder="e.g., 100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cadLink" className="block text-sm font-medium text-zinc-700 mb-1">CAD File Link (Optional)</label>
                    <input 
                      type="url"
                      id="cadLink" 
                      value={formData.cadLink}
                      onChange={(e) => setFormData({...formData, cadLink: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                      placeholder="Link to Google Drive, Dropbox, etc. (STEP, IGES, STL)"
                    />
                    <p className="text-xs text-zinc-500 mt-1">If you don't have a link, we will email you to securely collect your files.</p>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-zinc-700 mb-1">Additional Requirements & Finishes</label>
                    <textarea 
                      id="requirements" 
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all resize-none"
                      placeholder="e.g., Anodize Type II, tight tolerances on bore, etc."
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
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition-all shadow-md shadow-orange-600/20 disabled:opacity-70 flex justify-center items-center"
                    >
                      {status === 'submitting' ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                    <p className="text-xs text-zinc-500 text-center mt-4">
                      By submitting, you agree to Subtractry's Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
