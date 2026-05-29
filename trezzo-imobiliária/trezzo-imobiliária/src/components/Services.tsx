/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, TrendingUp, MessageCircle } from 'lucide-react';
import { CompanySettings } from '../types';
import { buildWhatsappLink, formatGeneralContactMessage } from '../utils';

interface ServicesProps {
  settings: CompanySettings;
}

export default function Services({ settings }: ServicesProps) {
  
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('avaliacao-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Try to focus the first input inside the form
      setTimeout(() => {
        const input = document.getElementById('lead-name') as HTMLInputElement | null;
        if (input) input.focus();
      }, 800);
    }
  };

  const handleWhatsappService = (type: 'comprar' | 'consultoria') => {
    const text = formatGeneralContactMessage(type === 'comprar' ? 'comprar' : 'especialista');
    const link = buildWhatsappLink(settings.whatsappNumber, text);
    window.open(link, '_blank', 'noreferrer');
  };

  const services = [
    {
      id: 'compra',
      icon: <Home className="w-8 h-8 text-[#C5A059]" />,
      title: 'Compra de Imóveis',
      description: 'Encontramos oportunidades alinhadas ao seu perfil e objetivo.',
      actionLabel: 'Buscar meu imóvel',
      action: () => handleWhatsappService('comprar')
    },
    {
      id: 'venda',
      icon: <Building2 className="w-8 h-8 text-[#C5A059]" />,
      title: 'Venda de Imóveis',
      description: 'Ajudamos você a divulgar e negociar seu imóvel com segurança.',
      actionLabel: 'Anunciar meu imóvel',
      action: (e: any) => handleScrollToForm(e)
    },
    {
      id: 'consultoria',
      icon: <TrendingUp className="w-8 h-8 text-[#C5A059]" />,
      title: 'Consultoria Imobiliária',
      description: 'Orientação para quem deseja investir ou tomar decisões mais seguras.',
      actionLabel: 'Agendar consultoria',
      action: () => handleWhatsappService('consultoria')
    }
  ];

  return (
    <section id="servicos" className="w-full py-24 md:py-32 bg-[#0A0A0A] border-b border-white/5 relative">
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Como podemos ajudar você hoje?
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Seja para morar ou investir, cobrimos todas as etapas da jornada imobiliária com assessoria consultiva focada no seu resultado.
          </p>
        </div>

        {/* 3 cards elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 hover:border-[#C5A059]/30 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/20 transition-colors">
                  {svc.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors font-sans">
                  {svc.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
                  {svc.description}
                </p>
              </div>

              {/* Action trigger */}
              <button
                onClick={svc.action}
                className="w-full h-11 rounded-lg bg-white/5 border border-white/10 hover:bg-[#C5A059] hover:text-black hover:border-transparent text-gray-300 font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                {svc.actionLabel}
                <MessageCircle size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
