type SectionIntroProps = {
  eyebrow: string;
  title: string;
  light?: boolean;
};

export function SectionIntro({ eyebrow, title, light = false }: SectionIntroProps) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#ef233c]" />
        <p
          className={`text-[11px] font-bold uppercase tracking-[0.24em] ${
            light ? 'text-white/50' : 'text-black/48'
          }`}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={`max-w-4xl break-words text-balance text-[clamp(2.35rem,5.8vw,6rem)] font-black uppercase leading-[0.96] tracking-[-0.035em] sm:leading-[0.9] sm:tracking-[-0.052em] ${
          light ? 'text-white' : 'text-[#11110f]'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
