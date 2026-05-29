/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { CompanySettings } from '../types';
import { buildWhatsappLink, formatGeneralContactMessage } from '../utils';

interface CTAProps {
  settings: CompanySettings;
}

export default function CTA({ settings }: CTAProps) {
  
  const handleTalkToSpecialist = () => {
    const text = formatGeneralContactMessage('especialista');
    const link = buildWhatsappLink(settings.whatsappNumber, text);
    window.open(link, '_blank', 'noreferrer');
  };

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#0A0A0A] border-b border-white/5 overflow-hidden flex items-center justify-center">
      
      {/* Decorative Golden Ambient Backlights */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
      <div className="absolute w-[600px] h-[350px] bg-[#C5A059]/5 rounded-full blur-[140px] -bottom-32 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Animated small subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-[0.4em] text-[#C5A059] uppercase mb-6"
        >
          DÊ O PRÓXIMO PASSO
        </motion.p>

        {/* Dynamic High-Impact Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 select-none leading-tight"
        >
          Tudo começa com uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6894A] to-[#C5A059]">conversa</span>.
        </motion.h2>

        {/* Text paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Quer comprar, vender ou apenas entender as tendências de mercado para a sua região? Nosso time de especialistas está pronto para oferecer um atendimento exclusivo.
        </motion.p>

        {/* The requested GIGANTIC and highly attractive CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={handleTalkToSpecialist}
            className="group relative h-16 md:h-20 px-8 md:px-12 rounded-2xl bg-[#C5A059] text-black font-extrabold text-lg md:text-xl tracking-wide flex items-center justify-center gap-3 md:gap-4 hover:bg-[#A6894A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A059]/30 active:scale-95 cursor-pointer"
          >
            {/* Pulsing visual border on hover */}
            <span className="absolute inset-0 rounded-2xl border border-white/40 scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
            <MessageSquare size={22} className="md:w-6 md:h-6" />
            Falar com um Especialista
            <ArrowUpRight size={18} className="text-black/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Dynamic Online badge helper */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-500 text-xs font-mono">Consultores online agora</span>
        </div>

      </div>
    </section>
  );
}
