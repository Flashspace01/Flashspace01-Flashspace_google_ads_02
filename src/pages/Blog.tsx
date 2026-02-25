import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

import coworkingBanner from "@/assets/coworking-banner.jpg";
import meetingBanner from "@/assets/meeting-room-banner.jpg";
import aiWorkspaceOffice from "@/assets/ai-workspace-office.png";
import heroCoworking from "@/assets/hero-coworking.jpg";
import workspaceCoworking from "@/assets/workspace-coworking.jpg";
import endToEndControl from "@/assets/end-to-end-control.jpg";
import selfImproving from "@/assets/self-improving-system.jpg";

const featuredPost = {
  title: "How TechStart scaled to 15 locations with FlashSpace",
  excerpt:
    "From a single hot desk to 15 managed offices across India — here's how TechStart used FlashSpace to fuel their expansion without hiring a single facilities manager.",
  category: "Case Study",
  date: "Feb 20, 2026",
  readTime: "8 min read",
  image: coworkingBanner,
};

const blogPosts = [
  {
    title: "Webinar: Hybrid workspace best practices for 2025",
    excerpt: "Key takeaways from our latest webinar on designing hybrid-first workspace strategies.",
    category: "Webinar",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    image: meetingBanner,
  },
  {
    title: "How AI is transforming workspace booking efficiency",
    excerpt: "Discover how AI-driven demand prediction helps space partners optimize occupancy rates.",
    category: "Technology",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    image: aiWorkspaceOffice,
  },
  {
    title: "The rise of on-demand workspaces in tier-2 cities",
    excerpt: "Why professionals in Jaipur, Lucknow, and Chandigarh are driving demand for flexible workspaces.",
    category: "Industry",
    date: "Feb 5, 2026",
    readTime: "4 min read",
    image: heroCoworking,
  },
  {
    title: "5 things to look for in a coworking management platform",
    excerpt: "A no-nonsense guide for space operators evaluating tech partners.",
    category: "Guide",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    image: workspaceCoworking,
  },
  {
    title: "FlashSpace partner spotlight: WorkHub Bangalore",
    excerpt: "How WorkHub grew revenue 2.5x in 6 months after joining our partner network.",
    category: "Case Study",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    image: endToEndControl,
  },
  {
    title: "Why enterprises are ditching long-term leases",
    excerpt: "The shift to flexible workspace procurement and what it means for operators.",
    category: "Industry",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    image: selfImproving,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-4 block">
                Blog
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Insights & Stories
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-12 lg:pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-6 bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="text-xs">{featuredPost.category}</Badge>
                  <span className="text-xs text-muted-foreground">{featuredPost.date}</span>
                  <span className="text-xs text-muted-foreground">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.a>
          </div>
        </section>

        {/* Post Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.a
                  key={post.title}
                  href="#"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <span className="text-xs text-muted-foreground mt-3 block">{post.date}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
