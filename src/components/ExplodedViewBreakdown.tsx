import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { appliance3DData } from '../data/applianceData';
import { ApplianceType, ExplodedLayer } from '../types';
import { 
  Layers, 
  Wind, 
  Disc, 
  Refrigerator, 
  Sparkles, 
  Info, 
  CheckCircle, 
  Rotate3d,
  Sliders,
  ChevronRight
} from 'lucide-react';

export const ExplodedViewBreakdown: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedAppliance, setSelectedAppliance] = useState<ApplianceType>('ac');
  const [explosionAmount, setExplosionAmount] = useState<number>(75); // 0 to 100%
  const [activeLayerId, setActiveLayerId] = useState<string>('ac-l3');

  const currentModel = appliance3DData.find((m) => m.id === selectedAppliance) || appliance3DData[0];
  const activeLayer = currentModel.layers.find((l) => l.id === activeLayerId) || currentModel.layers[0];

  const handleApplianceChange = (app: ApplianceType) => {
    setSelectedAppliance(app);
    const newModel = appliance3DData.find((m) => m.id === app);
    if (newModel && newModel.layers.length > 0) {
      setActiveLayerId(newModel.layers[1].id);
    }
  };

  return (
    <section id="exploded-view" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Background neon ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-semibold text-cyan-300 mb-4 shadow-lg shadow-cyan-950/50">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('3D Mechanical Breakdown & Layer Inspection', 'থ্রিডি মেকানিক্যাল ব্রেকডাউন ও লেয়ার বিশ্লেষণ')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t('Interactive 3D Exploded View Training', 'ইন্টারেক্টিভ থ্রিডি এক্সপ্লোডেড পার্টস ভিউ')}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              'Disassemble AC, Washing Machine, and Refrigerator structures in 3D. Control layer separation, inspect internal heat exchangers, and master core mechanical assemblies.',
              'এসি, ওয়াশিং মেশিন এবং ফ্রিজের ভেতরের যন্ত্রাংশ থ্রিডিতে আলাদা করে দেখুন। লেয়ার কন্ট্রোলের মাধ্যমে মেকানিক্যাল গঠন ও শীতলীকরণ প্রক্রিয়া শিখুন।'
            )}
          </p>
        </div>

        {/* Appliance Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            {[
              { id: 'ac' as ApplianceType, name: t('Air Conditioner (AC)', 'এয়ার কন্ডিশনার (এসি)'), icon: Wind },
              { id: 'washing_machine' as ApplianceType, name: t('Washing Machine', 'ওয়াশিং মেশিন'), icon: Disc },
              { id: 'refrigerator' as ApplianceType, name: t('Refrigerator', 'রেফ্রিজারেটর'), icon: Refrigerator },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleApplianceChange(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedAppliance === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Exploded Stage Area & Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: 3D Exploded Canvas Simulator (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Stage header info */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {t(currentModel.title.en, currentModel.title.bn)}
                </h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">
                  {t(currentModel.subtitle.en, currentModel.subtitle.bn)}
                </p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800">
                {explosionAmount}% {t('Separation', 'বিচ্ছিন্নতা')}
              </span>
            </div>

            {/* 3D PERSPECTIVE STAGE */}
            <div className="my-8 py-6 relative h-[360px] flex items-center justify-center [perspective:1200px]">
              <div 
                className="relative w-[85%] h-[260px] transition-transform duration-500 [transform-style:preserve-3d]"
                style={{
                  transform: `rotateX(18deg) rotateY(-22deg)`,
                }}
              >
                {currentModel.layers.map((layer, index) => {
                  const isActive = layer.id === activeLayerId;
                  // Dynamic translation distance based on slider
                  const zOffset = (index - 2.5) * (explosionAmount * 0.95);
                  const yOffset = (index - 2.5) * (explosionAmount * 0.35);

                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveLayerId(layer.id)}
                      className={`absolute inset-0 rounded-2xl border transition-all duration-300 cursor-pointer p-4 flex flex-col justify-between backdrop-blur-md ${
                        isActive
                          ? 'border-cyan-400 bg-cyan-950/70 shadow-2xl shadow-cyan-500/50 scale-105 z-30'
                          : 'border-slate-700/60 bg-slate-950/70 hover:border-cyan-600/70 hover:bg-slate-900/80'
                      }`}
                      style={{
                        transform: `translateZ(${zOffset}px) translateY(${yOffset}px)`,
                        boxShadow: isActive ? '0 0 25px rgba(6, 182, 212, 0.4)' : 'none',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: layer.color }}
                        />
                        <span className="text-[11px] font-mono text-slate-400">
                          LAYER #{index + 1}
                        </span>
                      </div>

                      <div className="my-auto">
                        <h4 className={`text-sm sm:text-base font-bold ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                          {t(layer.name.en, layer.name.bn)}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {t(layer.role.en, layer.role.bn)}
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-slate-500 border-t border-slate-800/80 pt-2">
                        <span>{layer.specs.en.split(',')[0]}</span>
                        {isActive && (
                          <span className="text-cyan-400 font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            {t('Selected', 'নির্বাচিত')}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Explosion Controller Slider */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  {t('3D Layer Separation Distance:', 'থ্রিডি লেয়ার বিচ্ছিন্নকরণ দূরত্ব:')}
                </span>
                <span className="text-cyan-400 font-mono font-bold">{explosionAmount}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={explosionAmount}
                onChange={(e) => setExplosionAmount(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>{t('0% Assembled Unit', '০% সম্পূর্ণ মেশিন')}</span>
                <span>{t('50% Partial Gap', '৫০% মাঝারি ফাঁকা')}</span>
                <span>{t('100% Full Exploded View', '১০০% পূর্ণ থ্রিডি ভিউ')}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Technical Inspector Panel (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
                <Info className="w-4 h-4" />
                <span>{t('Component Technical Inspector', 'যন্ত্রাংশের কারিগরি বিবরণী')}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {t(activeLayer.name.en, activeLayer.name.bn)}
              </h3>

              {/* Component Role */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1">
                  {t('Function in Appliance System (ভূমিকা):', 'মেশিনে এই পার্টসের মূল কাজ:')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {t(activeLayer.role.en, activeLayer.role.bn)}
                </p>
              </div>

              {/* Engineering Specs */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1">
                  {t('Material & Engineering Specifications:', 'ম্যাটেরিয়াল ও টেকনিক্যাল স্পেসিফিকেশন:')}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t(activeLayer.specs.en, activeLayer.specs.bn)}
                </p>
              </div>

              {/* System Working Principle */}
              <div className="mt-4 p-4 rounded-2xl bg-blue-950/20 border border-blue-900/40">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-1">
                  {t('Thermodynamic / Mechanical Loop:', 'কার্যপ্রণালী নীতি:')}
                </h4>
                <p className="text-xs text-blue-200/90 leading-relaxed">
                  {t(currentModel.workingPrinciple.en, currentModel.workingPrinciple.bn)}
                </p>
              </div>
            </div>

            {/* Quick layer selector dots */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-2 font-medium">
                {t('Select Other Internal Layers:', 'অন্যান্য ভেতরের লেয়ার দেখুন:')}
              </span>
              <div className="grid grid-cols-2 gap-2">
                {currentModel.layers.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setActiveLayerId(l.id)}
                    className={`text-left p-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between border ${
                      l.id === activeLayerId
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-500'
                        : 'bg-slate-950 text-slate-400 hover:text-white border-slate-800'
                    }`}
                  >
                    <span className="truncate">{t(l.name.en.split('.')[1] || l.name.en, l.name.bn.split('.')[1] || l.name.bn)}</span>
                    <ChevronRight className="w-3 h-3 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
