import { useLanguage } from '../i18n/LanguageContext';
import { SectionIntro } from './SectionIntro';

export function Programs() {
  const { t } = useLanguage();

  return (
    <section id="programlar" className="scroll-mt-16 bg-[#f5f5f1] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
          <SectionIntro eyebrow={t.programs.eyebrow} title={t.programs.title} />
          <p className="max-w-md text-base leading-7 text-black/58 lg:pb-2">
            {t.programs.intro}
          </p>
        </div>

        <div className="mt-14 grid border-l border-t border-black/15 lg:grid-cols-3">
          {t.programs.items.map((program, index) => (
            <article
              key={program.code}
              className="group flex min-h-[410px] flex-col border-b border-r border-black/15 p-6 transition-colors duration-500 hover:bg-[#11110f] hover:text-white sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-black/40 group-hover:text-white/40">
                  {program.code}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-black/20 text-sm transition-transform duration-500 group-hover:-rotate-45 group-hover:border-white/30">
                  ↗
                </span>
              </div>
              <div className="mt-auto">
                <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef233c]">
                  0{index + 1} / {program.subtitle}
                </span>
                <h3 className="break-words text-[clamp(1.8rem,7vw,3rem)] font-black leading-[0.98] tracking-[-0.035em]">
                  {program.title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-black/55 group-hover:text-white/58">
                  {program.description}
                </p>
                <p className="mt-7 border-t border-black/12 pt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black/45 group-hover:border-white/15 group-hover:text-white/45">
                  {program.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
