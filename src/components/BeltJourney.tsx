import { beltStyles } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionIntro } from './SectionIntro';

export function BeltJourney() {
  const { t } = useLanguage();

  return (
    <section id="kusaklar" className="scroll-mt-16 overflow-hidden bg-[#11110f] py-24 text-white sm:py-32">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_390px] lg:items-end">
          <SectionIntro eyebrow={t.belts.eyebrow} title={t.belts.title} light />
          <p className="max-w-md text-base leading-7 text-white/52 lg:pb-2">
            {t.belts.intro}
          </p>
        </div>

        <div className="mt-16 space-y-3">
          {t.belts.items.map((belt, index) => {
            const beltStyle = beltStyles[index];
            return (
            <article
              key={belt.name}
              className="group grid items-center gap-5 border-t border-white/14 py-5 last:border-b sm:grid-cols-[90px_minmax(220px,1fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-7"
            >
              <div className="flex items-center justify-between sm:block">
                <span className="font-mono text-[10px] tracking-[0.18em] text-white/38">
                  0{index + 1}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/46 sm:mt-3 sm:block">
                  {belt.note}
                </span>
              </div>

              <div
                className={`belt-texture relative h-11 overflow-hidden rounded-[3px] shadow-[inset_0_0_0_1px_rgba(255,255,255,.2)] transition-transform duration-500 group-hover:translate-x-2 ${
                  beltStyle.border ? 'ring-1 ring-white/45' : ''
                }`}
                style={{ backgroundColor: beltStyle.color, color: beltStyle.text }}
                aria-label={`${belt.name} ${t.belts.ariaSuffix}`}
              >
                <span className="absolute inset-y-0 right-5 w-[28%] max-w-28 bg-[#101010]" />
                <span
                  className="absolute inset-y-0 right-5 w-[28%] max-w-28"
                  style={{ backgroundColor: beltStyle.rank ?? '#101010' }}
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-[0.18em] opacity-65">
                  {belt.name}
                </span>
              </div>

              <p className="max-w-xl text-sm leading-6 text-white/50 transition-colors group-hover:text-white/76">
                {belt.description}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
