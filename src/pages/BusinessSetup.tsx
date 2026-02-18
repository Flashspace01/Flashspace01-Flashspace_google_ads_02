import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const BusinessSetup = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Business Setup
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Launch your business in any city, hassle-free. More content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessSetup;
