import { useLanguage } from '../i18n/LanguageContext';

export function QuickLinks() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.quick.aria} className="bg-[#f5f5f1] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex items-end justify-between border-b border-black/15 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/50">
            {t.quick.eyebrow}
          </p>
          <p className="hidden max-w-xs text-right text-xs leading-5 text-black/45 sm:block">
            {t.quick.description}
          </p>
        </div>

        <div className="grid grid-cols-2 justify-items-center gap-3 sm:gap-5 lg:grid-cols-4">
          {t.quick.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative grid aspect-square w-full max-w-[320px] place-items-center overflow-hidden rounded-full border transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef233c] ${
                index === 0
                  ? 'border-[#e30613] bg-[#e30613] text-white hover:bg-[#bd0f18]'
                  : 'border-black/20 bg-transparent text-black hover:border-black hover:bg-black hover:text-white'
              }`}
            >
              <span className="absolute left-[16%] top-[14%] text-[9px] font-bold tracking-[0.2em] opacity-60 sm:text-[10px]">
                {link.index}
              </span>
              <span className="relative z-10 max-w-[70%] text-center text-[clamp(.76rem,2vw,1.55rem)] font-black uppercase leading-[1] tracking-[-0.025em]">
                {link.label}
              </span>
              <span className="absolute bottom-[13%] right-[14%] grid h-8 w-8 place-items-center rounded-full border border-current/30 text-xs transition-transform duration-300 group-hover:-rotate-45 sm:h-10 sm:w-10 sm:text-sm">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
