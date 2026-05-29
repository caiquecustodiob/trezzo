/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanySettings, Lead } from './types';

// Default corporate coordinates for Trezzo Imobiliária
export const DEFAULT_SETTINGS: CompanySettings = {
  // Ceará / Fortaleza oriented number requested by the user, customizable anytime in our admin workspace
  whatsappNumber: '558898322288', 
  whatsappDisplay: '(88) 9832-2288',
  instagramUrl: 'https://www.instagram.com/p/DYnl4oLunBM/?igsh=MTEybTVqd3dlOGN2NA%3D%3D',
  emailAddress: 'contato@trezzoimobiliaria.com.br',
  creci: 'CRECI 28419-J',
  address: 'Av. Dom Luís, 1200 - Aldeota, Fortaleza - CE, 60160-230',
};

// Initial realistic leads so the local Leads Dashboard isn't blank on launch
const SEED_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Carlos Alberto Menezes',
    whatsapp: '8898322288',
    email: 'carlos.menezes@gail.com',
    city: 'Fortaleza',
    propertyType: 'Apartamento de alto padrão (Meireles)',
    date: new Date(Date.now() - 4 * 3600000).toISOString(), // 4h ago
    status: 'new',
    notes: 'Interessado em agendar avaliação do seu imóvel no Meireles para venda rápida.'
  },
  {
    id: 'lead-2',
    name: 'Ana Carolina Vasconcelos',
    whatsapp: '88998877665',
    email: 'carol.vasc@outlook.com',
    city: 'Aquiraz',
    propertyType: 'Casa em condomínio (Porto das Dunas)',
    date: new Date(Date.now() - 28 * 3600000).toISOString(), // 1.2 days ago
    status: 'contacted',
    notes: 'Contatada por WhatsApp. Deseja consultoria para investimento em condomínio de luxo.'
  }
];

export function getCompanySettings(): CompanySettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  const saved = localStorage.getItem('trezzo_settings');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Automatically migrate from old placeholder numbers to ensure the user gets their new CE phone activated instantly
      if (parsed.whatsappNumber === '5581999990000' || !parsed.whatsappNumber) {
        localStorage.removeItem('trezzo_settings');
        return DEFAULT_SETTINGS;
      }
      return { ...DEFAULT_SETTINGS, ...parsed };
    } catch {
      return DEFAULT_SETTINGS;
    }
  }
  return DEFAULT_SETTINGS;
}

export function saveCompanySettings(settings: CompanySettings): void {
  localStorage.setItem('trezzo_settings', JSON.stringify(settings));
}

export function getLeads(): Lead[] {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem('trezzo_leads');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return SEED_LEADS;
    }
  }
  // If not present, save seed leads to localstorage
  localStorage.setItem('trezzo_leads', JSON.stringify(SEED_LEADS));
  return SEED_LEADS;
}

export function saveLeads(leads: Lead[]): void {
  localStorage.setItem('trezzo_leads', JSON.stringify(leads));
}

export function addLead(newLead: Omit<Lead, 'id' | 'date' | 'status'>): Lead {
  const leads = getLeads();
  const leadWithMeta: Lead = {
    ...newLead,
    id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    date: new Date().toISOString(),
    status: 'new',
  };
  const updated = [leadWithMeta, ...leads];
  saveLeads(updated);
  return leadWithMeta;
}

/**
 * Builds a universal WhatsApp redirect link with custom structured message text
 */
export function buildWhatsappLink(phone: string, text: string): string {
  // Clean phone number from non-digits
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
}

/**
 * Prepares professional, highly converting WhatsApp messages based on customer action
 */
export function formatEvaluationMessage(lead: Omit<Lead, 'id' | 'date' | 'status'>): string {
  return `Olá Trezzo Imobiliária! Gostaria de receber uma avaliação do meu imóvel para venda.

Aqui estão os dados do solicitante:
• *Nome:* ${lead.name}
• *WhatsApp:* ${lead.whatsapp}
• *E-mail:* ${lead.email}
• *Cidade:* ${lead.city}
• *Tipo do Imóvel:* ${lead.propertyType}

Aguardo o contato de um consultor para continuarmos o atendimento! Obrigado.`;
}

export function formatGeneralContactMessage(topic: 'comprar' | 'vender' | 'especialista'): string {
  const intro = topic === 'comprar' 
    ? 'Olá Trezzo Imobiliária! Tenho interesse em COMPRAR um imóvel e gostaria de mais informações sobre as opções e oportunidades disponíveis.'
    : topic === 'vender'
    ? 'Olá Trezzo Imobiliária! Tenho interesse em VENDER meu imóvel e gostaria de entender como funciona a avaliação e captação.'
    : 'Olá Trezzo Imobiliária! Gostaria de falar com um de seus especialistas para receber uma consultoria personalizada.';

  return `${intro}\n\nPodem me auxiliar, por favor?`;
}
