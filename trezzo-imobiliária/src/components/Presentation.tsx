/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Presentation() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0D0D0D] border-b border-white/5 overflow-hidden">
      {/* Decorative Golden Light Streak */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Quote icon representing the premium, close-to-heart commitment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 p-3 rounded-full bg-white/5 border border-white/10 text-[#C5A059]"
        >
          <Quote size={28} className="transform rotate-180" />
        </motion.div>

        {/* Small Section Tag */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-medium tracking-[0.3em] text-gray-500 uppercase mb-4"
        >
          PROPÓSITO & ATENDIMENTO
        </motion.span>

        {/* Text Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8"
        >
          Simplicidade e Transparência
        </motion.h2>

        {/* Crucial requested presentation copy with outstanding typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Accent decoration bars */}
          <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent hidden md:block" />
          <div className="absolute -right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent hidden md:block" />

          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light tracking-wide max-w-3xl">
            "A Trezzo nasceu com o propósito de tornar a negociação imobiliária mais simples, transparente e eficiente. Nosso compromisso é oferecer atendimento próximo e auxiliar nossos clientes a encontrar as melhores oportunidades do mercado."
          </p>
        </motion.div>

        {/* Minimal Matte Gold Separator */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] bg-[#C5A059] mt-12 rounded-full"
        />
        
      </div>
    </section>
  );
}
