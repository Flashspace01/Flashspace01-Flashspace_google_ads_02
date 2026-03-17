interface TrustLogosProps {
  logos: string[];
}

export const TrustLogos = ({ logos }: TrustLogosProps) => {
  return (
    <div className="py-8 border-y border-border/50">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center mb-5">
        Trusted Partners & Authorities
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-sm font-medium text-muted-foreground/70 px-4 py-2 rounded-lg bg-muted/50"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};
