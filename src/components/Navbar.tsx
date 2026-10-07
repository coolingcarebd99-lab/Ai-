import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Wrench, 
  PhoneCall, 
  Globe, 
  Menu, 
  X, 
  Layers, 
  BookOpen, 
  Cpu, 
  Sparkles,
  Rotate3d
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero-3d', label: t('3D Equipment', 'থ্রিডি সিমুলেটর') },
    { href: '#exploded-view', label: t('3D Exploded View', 'এক্সপ্লোডেড পার্টস ভিউ') },
    { href: '#spare-parts-guide', label: t('Spare Parts Guide', 'যন্ত্রাংশ গাইড (কাজ ও সমস্যা)') },
    { href: '#troubleshooting-modules', label: t('Troubleshooting', 'ট্রাবলশুটিং মডিউল') },
    { href: '#training-courses', label: t('Courses', 'ট্রেনিং কোর্স') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-900/40 transition-all duration-200">
      {/* Top micro hotline banner */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-xs py-1.5 px-4 text-slate-300 border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-300 font-semibold text-[11px] sm:text-xs">
              {t('Cooling Care BD Karigori — Advanced AC, Washer & Refrigerator Technical Training Portal', 'কুলিং কেয়ার বিডি কারিগরি — এসি, ওয়াশিং মেশিন ও ফ্রিজ টেকনিক্যাল লার্নিং পোর্টাল')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden sm:inline text-[11px]">
              {t('Helpline & Admissions:', 'হেল্পলাইন ও ট্রেনিং তথ্য:')}
            </span>
            <a 
              href="tel:01973787298" 
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white font-bold tracking-wider text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>01973787298</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all">
              <Rotate3d className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-180 transition-transform duration-700" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white font-sans">
                  Cooling Care BD <span className="text-cyan-400">Karigori</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-extrabold rounded bg-cyan-950 text-cyan-300 border border-cyan-800 uppercase tracking-widest">
                  কারিগরি
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden xs:block font-sans">
                {t('কুলিং কেয়ার বিডি কারিগরি • Technical Training Academy', 'কুলিং কেয়ার বিডি কারিগরি • টেকনিক্যাল ট্রেনিং একাডেমি')}
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-300 hover:text-cyan-300 hover:bg-slate-900 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Direct Call Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 shadow-sm hover:border-cyan-500/60 transition-all cursor-pointer"
              title={t('Switch Language to Bangla / English', 'ভাষা পরিবর্তন করুন (বাংলা / ইংরেজি)')}
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <div className="flex items-center gap-1">
                <span className={language === 'en' ? 'text-cyan-400 font-extrabold' : 'text-slate-400'}>
                  EN
                </span>
                <span className="text-slate-600">/</span>
                <span className={language === 'bn' ? 'text-cyan-400 font-extrabold' : 'text-slate-400'}>
                  বাং
                </span>
              </div>
            </button>

            {/* Direct Call Button (PROMINENT HEADER CALL BUTTON) */}
            <a
              href="tel:01973787298"
              className="inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              title="Call 01973787298"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span className="tracking-wide">01973787298</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-slate-200 hover:text-cyan-300 hover:bg-slate-900 rounded-xl"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <a
              href="tel:01973787298"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t('Direct Call: 01973787298', 'সরাসরি কল করুন: ০১৯৭৩৭৮৭২৯৮')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
