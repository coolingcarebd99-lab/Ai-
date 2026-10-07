import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { troubleshootingModulesData } from '../data/applianceData';
import { ApplianceType, TroubleshootingItem } from '../types';
import { 
  Wrench, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Activity, 
  ShieldAlert, 
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const TroubleshootingModules: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedAppliance, setSelectedAppliance] = useState<ApplianceType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string>('tr-ac-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  const filteredItems = useMemo(() => {
    return troubleshootingModulesData.filter((item) => {
      if (selectedAppliance !== 'all' && item.appliance !== selectedAppliance) {
        return false;
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const enProb = item.problem.en.toLowerCase();
        const bnProb = item.problem.bn.toLowerCase();
        const enCauses = item.causes.en.join(' ').toLowerCase();
        const bnCauses = item.causes.bn.join(' ').toLowerCase();
        const enSols = item.solutions.en.join(' ').toLowerCase();
        const bnSols = item.solutions.bn.join(' ').toLowerCase();

        return (
          enProb.includes(q) ||
          bnProb.includes(q) ||
          enCauses.includes(q) ||
          bnCauses.includes(q) ||
          enSols.includes(q) ||
          bnSols.includes(q)
        );
      }

      return true;
    });
  }, [selectedAppliance, searchQuery]);

  return (
    <section id="troubleshooting-modules" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-semibold text-cyan-300 mb-3 shadow-lg">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('Hands-on Fault Tracing Protocols', 'ব্যবহারিক ফল্ট ট্র্যাকিং প্রটোকল')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t('Step-by-Step Troubleshooting Modules', 'ধাপে ধাপে ট্রাবলশুটিং ও মেরামতের গাইড')}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t(
              'Diagnostic logic workflows for AC, Washing Machine, and Refrigerator defects. Master cause-and-effect relationships and professional bench testing routines.',
              'এসি, ওয়াশিং মেশিন এবং ফ্রিজের প্রতিটি জটিল সমস্যার কারণ ও কারিগরি প্রতিকার। মাল্টিমিটার ডায়াগনস্টিক টেস্ট সহ হাতে-কলমে শেখার গাইড।'
            )}
          </p>
        </div>

        {/* Filter bar */}
        <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-xl mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(
                'Search faults by keyword (e.g. "cooling", "গ্যাস", "OE error", "vibration", "বরফ", "click")...',
                'সমস্যার লক্ষণ দিয়ে খুঁজুন (যেমন: "ঠান্ডা", "gas leak", "ড্রেন", "OE error", "বরফ", "কম্প্রেসার")...'
              )}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: { en: 'All Modules', bn: 'সব মডিউল' } },
              { id: 'ac', label: { en: 'AC Faults', bn: 'এসি সমস্যা' } },
              { id: 'washing_machine', label: { en: 'Washer Faults', bn: 'ওয়াশার সমস্যা' } },
              { id: 'refrigerator', label: { en: 'Fridge Faults', bn: 'ফ্রিজ সমস্যা' } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedAppliance(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedAppliance === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t(tab.label.en, tab.label.bn)}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Accordion Cards List */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900 border-cyan-500/70 shadow-2xl shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/80">
                        {t(item.applianceName.en, item.applianceName.bn)}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {item.severity === 'basic' && t('Basic Level', 'প্রাথমিক লেভেল')}
                        {item.severity === 'intermediate' && t('Intermediate Level', 'মাঝারি লেভেল')}
                        {item.severity === 'advanced_electrical' && t('Advanced Electrical', 'উচ্চতর ইলেকট্রিক্যাল')}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300">
                      {item.problem.en}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-cyan-400/90 mt-0.5">
                      {item.problem.bn}
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-800 text-slate-300 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/80 space-y-5 animate-fadeIn">
                    {/* Causes Grid */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>{t('Probable Root Causes (সম্ভাব্য কারণ):', 'সম্ভাব্য কারণসমূহ:')}</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.causes[language === 'bn' ? 'bn' : 'en'].map((cause, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="text-rose-400 font-bold">•</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions Workflow */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t('Bench-Tested Repair Steps (সমাধানের ধাপ):', 'সঠিক সমাধান ও মেরামতের ধাপ:')}</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-200">
                        {item.solutions[language === 'bn' ? 'bn' : 'en'].map((sol, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center shrink-0 text-[10px] font-bold">
                              {sIdx + 1}
                            </span>
                            <span className="leading-relaxed">{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Multimeter Testing Protocol */}
                    <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-900/40">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" />
                        <span>{t('Multimeter Diagnostic Procedure (পরিমাপ পদ্ধতি):', 'ল্যাব মাল্টিমিটার পরিমাপ পদ্ধতি:')}</span>
                      </h4>
                      <p className="text-xs text-cyan-200/90 leading-relaxed font-mono">
                        {t(item.testingProcedure.en, item.testingProcedure.bn)}
                      </p>
                    </div>

                    {/* Safety Warning */}
                    {item.safetyWarning && (
                      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-900/50 flex items-start gap-2 text-xs text-amber-300">
                        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{t(item.safetyWarning.en, item.safetyWarning.bn)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
