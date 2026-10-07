import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Rotate3d, 
  BookOpen, 
  Cpu, 
  Wrench, 
  Layers
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Direct Call CTA Banner */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              {t('Have Questions About Technical Training?', 'টেকনিক্যাল ট্রেনিং সম্পর্কে জানতে চান?')}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t('Speak Directly With Our Lead Instructor', 'সরাসরি কথা বলুন আমাদের সিনিয়র প্রশিক্ষকের সাথে')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t('Cooling Care BD Karigori Training Helpline: 01973787298', 'কুলিং কেয়ার বিডি কারিগরি ট্রেনিং হেল্পলাইন: ০১৯৭৩৭৮৭২৯৮')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:01973787298"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-5 h-5 animate-bounce" />
              <span className="tracking-wider">01973787298</span>
            </a>
            <a
              href="mailto:coolingcarebd99@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 font-bold text-xs sm:text-sm shadow-md"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>coolingcarebd99@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                <Rotate3d className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">
                Cooling Care BD <span className="text-cyan-400">Karigori</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {t(
                'Cooling Care BD Karigori (কুলিং কেয়ার বিডি কারিগরি) is Bangladesh’s dedicated 3D technical training portal for learning AC, Washing Machine, and Refrigerator repair, circuit debugging, and refrigeration mechanics.',
                'কুলিং কেয়ার বিডি কারিগরি — বাংলাদেশে এসি, ওয়াশিং মেশিন এবং রেফ্রিজারেটরের মেকানিক্যাল গঠন, সার্কিট ডায়াগনস্টিক ও গ্যাস চার্জিং শেখার আধুনিক টেকনিক্যাল ট্রেনিং পোর্টাল।'
              )}
            </p>
            <div className="text-[11px] text-cyan-400 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('Strictly Training & Skill Development Portal', 'সম্পূর্ণ শিক্ষামূলক ও কারিগরি দক্ষতা উন্নয়ন পোর্টাল')}</span>
            </div>
          </div>

          {/* Quick Curriculum Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t('Training Modules', 'ট্রেনিং মডিউল')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#exploded-view" className="hover:text-cyan-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t('3D Exploded View Inspection', 'থ্রিডি এক্সপ্লোডেড পার্টস ভিউ')}</span>
                </a>
              </li>
              <li>
                <a href="#spare-parts-guide" className="hover:text-cyan-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t('Spare Parts Guide (Function & Failure)', 'যন্ত্রাংশের কাজ ও সমস্যা')}</span>
                </a>
              </li>
              <li>
                <a href="#troubleshooting-modules" className="hover:text-cyan-400 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t('Troubleshooting & Multimeter Testing', 'ট্রাবলশুটিং ও মাল্টিমিটার টেস্ট')}</span>
                </a>
              </li>
              <li>
                <a href="#training-courses" className="hover:text-cyan-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t('Practical Workshop Curricula', 'প্র্যাকটিক্যাল কোর্সসমূহ')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Workshop Center Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t('Training Center Location', 'ট্রেনিং ল্যাব লোকেশন')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{t('Mirpur-10 / Uttara Sector 7, Dhaka, Bangladesh', 'মিরপুর-১০ / উত্তরা সেক্টর ৭, ঢাকা, বাংলাদেশ')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>{t('Practical Lab Open: Mon - Sat (10am - 8pm)', 'প্র্যাকটিক্যাল ল্যাব: সোম - শনি (সকাল ১০টা - রাত ৮টা)')}</span>
              </li>
              <li className="text-[11px] text-slate-500 mt-2">
                {t('Hands-on bench testing tools: Two-Stage Vacuum Pumps, Fluke Multimeters, Nitrogen Manifolds & R32 Scaled Gauges.', 'ল্যাবে আধুনিক ভ্যাকুয়াম পাম্প, ফ্লুক মাল্টিমিটার ও ডিজিটাল গেজ সুবিধা রয়েছে।')}
              </li>
            </ul>
          </div>

          {/* Direct Contact Numbers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t('Direct Support & Inquiries', 'সরাসরি যোগাযোগ ও সহায়তা')}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-0.5">
                  {t('Direct Call Helpline:', 'সরাসরি কল নম্বর:')}
                </span>
                <a
                  href="tel:01973787298"
                  className="text-base font-extrabold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>01973787298</span>
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-0.5">
                  {t('Email Support:', 'ইমেইল যোগাযোগ:')}
                </span>
                <a
                  href="mailto:coolingcarebd99@gmail.com"
                  className="text-xs font-semibold text-slate-200 hover:text-cyan-400"
                >
                  coolingcarebd99@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Cooling Care BD Karigori (কুলিং কেয়ার বিডি কারিগরি). {t('All Rights Reserved.', 'সর্বস্বত্ব সংরক্ষিত।')}</p>
          <p className="text-[11px] text-cyan-400 font-medium">
            {t('Strictly Training & Technical Education • No Commercial Bookings', 'শুধুমাত্র কারিগরি প্রশিক্ষণ ও শিক্ষা উদ্দেশ্যে নিবেদিত')}
          </p>
        </div>
      </div>
    </footer>
  );
};
