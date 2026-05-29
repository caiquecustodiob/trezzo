/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  propertyType: string;
  date: string; // ISO string
  status: 'new' | 'contacted' | 'resolved' | 'archived';
  notes?: string;
}

export interface CompanySettings {
  whatsappNumber: string; // e.g. "5581999999999" (unformatted for links)
  whatsappDisplay: string; // e.g. "(81) 99999-9999" (formatted for reading)
  instagramUrl: string; // instagram profile URL
  emailAddress: string; // e.g. "contato@trezzoimobiliaria.com.br"
  creci: string; // e.g. "CRECI 12345-J"
  address: string; // e.g. "Av. Agamenon Magalhães, 1500 - Recife, PE"
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'Home' | 'Building2' | 'TrendingUp';
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: 'Heart' | 'Compass' | 'ShieldCheck' | 'Sparkles';
}
