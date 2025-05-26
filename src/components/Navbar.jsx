import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Tv, Film, CalendarDays, Sparkles, Info, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const newLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/b7282850-a0da-4f04-babe-1f8136be4773/9007fd7a5f2e83dbd2813094d8de856b.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Início', href: '#home', icon: <Tv size={18} /> },
    { name: 'Planos', href: '#plans', icon: <Film size={18} /> },
    { name: 'Serviços', href: '#services', icon: <Sparkles size={18} /> },
    { name: 'Sobre', href: '#about', icon: <Info size={18} /> },
    { name: 'Contato', href: '#contact', icon: <Phone size={18} /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center">
              <img 
                src={newLogoUrl} 
                alt="WillTV Logo" 
                className="h-10 md:h-12 w-auto" 
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="flex items-center text-slate-200 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-200 hover:text-sky-400 focus:outline-none p-2"
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-xl overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="flex items-center text-slate-200 hover:bg-slate-800 hover:text-sky-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;