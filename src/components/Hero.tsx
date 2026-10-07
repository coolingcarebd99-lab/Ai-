import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ThreeApplianceCanvas } from './ThreeApplianceCanvas';
import { 
  PhoneCall, 
  Layers, 
  Rotate3d, 
  Cpu, 
  Wrench, 
  BookOpen, 
  Sparkles, 
  CheckCircle2,
  Flame,
  Zap
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero-3d" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background radial neon glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(6,182,212,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top announcement pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-800/80 shadow-lg shadow-cyan-950/50 text-xs sm:text-sm text-cyan-300">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold tracking-wide">
              {t('Cooling Care BD Karigori — 3D Mechanical & Electronics Training Academy', 'কুলিং কেয়ার বিডি কারিগরি — থ্রিডি মেকানিক্যাল ও ইলেকট্রনিক্স ট্রেনিং একাডেমি')}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight">
            {t('Master Appliance Repair With', 'হাতে-কলমে আধুনিক টেকনিক্যাল ট্রেনিং')}
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              {t('3D Mechanical Simulation & Diagnostics', 'থ্রিডি ভিজুয়ালাইজেশন ও সার্কিট ফল্ট ট্রেসিং')}
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t(
              'A dedicated technical learning portal by Cooling Care BD Karigori (কুলিং কেয়ার বিডি কারিগরি). Explore 3D exploded components of AC, Washing Machine, and Refrigerator, understand mechanical functions without marketing distractions, and master multimeter testing.',
              'কুলিং কেয়ার বিডি কারিগরি-র আধুনিক টেকনিক্যাল ট্রেনিং প্ল্যাটফর্ম। এসি, ওয়াশিং মেশিন এবং ফ্রিজের অভ্যন্তরীণ পার্টস থ্রিডি তে দেখুন, প্রতিটি যন্ত্রাংশের কাজ ও সমস্যা জানুন এবং নিখুঁত মেরামতের কৌশল শিখুন।'
            )}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Direct Call Button */}
            <a
              href="tel:01973787298"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 animate-pulse" />
              <span>{t('Direct Call: 01973787298', 'সরাসরি কল: ০১৯৭৩৭৮৭২৯৮')}</span>
            </a>

            {/* Jump to 3D Exploded View */}
            <a
              href="#exploded-view"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <Layers className="w-5 h-5" />
              <span>{t('3D Exploded Breakdown', 'থ্রিডি এক্সপ্লোডেড ভিউ')}</span>
            </a>

            {/* Jump to Spare Parts Guide */}
            <a
              href="#spare-parts-guide"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500 font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>{t('Spare Parts Guide', 'যন্ত্রাংশ গাইড (কাজ ও সমস্যা)')}</span>
            </a>
          </div>
        </div>

        {/* 3D Three.js Interactive Canvas Container */}
        <div className="max-w-5xl mx-auto my-10">
          <ThreeApplianceCanvas />
        </div>

        {/* Training Highlights Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-cyan-400">100%</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t('Practical Lab Learning', 'হাতে-কলমে ল্যাব ট্রেনিং')}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">3D Models</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t('Exploded Layer Inspection', 'থ্রিডি লেয়ার বিশ্লেষণ')}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-blue-400">Multimeter</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t('Circuit Fault Diagnostics', 'সার্কিট ফল্ট ডায়াগনস্টিক')}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-amber-400">Bilingual</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t('English & Bangla Modules', 'বাংলা ও ইংরেজি নির্দেশিকা')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
