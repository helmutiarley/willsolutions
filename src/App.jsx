import React from 'react';
import { Toaster } from '@/components/ui/toaster.jsx';
import Navbar from '@/components/Navbar.jsx';
import Hero from '@/components/Hero.jsx';
import Services from '@/components/Services.jsx';
import VideoShowcase from '@/components/VideoShowcase.jsx';
import StreamingPlans from '@/components/StreamingPlans.jsx';
import StreamingRequirements from '@/components/StreamingRequirements.jsx';
import TrustedBrands from '@/components/TrustedBrands.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const whatsappNumber = "+558596101073";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <TrustedBrands />
            <Services />
            <VideoShowcase />
            <StreamingPlans />
            <StreamingRequirements />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber={whatsappNumber} />
      <Toaster />
    </div>
  );
}

export default App;