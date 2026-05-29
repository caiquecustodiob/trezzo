/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { CompanySettings, Lead } from '../types';
import { addLead, buildWhatsappLink, formatEvaluationMessage } from '../utils';

interface LeadFormProps {
  settings: CompanySettings;
  onLeadCaptured?: (newLead: Lead) => void;
}

export default function LeadForm({ settings, onLeadCaptured }: LeadFormProps) {
  // Form States
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('Apartamento');

  // Interactive UI States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [lastSubmittedLead, setLastSubmittedLead] = useState<Lead | null>(null);

  // Auto-formatting rule for Brazilian Cel/WhatsApp mask: (XX) XXXXX-XXXX
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // keep numbers only
    if (value.length > 11) value = value.slice(0, 11); // max 11 digits

    // Format matches:
    // (1-2 digits) -> (XX
    // (3-7 digits) -> (XX) XXXXX
    // (8-11 digits) -> (XX) XXXXX-XXXX
    let formatted = '';
    if (value.length > 0) {
      formatted = `(${value.slice(0, 2)}`;
    }
    if (value.length > 2) {
      formatted += `) ${value.slice(2, 7)}`;
    }
    if (value.length > 7) {
      formatted += `-${value.slice(7, 11)}`;
    }

    setWhatsapp(formatted);
    if (errors.whatsapp) {
      setErrors(prev => ({ ...prev, whatsapp: '' }));
    }
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};

    if (!name.trim()) tempErrors.name = 'Por favor, insira seu nome completo.';
    
    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      tempErrors.whatsapp = 'Insira um número de WhatsApp válido com DDD.';
    }

    if (!email.trim()) {
      tempErrors.email = 'Insira seu melhor e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Insira um e-mail com formato válido (ex: nome@email.com).';
    }

    if (!city.trim()) tempErrors.city = 'Informe a cidade/região do imóvel.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate a high-luxury micro loading sequence (800ms)
    setTimeout(() => {
      const cleanPhone = whatsapp.replace(/\D/g, '');
      const leadData = {
        name: name.trim(),
        whatsapp: cleanPhone,
        email: email.trim().toLowerCase(),
        city: city.trim(),
        propertyType,
      };

      // 1. Save to local storage leads array
      const savedLead = addLead(leadData);

      // 2. Play beautiful success animations
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setLastSubmittedLead(savedLead);

      // Trigger visual list updates if the dashboard is watching
      if (onLeadCaptured) {
        onLeadCaptured(savedLead);
      }

      // Reset form fields
      setName('');
      setWhatsapp('');
      setEmail('');
      setCity('');
      setPropertyType('Apartamento');
    }, 1000);
  };

  const handleOpenWhatsappLink = () => {
    if (!lastSubmittedLead) return;
    
    const text = formatEvaluationMessage({
      name: lastSubmittedLead.name,
      whatsapp: lastSubmittedLead.whatsapp,
      email: lastSubmittedLead.email,
      city: lastSubmittedLead.city,
      propertyType: lastSubmittedLead.propertyType,
    });

    const link = buildWhatsappLink(settings.whatsappNumber, text);
    window.open(link, '_blank', 'noreferrer');
  };

  const propertyOptions = [
    'Apartamento',
    'Casa em Condomínio',
    'Casa de Rua',
    'Cobertura / Penthouse',
    'Terreno / Lote',
    'Ponto Comercial / Galpão',
    'Outros'
  ];

  return (
    <section id="avaliacao-form" className="w-full py-24 md:py-32 bg-[#0D0D0D] border-b border-white/5 relative">
      
      {/* Visual lighting background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Informational column (Left Column, span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono font-medium tracking-[0.3em] text-[#C5A059] uppercase mb-4 block">
              Avaliação Profissional Gratuita
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Quer vender seu imóvel?
            </h2>
            
            <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mb-8">
              Preencha seus dados e nossa equipe de avaliadores de mercado entrará em contato para agendar uma vistoria técnica detalhada e apresentar o valor ideal de venda do seu patrimônio.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-base">Cadastro rápido</h4>
                  <p className="text-gray-500 text-sm font-light mt-0.5">Leva menos de 1 minuto para preencher os dados essenciais.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-base">Análise de dados comparativa</h4>
                  <p className="text-gray-500 text-sm font-light mt-0.5">Cruzamos seu imóvel com as vendas reais na sua região.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] shrink-0 mt-1">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-base">Atendimento via chat</h4>
                  <p className="text-gray-500 text-sm font-light mt-0.5">Demos início ao papo direto com o corretor responsável no seu WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Majestic Form Frame (Right Column, span 7) - Elegant Glass */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-[10px] border border-white/10 relative overflow-hidden shadow-2xl">
              
              {/* Form border gradient glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

              <AnimatePresence mode="wait">
                {!submissionSuccess ? (
                  <motion.form
                    key="lead-capture-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Header nested */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1">Preencha os Campos Abaixo</h3>
                      <p className="text-gray-500 text-sm font-light">Os dados abaixo garantem precisão inicial na avaliação.</p>
                    </div>

                    {/* Input: Nome */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lead-name" className="text-xs font-mono tracking-wider font-semibold uppercase text-gray-400">
                        Seu Nome Completo *
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        placeholder="Ex: Carlos Alberto Silva"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                        }}
                        className={`h-12 w-full px-4 rounded-xl bg-black/40 border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                        } text-white font-light text-sm outline-none transition-all duration-300`}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs font-light flex items-center gap-1 mt-0.5">
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Grid Double Columns: WhatsApp & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Input: WhatsApp */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lead-whatsapp" className="text-xs font-mono tracking-wider font-semibold uppercase text-gray-400">
                          Seu WhatsApp *
                        </label>
                        <input
                          id="lead-whatsapp"
                          type="tel"
                          placeholder="Ex: (81) 99999-9999"
                          value={whatsapp}
                          onChange={handleWhatsappChange}
                          className={`h-12 w-full px-4 rounded-xl bg-black/40 border ${
                            errors.whatsapp ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                          } text-white font-light text-sm outline-none transition-all duration-300`}
                        />
                        {errors.whatsapp && (
                          <span className="text-red-500 text-xs font-light flex items-center gap-1 mt-0.5">
                            <AlertCircle size={12} /> {errors.whatsapp}
                          </span>
                        )}
                      </div>

                      {/* Input: Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lead-email" className="text-xs font-mono tracking-wider font-semibold uppercase text-gray-400">
                          Seu Melhor E-mail *
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          placeholder="Ex: carlos@email.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                          }}
                          className={`h-12 w-full px-4 rounded-xl bg-black/40 border ${
                            errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                          } text-white font-light text-sm outline-none transition-all duration-300`}
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs font-light flex items-center gap-1 mt-0.5">
                            <AlertCircle size={12} /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Grid Double Columns: Cidade & Tipo de Imóvel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Input: Cidade */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lead-city" className="text-xs font-mono tracking-wider font-semibold uppercase text-gray-400">
                          Cidade do Imóvel *
                        </label>
                        <input
                          id="lead-city"
                          type="text"
                          placeholder="Ex: Recife / PE"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                            if (errors.city) setErrors(prev => ({ ...prev, city: '' }));
                          }}
                          className={`h-12 w-full px-4 rounded-xl bg-black/40 border ${
                            errors.city ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                          } text-white font-light text-sm outline-none transition-all duration-300`}
                        />
                        {errors.city && (
                          <span className="text-red-500 text-xs font-light flex items-center gap-1 mt-0.5">
                            <AlertCircle size={12} /> {errors.city}
                          </span>
                        )}
                      </div>

                      {/* Input: Tipo do Imóvel */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lead-property-type" className="text-xs font-mono tracking-wider font-semibold uppercase text-gray-400">
                          Tipo do Imóvel *
                        </label>
                        <div className="relative">
                          <select
                            id="lead-property-type"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="h-12 w-full px-4 rounded-xl bg-black/40 border border-white/10 focus:border-[#C5A059] text-white font-light text-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
                          >
                            {propertyOptions.map(option => (
                              <option key={option} value={option} className="bg-neutral-950 text-white">
                                {option}
                              </option>
                            ))}
                          </select>
                          {/* Custom absolute Indicator arrow */}
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            ▼
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 mt-4 rounded-xl bg-gradient-to-r from-[#A6894A] to-[#C5A059] text-black font-bold text-base tracking-wide flex items-center justify-center gap-2 hover:from-[#C5A059] hover:to-[#A6894A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/20 active:scale-98 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Salvando dados...</span>
                        </div>
                      ) : (
                        <>
                          <Sparkles size={18} />
                          Solicitar Avaliação
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-gray-500 font-light mt-2 leading-relaxed">
                      Seus dados estão protegidos por criptografia e serão compartilhados exclusivamente para a avaliação do imóvel.
                    </p>
                  </motion.form>
                ) : (
                  // Elegant visual representation when lead captures successfully!
                  <motion.div
                    key="lead-success-notification"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 animate-pulse">
                      <CheckCircle2 size={36} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Solicitação Gravada!
                    </h3>

                    <p className="text-gray-400 font-light text-sm md:text-base max-w-md leading-relaxed mb-8">
                      Obrigado, <span className="text-[#C5A059] font-semibold">{lastSubmittedLead?.name}</span>! Seus dados foram arquivados para nossa equipe iniciar a análise. 
                      <br /><br />
                      Para acelerar o atendimento e falar diretamente com o corretor responsável, clique no botão gigante abaixo para encaminhar sua ficha pelo WhatsApp!
                    </p>

                    {/* Huge Call to WhatsApp block */}
                    <div className="w-full space-y-4 max-w-sm">
                      <button
                        onClick={handleOpenWhatsappLink}
                        className="w-full h-14 rounded-xl bg-[#25D366] text-white font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-[#20ba5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 active:scale-95 cursor-pointer"
                      >
                        <MessageSquare size={20} />
                        Enviar no WhatsApp
                      </button>

                      <button
                        onClick={() => setSubmissionSuccess(false)}
                        className="text-[#C5A059] text-xs font-semibold hover:underline bg-transparent border-none cursor-pointer"
                      >
                        Fazer nova avaliação
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
