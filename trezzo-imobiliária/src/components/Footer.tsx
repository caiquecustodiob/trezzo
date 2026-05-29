/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Instagram, MessageSquare, MapPin, Award, ArrowUp } from 'lucide-react';
import { CompanySettings } from '../types';
import Logo from './Logo';

interface FooterProps {
  settings: CompanySettings;
}

export default function Footer({ settings }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A0A0A] text-gray-400 py-16 md:py-24 border-t border-white/5 relative z-10">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Logo Brand Descriptor Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="full" size="md" className="origin-left scale-95" />
            <p className="text-gray-500 font-light text-sm leading-relaxed max-w-sm">
              Inovando o mercado imobiliário com foco em conexões assertivas, digitalização com calor humano e negociações seguras.
            </p>
            
            {/* Social Channels Row */}
            <div className="flex items-center gap-3">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#C5A059] hover:bg-[#C5A059]/10 hover:border-[#C5A059]/20 transition-all duration-300"
                title="Instagram Trezzo"
              >
                <Instagram size={18} />
              </a>

              <a
                href={`mailto:${settings.emailAddress}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#C5A059] hover:bg-[#C5A059]/10 hover:border-[#C5A059]/20 transition-all duration-300"
                title="E-mail Trezzo"
              >
                <Mail size={18} />
              </a>

              <a
                href={`https://wa.me/${settings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#C5A059] hover:bg-[#C5A059]/10 hover:border-[#C5A059]/20 transition-all duration-300"
                title="WhatsApp Trezzo"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Info & Services Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white font-mono text-xs tracking-widest font-bold uppercase">Navegação Rápida</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#avaliacao-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('avaliacao-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Avaliação de Imóvel
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Headquarters Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white font-mono text-xs tracking-widest font-bold uppercase">Sede & Contato</h3>
            
            <div className="space-y-4 text-sm font-light">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs md:text-sm leading-relaxed">{settings.address}</span>
              </div>

              {/* Electronic Mail */}
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#C5A059] shrink-0" />
                <a href={`mailto:${settings.emailAddress}`} className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                  {settings.emailAddress}
                </a>
              </div>

              {/* CRECI Badge */}
              <div className="flex items-center gap-3">
                <Award size={17} className="text-[#C5A059] shrink-0" />
                <div className="flex items-center gap-1.5 select-none">
                  <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">
                    {settings.creci}
                  </span>
                  <span className="text-[10px] text-gray-600 font-mono leading-none">
                    (venda segura)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dividers & Top Roll */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs text-gray-600">
              Desenvolvido por <strong className="text-gray-500 font-medium">Caique Custodio — NIT (Núcleo de Inteligência e Tecnologia) — Nordeste Locações</strong>.
            </p>
            <p className="text-[10px] text-gray-700 leading-none">
              NIT © todos os direitos reservados ante a arquitetura Trezzo.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#C5A059]/15 hover:border-[#C5A059]/30 hover:text-[#C5A059] flex items-center justify-center text-gray-400 transition-all duration-300 active:scale-90 cursor-pointer shadow-lg"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
