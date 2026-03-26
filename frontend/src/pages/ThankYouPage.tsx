import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import officeImg1 from "@/assets/office-interior-1.jpg";
import officeImg2 from "@/assets/office-interior-2.jpg";
import officeImg3 from "@/assets/office-interior-3.jpg";
import officeImg4 from "@/assets/office-interior-4.jpg";

type SpaceCard = {
  name: string;
  city: string;
  area: string;
  price: string;
  originalPrice: string;
  rating: number;
  image: string;
  popular?: boolean;
};

const FLASHSPACE_VO_URL = "https://www.flashspace.ai/services/virtual-office";

const thankYouSpaces: SpaceCard[] = [
  {
    name: "Stirring Minds",
    city: "Delhi",
    area: "Chandni Chowk",
    price: "₹800/month",
    originalPrice: "₹1,000",
    rating: 4.8,
    image: officeImg2,
    popular: true,
  },
  {
    name: "CP Alt F",
    city: "Delhi",
    area: "Connaught Place",
    price: "₹2,667/month",
    originalPrice: "₹3,333",
    rating: 4.7,
    image: officeImg3,
  },
  {
    name: "IndiraNagar - Aspire Coworks",
    city: "Bangalore",
    area: "Indiranagar",
    price: "₹833/month",
    originalPrice: "₹1,083",
    rating: 4.8,
    image: officeImg1,
    popular: true,
  },
  {
    name: "Koramangala - Aspire Coworks",
    city: "Bangalore",
    area: "Koramangala",
    price: "₹1,000/month",
    originalPrice: "₹1,250",
    rating: 4.6,
    image: officeImg4,
  },
  {
    name: "Workzone",
    city: "Ahmedabad",
    area: "Makarba",
    price: "₹1,083/month",
    originalPrice: "₹1,333",
    rating: 4.8,
    image: officeImg2,
  },
  {
    name: "Sweet Spot Spaces",
    city: "Ahmedabad",
    area: "Navrangpura",
    price: "₹1,167/month",
    originalPrice: "₹1,417",
    rating: 4.7,
    image: officeImg3,
  },
  {
    name: "WBB Office",
    city: "Chennai",
    area: "Nandanam",
    price: "₹1,000/month",
    originalPrice: "₹1,250",
    rating: 4.7,
    image: officeImg1,
  },
  {
    name: "CS Coworking",
    city: "Hyderabad",
    area: "Gachibowli",
    price: "₹917/month",
    originalPrice: "₹1,167",
    rating: 4.5,
    image: officeImg4,
  },
];

const ThankYouPage = () => {
  const navigate = useNavigate();

  const redirectToSpaceListing = () => {
    window.location.href = FLASHSPACE_VO_URL;
  };

  return (
    <AppLayout onNavCtaClick={() => navigate("/lead-form")}>
      <main className="bg-background">
        <section className="border-b border-border/50 bg-gradient-to-b from-primary/[0.08] to-transparent pt-24 pb-14 lg:pt-28 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-9 w-9 text-primary" />
              </div>
              <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground mb-4">
                Thank You - Request Received
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Your Best-Match Spaces Are Ready
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                Based on your request, here are high-performing virtual office options from major cities. Click any card to go directly to our live listing page and lock your best offer.
              </p>
              <Button size="lg" className="h-12 px-8 font-semibold" onClick={redirectToSpaceListing}>
                View All Virtual Office Deals
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {thankYouSpaces.map((space, index) => (
                <motion.article
                  key={`${space.name}-${space.city}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={space.image}
                      alt={`${space.name} in ${space.city}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={700}
                      height={440}
                    />
                    {space.popular && (
                      <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {space.city}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                        {space.rating}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-foreground leading-tight mb-1">{space.name}</h2>
                    <p className="text-xs text-muted-foreground mb-4">{space.area}</p>

                    <div className="mb-5 flex items-end gap-2">
                      <span className="text-2xl font-extrabold text-primary">{space.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{space.originalPrice}</span>
                    </div>

                    <Button className="w-full h-10 font-semibold" onClick={redirectToSpaceListing}>
                      Get Best Price
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onPrimaryCtaClick={() => navigate("/lead-form")} />
    </AppLayout>
  );
};

export default ThankYouPage;
