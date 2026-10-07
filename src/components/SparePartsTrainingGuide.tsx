import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { trainingSparePartsData } from '../data/applianceData';
import { ApplianceType, TrainingSparePartItem } from '../types';
import { 
  Cpu, 
  Search, 
  Zap, 
  Activity, 
  RotateCw, 
  Layers, 
  RefreshCcw, 
  Droplets, 
  Maximize2, 
  Lock, 
  Gauge, 
  ThermometerSnowflake, 
  ShieldAlert, 
  Flame, 
  Fan, 
  SlidersHorizontal, 
  Wrench, 
  AlertTriangle,
  Info
} from 'lucide-react';

export const SparePartsTrainingGuide: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedAppliance, setSelectedAppliance] = useState<ApplianceType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (icon: string) => {
    const props = { className: 'w-6 h-6 text-cyan-400' };
    switch (icon) {
      case 'Zap': return <Zap {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'RotateCw': return <RotateCw {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'RefreshCcw': return <RefreshCcw {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'Maximize2': return <Maximize2 {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'Gauge': return <Gauge {...props} />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Fan': return <Fan {...props} />;
      case 'SlidersHorizontal': return <SlidersHorizontal {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  const filteredParts = useMemo(() => {
    return trainingSparePartsData.filter((part) => {
      if (selectedAppliance !== 'all' && part.appliance !== selectedAppliance) {
        return false;
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const enName = part.name.en.toLowerCase();
        const bnName = part.name.bn.toLowerCase();
        const code = part.technicalCode.toLowerCase();
        const enFunc = part.functionDesc.en.toLowerCase();
        const bnFunc = part.functionDesc.bn.toLowerCase();
        const enProb = part.commonProblem.en.toLowerCase();
        const bnProb = part.commonProblem.bn.toLowerCase();

        return (
          enName.includes(q) ||
          bnName.includes(q) ||
          code.includes(q) ||
          enFunc.includes(q) ||
          bnFunc.includes(q) ||
          enProb.includes(q) ||
          bnProb.includes(q)
        );
      }

      return true;
    });
  }, [selectedAppliance, searchQuery]);

  return (
    <section id="spare-parts-guide" className="py-16 sm:py-24 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-semibold text-cyan-300 mb-3 shadow-lg">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('Component Identification & Workshop Guide', 'যন্ত্রাংশ পরিচিতি ও ওয়ার্কশপ ম্যানুয়াল')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t('Essential Spare Parts Technical Training Guide', 'প্রয়োজনীয় যন্ত্রাংশের কাজ ও সাধারণ সমস্যা গাইড')}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t(
              'Technical English and Bangla nomenclature, internal engineering function (কাজ), common failure defects (সমস্যা), and multimeter diagnostic guidelines. Strictly educational reference.',
              'প্রতিটি গুরুত্বপূর্ণ যন্ত্রাংশের বাংলা ও ইংরেজি নাম, সুনির্দিষ্ট কাজ এবং নষ্ট হওয়ার লক্ষণ। টেকনিশিয়ানদের ল্যাব ট্রেনিংয়ের জন্য তৈরি।'
            )}
          </p>
        </div>

        {/* Search & Appliance Filters */}
        <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-xl mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(
                'Search spare part name in English or Bangla (e.g. "Capacitor", "ক্যাপাসিটর", "Drain Pump", "বাইমেটাল", "IPM")...',
                'যন্ত্রাংশের নাম দিয়ে খুঁজুন (যেমন: "ক্যাপাসিটর", "কম্প্রেসার", "ড্রেন পাম্প", "হিটার", "বাইমেটাল")...'
              )}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded"
              >
                {t('Clear', 'মুছুন')}
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: { en: 'All Parts', bn: 'সবগুলো' } },
              { id: 'ac', label: { en: 'AC Components', bn: 'এসি পার্টস' } },
              { id: 'washing_machine', label: { en: 'Washer Components', bn: 'ওয়াশিং মেশিন' } },
              { id: 'refrigerator', label: { en: 'Fridge Components', bn: 'ফ্রিজ পার্টস' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedAppliance(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedAppliance === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t(tab.label.en, tab.label.bn)}
              </button>
            ))}
          </div>
        </div>

        {/* Parts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-cyan-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 group"
            >
              <div>
                {/* Header Icon & Code */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(part.categoryIcon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {part.technicalCode}
                  </span>
                </div>

                {/* English Name */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {part.name.en}
                </h3>

                {/* Bangla Name */}
                <h4 className="text-sm font-semibold text-cyan-400/90 mt-1">
                  {part.name.bn}
                </h4>

                {/* Technical Function (কাজ) */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>{t('Technical Function (কাজ):', 'মূল কাজ ও ভূমিকা:')}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {t(part.functionDesc.en, part.functionDesc.bn)}
                  </p>
                </div>

                {/* Common Problem (সমস্যা) */}
                <div className="mt-3.5 p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wide mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t('Common Failure Defect (সমস্যা):', 'নষ্ট হওয়ার লক্ষণ ও সমস্যা:')}</span>
                  </div>
                  <p className="text-xs text-rose-200/90 leading-relaxed">
                    {t(part.commonProblem.en, part.commonProblem.bn)}
                  </p>
                </div>
              </div>

              {/* Multimeter Testing Guideline */}
              <div className="mt-4 pt-3.5 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  <Zap className="w-3 h-3" />
                  <span>{t('Multimeter Test (ল্যাব পরীক্ষা):', 'মাল্টিমিটার ডায়াগনস্টিক টেস্ট:')}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {t(part.multimeterTestGuide.en, part.multimeterTestGuide.bn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
