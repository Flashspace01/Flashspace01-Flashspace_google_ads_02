import { Building2, Globe, ShieldCheck, Users } from "lucide-react";

const stats = [
  { icon: Globe, value: "50+", label: "Free Zones" },
  { icon: Building2, value: "2,000+", label: "Businesses Launched" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: ShieldCheck, value: "100%", label: "Compliance Rate" },
];

export const TrustBanner = () => {
  return (
    <section className="py-16 lg:py-20 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <stat.icon className="w-5 h-5 text-muted-foreground/60 mb-1" strokeWidth={1.5} />
              <span className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
