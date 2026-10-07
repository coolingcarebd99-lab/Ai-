/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExplodedViewBreakdown } from './components/ExplodedViewBreakdown';
import { SparePartsTrainingGuide } from './components/SparePartsTrainingGuide';
import { TroubleshootingModules } from './components/TroubleshootingModules';
import { TrainingCoursesSection } from './components/TrainingCoursesSection';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white antialiased">
        {/* Navigation Bar with Cooling Care BD branding & Direct Call 01973787298 */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 3D Hero Section with Interactive Three.js Canvas */}
          <Hero />

          {/* Interactive 3D Appliance Exploded View Breakdown (Layer-Reveal) */}
          <ExplodedViewBreakdown />

          {/* Essential Spare Parts Technical Training Guide (STRICTLY NO PRICES) */}
          <SparePartsTrainingGuide />

          {/* Step-by-Step Troubleshooting Learning Modules */}
          <TroubleshootingModules />

          {/* Hands-on Workshop Training Curricula */}
          <TrainingCoursesSection />
        </main>

        {/* Contact/Support Footer Highlighting 01973787298 */}
        <Footer />

        {/* Prominent Floating Direct Call Button */}
        <FloatingCallButton />
      </div>
    </LanguageProvider>
  );
}
