import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  return (
    <section id="video-showcase" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nossa Essência <span className="gradient-text">em Vídeo</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra um pouco mais sobre quem somos e o que nos move.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-sm"
        >
          <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
            <video
              src="https://helmutiarley.xyz/willsolutions.mp4" 
              controls
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
              title="willsolutions-video-showcase"
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;