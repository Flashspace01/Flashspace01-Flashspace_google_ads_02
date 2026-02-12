import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { FeatureSection } from "@/components/dashboard/FeatureSection";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Mail, 
  Calendar,
  CreditCard,
  Bell,
  HelpCircle,
  Package,
  MapPin,
  Clock,
  Users
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/customer-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Bookings", href: "/customer-portal/bookings", icon: <Package className="w-5 h-5" /> },
  { label: "Mail Records", href: "/customer-portal/mail", icon: <Mail className="w-5 h-5" /> },
  { label: "Visit Records", href: "/customer-portal/visits", icon: <Calendar className="w-5 h-5" /> },
  { label: "Payments", href: "/customer-portal/payments", icon: <CreditCard className="w-5 h-5" /> },
  { label: "Documents", href: "/customer-portal/documents", icon: <FileText className="w-5 h-5" /> },
  { label: "Chat Support", href: "/customer-portal/chat", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Notifications", href: "/customer-portal/notifications", icon: <Bell className="w-5 h-5" /> },
  { label: "Help Center", href: "/customer-portal/help", icon: <HelpCircle className="w-5 h-5" /> },
];

const aiFeatures = [
  {
    title: "Goal Analysis Quiz",
    description: "AI-powered quiz to analyze your ultimate goal for virtual office and get personalized suggestions",
    isAI: true
  },
  {
    title: "Delivery Predictions",
    description: "AI predicts expected delivery date and time for your orders with real-time updates",
    isAI: true
  },
  {
    title: "Delay Tracking & Alerts",
    description: "If delays occur, AI explains the reason and prescribes actions for fast tracking",
    isAI: true
  },
  {
    title: "Compliance Suggestions",
    description: "AI promotes additional compliance services and best options for next 3-6 months",
    isAI: true
  },
];

const bookingFeatures = [
  {
    title: "Active Subscriptions",
    description: "View all your active workspace subscriptions and their status",
    href: "/customer-portal/bookings"
  },
  {
    title: "Renewal Alerts",
    description: "Get timely payment and renewal alerts directly in your dashboard",
    href: "/customer-portal/notifications"
  },
  {
    title: "Booking History",
    description: "Complete history of all your past bookings and transactions",
    href: "/customer-portal/bookings"
  },
];

const communicationFeatures = [
  {
    title: "Direct Chat with Partner",
    description: "Chat directly with Space Partner to resolve queries (privacy protected)",
    href: "/customer-portal/chat"
  },
  {
    title: "Mail Records View",
    description: "See all couriers received at your office with dispatch status and details",
    href: "/customer-portal/mail"
  },
  {
    title: "Visit Records",
    description: "Track all visits done at the space regarding your registered company",
    href: "/customer-portal/visits"
  },
];

const CustomerPortal = () => {
  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Welcome back, <span className="text-primary italic">Customer</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your workspace subscriptions and track your orders
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Active Subscriptions"
          value="3"
          icon={Package}
        />
        <StatsCard
          title="Pending Deliveries"
          value="2"
          icon={Clock}
        />
        <StatsCard
          title="Offices"
          value="5"
          icon={MapPin}
        />
        <StatsCard
          title="Team Members"
          value="12"
          icon={Users}
        />
      </div>

      {/* Feature Sections */}
      <FeatureSection
        title="AI-Powered Features"
        description="Intelligent assistance throughout your journey"
        features={aiFeatures}
      />

      <FeatureSection
        title="Booking Management"
        description="Track and manage all your bookings"
        icon={Package}
        features={bookingFeatures}
      />

      <FeatureSection
        title="Communication & Records"
        description="Stay connected and track all activities"
        icon={MessageSquare}
        features={communicationFeatures}
      />
    </DashboardLayout>
  );
};

export default CustomerPortal;
