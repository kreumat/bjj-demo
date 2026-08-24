import { assetUrl } from '../lib/asset';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const links = [
    { label: t.nav.academy, href: '#akademi' },
    { label: t.nav.programs, href: '#programlar' },
    { label: t.nav.belts, href: '#kusaklar' },
    { label: t.nav.contact, href: '#iletisim' },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15">
      <div className="mx-auto flex h-20 w-full max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="group flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={t.nav.home}
        >
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/30 bg-[#db171d] transition-transform duration-300 group-hover:rotate-6">
            <img
              src={assetUrl('brand/academy-mark.png')}
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.16em] max-[360px]:hidden">
            XYZ Academy
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.13em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <label className="relative">
            <span className="sr-only">{t.nav.language}</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
              aria-label={t.nav.language}
              className="h-10 appearance-none rounded-full border border-white/30 bg-black/20 pl-3 pr-7 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white outline-none backdrop-blur transition-colors hover:border-white focus-visible:ring-2 focus-visible:ring-white"
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
            <span aria-hidden="true" className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[8px] text-white/55">▾</span>
          </label>

          <a
            href="#iletisim"
            className="hidden whitespace-nowrap rounded-full border border-white/35 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:inline-flex"
          >
            {t.nav.trial}
          </a>

          <details className="group relative lg:hidden">
          <summary
            className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-white/30 text-white marker:hidden"
            aria-label={t.nav.menu}
          >
            <span className="h-px w-4 bg-current shadow-[0_5px_0_currentColor,0_-5px_0_currentColor]" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-14 w-56 overflow-hidden rounded-2xl border border-white/15 bg-black/90 p-2 shadow-2xl backdrop-blur-xl"
          >
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              >
                {link.label}
                <span className="text-[10px] text-white/40">0{index + 1}</span>
              </a>
            ))}
          </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
