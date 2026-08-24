import { useLanguage } from '../i18n/LanguageContext';
import { SectionIntro } from './SectionIntro';

export function Schedule() {
  const { t } = useLanguage();

  return (
    <section id="program" className="scroll-mt-16 bg-[#f5f5f1] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <SectionIntro eyebrow={t.schedule.eyebrow} title={t.schedule.title} />
          <div className="flex items-center gap-4 border-l-2 border-[#ef233c] pl-5 text-sm leading-6 text-black/52">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#ef233c]" />
            {t.schedule.note}
          </div>
        </div>

        <div className="mt-14 border-t-2 border-black">
          {t.schedule.items.map((item, index) => (
            <div
              key={item.day}
              className="group grid gap-4 border-b border-black/15 py-5 transition-colors hover:bg-white sm:grid-cols-[60px_1fr_1.6fr] sm:items-center sm:px-5 sm:py-6"
            >
              <span className="font-mono text-[10px] tracking-[0.18em] text-black/35">
                0{index + 1}
              </span>
              <h3 className="break-words text-xl font-black uppercase leading-tight tracking-[-0.02em] sm:text-2xl">
                {item.day}
              </h3>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {item.sessions.map((session) => (
                  <span
                    key={session}
                    className="rounded-full border border-black/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.11em] text-black/62"
                  >
                    {session}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
