/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { CompanySettings } from '../types';
import { buildWhatsappLink, formatGeneralContactMessage } from '../utils';
import Logo from './Logo';

interface HeroProps {
  settings: CompanySettings;
}

export default function Hero({ settings }: HeroProps) {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('avaliacao-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsappGeneral = () => {
    const text = formatGeneralContactMessage('especialista');
    const link = buildWhatsappLink(settings.whatsappNumber, text);
    window.open(link, '_blank', 'noreferrer');
  };

  const bgImgSrc = '/src/assets/images/download.jpg';

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImgSrc}
          alt="Trezzo Hero Background"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial gradient to shadow the edges and focus high-luxury center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0A]/95" />
      </div>

      {/* Styled Navbar inside Hero */}
      <header className="relative w-full z-10 px-6 py-6 md:px-12 flex items-center justify-between border-b border-white/5 bg-[#0A0A0A]/30 backdrop-blur-sm">
        <div className="flex items-center">
          <Logo variant="horizontal-white" size="md" className="scale-90 md:scale-100 origin-left" />
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center mt-8 pb-12">
        
        {/* Floating Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-xs font-semibold tracking-widest uppercase font-mono"
        >
          Seja bem-vindo ao Extraordinário
        </motion.div>

        {/* Strong Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] md:leading-[1.05]"
          id="hero-title"
        >
          Trezzo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6894A] via-[#C5A059] to-[#C5A059]">Imobiliária</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12 tracking-wide"
        >
          Conectando pessoas aos imóveis certos.
        </motion.p>

        {/* Primary Lead Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-xl"
        >
          {/* Button: Quero Comprar */}
          <button
            onClick={handleScrollToServices}
            className="group w-full sm:w-auto h-14 px-8 rounded-xl bg-white text-black font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 active:scale-95 cursor-pointer"
          >
            Quero Comprar
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button: Quero Vender */}
          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto h-14 px-8 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all duration-300 hover:border-neutral-700 active:scale-95 cursor-pointer"
          >
            Quero Vender
          </button>

          {/* Button: Falar no WhatsApp */}
          <button
            onClick={handleWhatsappGeneral}
            className="w-full sm:w-auto h-14 px-8 rounded-xl bg-[#C5A059] text-black font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-[#A6894A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/20 active:scale-95 cursor-pointer"
          >
            <MessageSquare size={18} />
            Falar no WhatsApp
          </button>
        </motion.div>
      </div>

      {/* Hero Footnotes / Visual Anchors */}
      <div className="relative z-10 w-full px-6 py-6 border-t border-white/5 bg-[#0A0A0A]/60 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-mono">
        <p>© {new Date().getFullYear()} Trezzo Imobiliária. All Rights Reserved.</p>
      </div>
    </section>
  );
}
