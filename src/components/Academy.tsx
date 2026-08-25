import { useLanguage } from '../i18n/LanguageContext';
import { SectionIntro } from './SectionIntro';

export function Academy() {
  const { t } = useLanguage();

  return (
    <section id="akademi" className="scroll-mt-16 bg-[#11110f] py-24 text-white sm:py-32">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="flex max-w-5xl flex-col gap-14">
          <SectionIntro
            eyebrow={t.academy.eyebrow}
            title={t.academy.title}
            light
          />
          <div className="grid grid-cols-3 border-y border-white/15">
            {t.academy.stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 border-r border-white/15 px-2 py-6 last:border-r-0 sm:px-5 sm:py-8"
              >
                <strong className="block text-3xl font-black tracking-[-0.06em] text-[#ef233c] sm:text-5xl">
                  {stat.value}
                </strong>
                <span className="mt-2 block break-words text-[8px] font-semibold uppercase leading-4 tracking-[0.08em] text-white/45 sm:text-[11px] sm:tracking-[0.12em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
