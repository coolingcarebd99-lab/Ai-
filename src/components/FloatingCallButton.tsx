import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneCall } from 'lucide-react';

export const FloatingCallButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-float">
      {/* Floating Call Button with glowing pulse ring */}
      <a
        href="tel:01973787298"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-extrabold text-sm shadow-2xl shadow-emerald-500/50 hover:shadow-cyan-400/60 transition-all transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-emerald-300/40"
        aria-label="Direct Call to Cooling Care BD 01973787298"
      >
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-sm animate-ping pointer-events-none" />

        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <PhoneCall className="w-4 h-4 text-white animate-bounce" />
        </div>

        <div className="flex flex-col text-left pr-1">
          <span className="text-[10px] text-emerald-100 font-semibold uppercase tracking-wider leading-none">
            {t('Call Lead Instructor', 'প্রশিক্ষককে সরাসরি কল')}
          </span>
          <span className="text-sm font-black tracking-wider leading-tight text-white">
            01973787298
          </span>
        </div>
      </a>
    </div>
  );
};
