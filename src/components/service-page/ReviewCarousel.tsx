import { Star } from "lucide-react";
import type { Testimonial } from "@/data/pageContent";

interface ReviewCarouselProps {
  testimonials: Testimonial[];
}

export const ReviewCarousel = ({ testimonials }: ReviewCarouselProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Client Reviews</h2>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold text-foreground">4.9/5</span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-5 space-y-3"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
