import { assetUrl } from '../lib/asset';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#11110f] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={assetUrl('brand/academy-mark.png')}
            alt=""
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em]">XYZ Academy</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/38">
              {t.footer.discipline}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
          <a href="#top" className="hover:text-white">{t.footer.top}</a>
          <a href="mailto:hello@xyzacademy.com" className="hover:text-white">{t.footer.email}</a>
          <span>© 2026 XYZ Academy</span>
        </div>
      </div>
    </footer>
  );
}
