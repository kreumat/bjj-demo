import { useLanguage } from '../i18n/LanguageContext';
import { assetUrl } from '../lib/asset';
import { SectionIntro } from './SectionIntro';

export function Academy() {
  const { t } = useLanguage();

  return (
    <section id="akademi" className="scroll-mt-16 bg-[#11110f] py-24 text-white sm:py-32">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="flex flex-col justify-between gap-14">
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

          <div className="relative overflow-hidden rounded-[2rem] bg-[#f5f5f1] p-3 sm:p-5">
            <div className="absolute left-7 top-7 z-10 rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              {t.academy.badge}
            </div>
            <img
              src={assetUrl('art/gi-practitioner.png')}
              alt={t.academy.imageAlt}
              className="aspect-[4/5] h-full w-full rounded-[1.35rem] object-contain object-center sm:aspect-[4/3]"
            />
            <div className="relative z-10 mt-3 flex items-end justify-between gap-4 rounded-2xl bg-white/92 p-4 text-black backdrop-blur sm:absolute sm:inset-x-9 sm:bottom-9 sm:mt-0 sm:p-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">
                  {t.academy.cardEyebrow}
                </p>
                <p className="mt-1 max-w-md text-sm font-semibold sm:text-base">
                  {t.academy.cardCopy}
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ef233c] text-white">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
