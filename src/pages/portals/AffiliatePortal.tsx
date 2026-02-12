import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { FeatureSection } from "@/components/dashboard/FeatureSection";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  CreditCard,
  FileText,
  Trophy,
  MessageSquare,
  Share2,
  Wallet,
  Receipt,
  Send,
  Target,
  BarChart3
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/affiliate-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Booking Management", href: "/affiliate-portal/bookings", icon: <Users className="w-5 h-5" /> },
  { label: "Revenue Dashboard", href: "/affiliate-portal/revenue", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Payouts", href: "/affiliate-portal/payouts", icon: <Wallet className="w-5 h-5" /> },
  { label: "Invoices", href: "/affiliate-portal/invoices", icon: <Receipt className="w-5 h-5" /> },
  { label: "Lead Management", href: "/affiliate-portal/leads", icon: <Target className="w-5 h-5" /> },
  { label: "Quotation Generator", href: "/affiliate-portal/quotations", icon: <FileText className="w-5 h-5" /> },
  { label: "Marketing Tools", href: "/affiliate-portal/marketing", icon: <Send className="w-5 h-5" /> },
  { label: "Leaderboard", href: "/affiliate-portal/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  { label: "Support", href: "/affiliate-portal/support", icon: <MessageSquare className="w-5 h-5" /> },
];

const aiFeatures = [
  {
    title: "Renewal Forecasting",
    description: "AI predicts renewals and expected revenue from existing clients",
    isAI: true
  },
  {
    title: "Cross-Sell Suggestions",
    description: "AI-based suggestions for additional services to increase revenue",
    isAI: true
  },
  {
    title: "Performance Insights",
    description: "AI suggestions on how to improve your performance ranking",
    isAI: true
  },
  {
    title: "Revenue Predictions",
    description: "AI forecasts revenue for coming months with growth suggestions",
    isAI: true
  },
];

const bookingFeatures = [
  {
    title: "Booking Management",
    description: "View companies you've referred and their booking status",
    href: "/affiliate-portal/bookings"
  },
  {
    title: "Client Tracking",
    description: "Track all clients from referral to conversion and beyond",
    href: "/affiliate-portal/bookings"
  },
  {
    title: "Status Updates",
    description: "Real-time updates on client booking progress",
    href: "/affiliate-portal/bookings"
  },
];

const revenueFeatures = [
  {
    title: "Revenue Dashboard",
    description: "Complete view of your earnings and revenue trends",
    href: "/affiliate-portal/revenue"
  },
  {
    title: "Payout Tracking",
    description: "Track completed payouts, pending, and expected dates",
    href: "/affiliate-portal/payouts"
  },
  {
    title: "Auto Invoicing",
    description: "Generate and share invoices automatically with clients",
    href: "/affiliate-portal/invoices"
  },
];

const marketingFeatures = [
  {
    title: "Quotation Generator",
    description: "Create instant quotations with FlashSpace and affiliate branding",
    href: "/affiliate-portal/quotations"
  },
  {
    title: "WhatsApp Follow-ups",
    description: "Integrated WhatsApp and email follow-ups for all leads",
    href: "/affiliate-portal/marketing"
  },
  {
    title: "Lead Management",
    description: "Manage all your leads in one place with status tracking",
    href: "/affiliate-portal/leads"
  },
];

const leaderboardFeatures = [
  {
    title: "Regional Rankings",
    description: "See your position among affiliates in your region",
    href: "/affiliate-portal/leaderboard"
  },
  {
    title: "National Leaderboard",
    description: "Compete with affiliates pan-India for top positions",
    href: "/affiliate-portal/leaderboard"
  },
  {
    title: "AI Support Chat",
    description: "Get queries resolved with AI that escalates to support when needed",
    isAI: true
  },
];

const AffiliatePortal = () => {
  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Affiliate <span className="text-primary italic">Dashboard</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Track your referrals, revenue, and performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Referrals"
          value="89"
          change={15}
          icon={Share2}
        />
        <StatsCard
          title="Converted Clients"
          value="34"
          change={22}
          icon={Users}
        />
        <StatsCard
          title="Total Earnings"
          value="₹2.8L"
          change={18}
          icon={TrendingUp}
        />
        <StatsCard
          title="Pending Payout"
          value="₹45K"
          icon={Wallet}
        />
      </div>

      {/* Feature Sections */}
      <FeatureSection
        title="AI-Powered Insights"
        description="Leverage AI to maximize your earnings"
        features={aiFeatures}
      />

      <FeatureSection
        title="Booking Management"
        description="Track all your referrals and their status"
        icon={Users}
        features={bookingFeatures}
      />

      <FeatureSection
        title="Revenue & Payouts"
        description="Track your earnings and payments"
        icon={Wallet}
        features={revenueFeatures}
      />

      <FeatureSection
        title="Marketing Tools"
        description="Tools to help you close more deals"
        icon={Send}
        features={marketingFeatures}
      />

      <FeatureSection
        title="Leaderboard & Support"
        description="Compete and get help when needed"
        icon={Trophy}
        features={leaderboardFeatures}
      />
    </DashboardLayout>
  );
};

export default AffiliatePortal;
