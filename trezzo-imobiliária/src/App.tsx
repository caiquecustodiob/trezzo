/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getCompanySettings } from './utils';

// Core layout sections
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Services from './components/Services';
import LeadForm from './components/LeadForm';
import Differentials from './components/Differentials';
import Compromissos from './components/Compromissos';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const settings = getCompanySettings();

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0B] text-gray-100 selection:bg-[#C5A059]/30 select-none antialiased">
      
      {/* 1. Hero Cover Intro Section */}
      <Hero settings={settings} />

      {/* 2. Brand Positioning Section (Presentation) */}
      <Presentation />

      {/* 3. Core Offerings Section (Services) */}
      <Services settings={settings} />

      {/* 4. High-Converting Evaluation capturing (Lead Form) */}
      <LeadForm settings={settings} />

      {/* 5. Fact-based checklist differentials (Differentials) */}
      <Differentials />

      {/* 6. Compromissos instead of mock review cards (Nossos Compromissos) */}
      <Compromissos />

      {/* 7. Grand closing Call to Action (CTA) */}
      <CTA settings={settings} />

      {/* 8. Fully loaded contact & directory Footer */}
      <Footer settings={settings} />

      {/* AESTHETIC PERSISTENT ELEMENTS */}

      {/* Floating Speed High-Converting WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Floating WhatsApp Action Core Button */}
        <a
          href={`https://wa.me/${settings.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba5a] transition-all duration-300 active:scale-90 shadow-2xl hover:shadow-[#25D366]/40 cursor-pointer"
          title="Fale Expressamente no WhatsApp"
        >
          <MessageCircle size={28} className="animate-pulse" />
        </a>
      </div>

    </div>
  );
}

