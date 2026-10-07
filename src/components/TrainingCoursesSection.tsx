import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { trainingCoursesData } from '../data/applianceData';
import { BookOpen, Clock, Award, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';

export const TrainingCoursesSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="training-courses" className="py-16 sm:py-24 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-semibold text-cyan-300 mb-3 shadow-lg">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('Hands-On Technical Workshop Curricula', 'ব্যবহারিক টেকনিক্যাল ট্রেনিং কোর্স')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t('Master Modern Appliance Engineering', 'আধুনিক হোম অ্যাপ্লায়েন্স রিপেয়ার লার্নিং প্রোগ্রাম')}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t(
              'Comprehensive practical modules designed for aspiring technicians, engineers, and workshop mechanics across Bangladesh.',
              'ইনভার্টার সার্কিট, গ্যাস চার্জিং ও ড্রাম মেকানিক্সের ওপর বিশেষায়িত প্র্যাকটিক্যাল কোর্সসমূহ।'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingCoursesData.map((course) => (
            <div
              key={course.id}
              className="bg-slate-950 rounded-3xl border border-slate-800 hover:border-cyan-500/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {course.code}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t(course.duration.en, course.duration.bn)}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {t(course.title.en, course.title.bn)}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-medium">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{t(course.level.en, course.level.bn)}</span>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800">
                  <span className="text-xs font-bold text-slate-300 block mb-2 uppercase tracking-wide">
                    {t('Syllabus & Core Practical Skills:', 'সিলেবাস ও প্র্যাকটিক্যাল বিষয়সমূহ:')}
                  </span>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {course.topics[language === 'bn' ? 'bn' : 'en'].map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[11px] font-bold text-cyan-400 block mb-1">
                    {t('Lab Focus:', 'ল্যাব ফোকাস:')}
                  </span>
                  <p className="text-xs text-slate-300">
                    {t(course.practicalFocus.en, course.practicalFocus.bn)}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href="tel:01973787298"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-950/60 text-cyan-300 border border-cyan-800/80 hover:border-cyan-500 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t('Inquire Course: 01973787298', 'কোর্সের বিস্তারিত: ০১৯৭৩৭৮৭২৯৮')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
