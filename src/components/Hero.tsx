import { assetUrl } from '../lib/asset';
import { useLanguage } from '../i18n/LanguageContext';
import { Header } from './Header';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      aria-label={t.hero.aria}
      className="group relative isolate min-h-[100svh] overflow-hidden bg-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={assetUrl('media/bjj-background.mp4')} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55 transition-colors duration-700 group-hover:bg-black/62" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.5)_0%,rgba(0,0,0,.08)_34%,rgba(0,0,0,.78)_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.11)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_75%)]" />

      <Header />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="w-full">
          <div className="hero-kicker mb-6 flex items-center gap-3 text-white/72">
            <span className="h-px w-10 bg-[#ef233c]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs">
              {t.hero.kicker}
            </p>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="min-w-0 overflow-visible pb-2">
              <h1 className="hero-title flex max-w-5xl flex-col gap-[0.06em] text-[clamp(3.5rem,14vw,11rem)] font-black uppercase leading-[0.84] tracking-[-0.045em] text-white sm:leading-[0.8] sm:tracking-[-0.06em]">
                <span className="block">XYZ</span>
                <span className="text-outline-white block">Academy</span>
              </h1>
            </div>

            <div className="hero-copy border-l border-white/25 pl-5 text-white sm:pl-7 lg:mb-2">
              <p className="max-w-sm text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                {t.hero.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#iletisim"
                  className="rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef233c]"
                >
                  {t.hero.primary}
                </a>
                <a
                  href="#programlar"
                  className="rounded-full border border-white/35 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-start justify-between gap-4 border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/52 sm:mt-14 sm:items-center sm:tracking-[0.2em]">
            <span className="max-w-[68%] leading-4 sm:max-w-none">{t.hero.values}</span>
            <a href="#akademi" className="ml-auto flex shrink-0 items-center gap-2 hover:text-white sm:gap-3">
              {t.hero.discover}
              <span aria-hidden="true" className="text-base">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
