/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Sparkles, Medal } from 'lucide-react';

export default function Differentials() {
  const badMetrics = [
    { text: 'Mais de 10 anos de mercado (clichê corporativo)' },
    { text: 'Mais de 500 imóveis vendidos (número sem contexto)' },
    { text: 'Abordagem massiva e fria de anúncios' }
  ];

  const honestDifferentials = [
    {
      title: 'Atendimento personalizado',
      desc: 'Analisamos seus objetivos de vida e perfil para buscar apenas o que realmente faz sentido.'
    },
    {
      title: 'Transparência em todas as etapas',
      desc: 'Sem taxas ocultas, contratos nebulosos ou burocracia desnecessária. Clareza absoluta.'
    },
    {
      title: 'Comunicação rápida e eficiente',
      desc: 'Nossos corretores respondem com agilidade no WhatsApp. Chega de esperar dias por retorno.'
    },
    {
      title: 'Compromisso com seus objetivos',
      desc: 'Não forçamos fechamento de negócios. Trabalhamos exclusivamente para satisfazer seu plano.'
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden">
      {/* Subtle light background glows */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#C5A059]/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-white/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-4">
            Nossa Proposta de Valor
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Diferenciais Baseados na Verdade
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Evitamos fórmulas prontas e jargões inflados. Criamos conexões de longo prazo pautadas na transparência real.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Legacy/Cliché Side (Left - grid span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl bg-neutral-900/40 border border-red-900/10 p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-red-500 mb-6">
                <ShieldAlert size={20} />
                <span className="text-xs font-mono tracking-wider font-semibold uppercase">O Mercado Tradicional</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-300 mb-4">
                Médias Clássicas Prometidas
              </h3>
              
              <p className="text-gray-500 font-light text-sm mb-8">
                Muitas imobiliárias se apoiam em estatísticas genéricas e números inflados para tentar transmitir autoridade imediata.
              </p>

              <div className="space-y-4">
                {badMetrics.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-red-950/10 border border-red-950/20 rounded-xl p-4">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                      <X size={14} />
                    </div>
                    <span className="text-[#A3A3A3] text-sm font-light">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8">
              <p className="text-xs text-gray-600 italic">
                * Nós acreditamos que cada atendimento é único e números frios não contam a sua história.
              </p>
            </div>
          </motion.div>

          {/* Genuine/Trezzo Side (Right - grid span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-white/[0.03] backdrop-blur-[10px] border border-[#C5A059]/20 p-8 md:p-10 flex flex-col justify-between relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Medal size={120} className="text-[#C5A059]" />
            </div>

            <div>
              <div className="flex items-center gap-3 text-[#C5A059] mb-6">
                <Sparkles size={18} />
                <span className="text-xs font-mono tracking-wider font-semibold uppercase">O Jeito Trezzo</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Nosso Compromisso Real
              </h3>
              
              <p className="text-gray-400 font-light text-base mb-8">
                Focamos no que realmente gera valor para a sua jornada: honestidade, velocidade e segurança jurídica.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {honestDifferentials.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-5 rounded-xl bg-black/40 border border-white/5 hover:border-[#C5A059]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0">
                        <Check size={14} />
                      </div>
                      <h4 className="text-white font-semibold text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-mono tracking-[0.2em] uppercase">Trezzo Imobiliária</span>
              <span className="text-xs text-[#C5A059] font-semibold">100% Honesto • 100% Digital</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
