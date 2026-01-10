



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const serviceOptions = [
    { name: 'In-Home Support', path: '/services' },
    { name: 'Accommodation', path: '/vacancies' },
    { name: 'Nursing Support', path: '/services' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 h-16 flex items-center ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-black tracking-tighter text-black shrink-0 relative z-[110]">
          Medical<span className="text-seafoam font-serif italic">CARE.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/WhyUs" className="nav-item">Why Us</Link>
          
          {/* Services with Hover Dropdown */}
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="nav-item flex items-center gap-1 cursor-default outline-none">
              Services <ChevronDown size={12} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[60px] -left-4 w-52 bg-white border border-black/5 shadow-xl rounded-2xl py-3 overflow-hidden"
                >
                  {serviceOptions.map((opt) => (
                    <Link
                      key={opt.name}
                      to={opt.path}
                      className="block px-6 py-2 text-[10px] font-black uppercase tracking-widest text-black/50 hover:text-seafoam hover:bg-slate-50 transition-all"
                    >
                      {opt.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/vacancies" className="nav-item">Vacancies</Link>
          <Link to="/News&Blogs" className="nav-item">News & Blogs</Link>
          <Link to="/careers" className="nav-item">Careers</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[110] text-black p-1"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 bg-white z-[105] lg:hidden flex flex-col justify-center px-10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 items-end w-full">
              {['Why Us', 'Services', 'Vacancies', 'News & Blogs', 'Careers'].map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={`/${name.replace(/\s+/g, '')}`}
                    className="text-[11vw] font-black tracking-tighter text-black leading-[1.05] block text-right hover:text-seafoam transition-colors uppercase"
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-item {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: rgba(0,0,0,0.6);
          transition: all 0.3s ease;
        }
        .nav-item:hover {
          color: #000000;
        }
      `}} />
    </nav>
  );
}