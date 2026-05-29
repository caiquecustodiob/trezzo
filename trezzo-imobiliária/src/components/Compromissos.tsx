/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Zap, Compass } from 'lucide-react';

export default function Compromissos() {
  const commitments = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C5A059]" />,
      title: 'Segurança Jurídica',
      description: 'Análise minuciosa de cada certidão e contrato. Garantimos transações 100% seguras, transparentes e livres de riscos ou pendências jurídicas ocultas.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#C5A059]" />,
      title: 'Atendimento Próximo',
      description: 'Para nós, você não é apenas mais uma transação. Oferecemos suporte próximo e acompanhamento customizado antes, durante e após a assinatura do contrato.'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C5A059]" />,
      title: 'Agilidade Assertiva',
      description: 'Seu tempo é extremamente valioso. Desenvolvemos filtros rigorosos e comunicação em tempo real via WhatsApp para poupar você de reuniões exaustivas.'
    },
    {
      icon: <Compass className="w-8 h-8 text-[#C5A059]" />,
      title: 'Foco nos Seus Objetivos',
      description: 'Nosso compromisso é ajudar você a encontrar o imóvel ideal ou vender seu patrimônio de forma justa. Não forçamos negociações desalinhadas ao seu perfil.'
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden">
      
      {/* Decorative center background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/1 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-4">
            Em que Acreditamos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Nossos Compromissos
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Imobiliária nova, valores consolidados. Estabelecemos as bases do nosso trabalho sobre quatro pilares imutáveis de ética e parceria.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-value p-8 rounded-2xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 hover:border-[#C5A059]/25 flex flex-col items-start gap-6 transition-all duration-300 group shadow-lg"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/20 transition-all duration-300">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
