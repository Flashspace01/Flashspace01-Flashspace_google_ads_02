import { motion } from "framer-motion";

export const DarkTestimonial = () => {
  return (
    <section className="w-full">
      {/* Dark testimonial banner - edge to edge */}
      <div className="bg-foreground py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
            {/* Centered quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl text-center"
            >
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-background leading-snug tracking-tight mb-12">
                "Our workspace efficiency improved dramatically after switching to FlashSpace. In just 3 months, our teams were able to book 45% more meeting rooms and reduce no-shows by 60%, compared to our previous system."
              </blockquote>
              
              {/* Divider */}
              <div className="border-t border-background/20 mb-8" />
              
              {/* Signature */}
              <div className="mb-4 flex justify-center">
                <svg 
                  viewBox="0 0 200 50" 
                  className="h-8 text-background/80"
                  fill="currentColor"
                >
                  <text 
                    x="50%" 
                    y="35" 
                    textAnchor="middle"
                    fontFamily="'Brush Script MT', cursive" 
                    fontSize="28"
                    className="italic"
                  >
                    Priya Sharma
                  </text>
                </svg>
              </div>
              
              {/* Attribution */}
              <div>
                <p className="text-background font-medium">Priya Sharma</p>
                <p className="text-background/70 text-sm">
                  Head of Workplace Operations, TechVentures India
                </p>
              </div>
            </motion.div>
        </div>
      </div>
      
      {/* Trusted by heading */}
      <div className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl antialiased"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.18, color: 'hsl(150, 18%, 22%)' }}
          >
            Trusted by the leading
            <br />
            workspace teams
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
