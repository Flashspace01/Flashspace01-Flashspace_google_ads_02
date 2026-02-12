import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { FeatureSection } from "@/components/dashboard/FeatureSection";
import { 
  LayoutDashboard, 
  Building2, 
  Calendar,
  Users,
  CreditCard,
  MessageSquare,
  Star,
  Ticket,
  Mail,
  UserPlus,
  Settings,
  TrendingUp
} from "lucide-react";
import { AddSpaceDialog } from "@/components/modals/AddSpaceDialog";

const navItems = [
  { label: "Dashboard", href: "/space-partner-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Spaces", href: "/space-partner-portal/spaces", icon: <Building2 className="w-5 h-5" /> },
  { label: "Booking Calendar", href: "/space-partner-portal/calendar", icon: <Calendar className="w-5 h-5" /> },
  { label: "Clients", href: "/space-partner-portal/clients", icon: <Users className="w-5 h-5" /> },
  { label: "Invoices & Payments", href: "/space-partner-portal/payments", icon: <CreditCard className="w-5 h-5" /> },
  { label: "Client Enquiries", href: "/space-partner-portal/enquiries", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Feedback & NPS", href: "/space-partner-portal/feedback", icon: <Star className="w-5 h-5" /> },
  { label: "Tickets & Tasks", href: "/space-partner-portal/tickets", icon: <Ticket className="w-5 h-5" /> },
  { label: "Mail & Visits", href: "/space-partner-portal/mail-visits", icon: <Mail className="w-5 h-5" /> },
  { label: "Team Members", href: "/space-partner-portal/team", icon: <UserPlus className="w-5 h-5" /> },
  { label: "Profile & KYC", href: "/space-partner-portal/profile", icon: <Settings className="w-5 h-5" /> },
];

const spaceManagementFeatures = [
  {
    title: "Add Spaces",
    description: "Add spaces in different locations with photos, videos, and virtual tours",
    href: "#add-space"
  },
  {
    title: "Booking Calendar",
    description: "Check booking requests for on-demand options and manage availability",
    href: "/space-partner-portal/calendar"
  },
  {
    title: "Real-time Notifications",
    description: "Get notified on each booking stage completion for your clients",
    href: "/space-partner-portal/calendar"
  },
];

const clientManagementFeatures = [
  {
    title: "Client Details View",
    description: "See each client's unique ID, plan, KYC details, and agreement info",
    href: "/space-partner-portal/clients"
  },
  {
    title: "Direct Client Chat",
    description: "Connect with enquiring clients directly and close deals for higher revenue share",
    href: "/space-partner-portal/enquiries"
  },
  {
    title: "Mail & Visit Handling",
    description: "Upload couriers received and track visits for each client",
    href: "/space-partner-portal/mail-visits"
  },
];

const aiFeatures = [
  {
    title: "Revenue Forecast",
    description: "AI-enabled forecasting for quarterly, monthly, and yearly revenue",
    isAI: true
  },
  {
    title: "Renewal Analysis",
    description: "AI predicts client renewal probability based on behavior and activity",
    isAI: true
  },
  {
    title: "AI Support Agent",
    description: "Ask anything about any client - agreement dates, meeting rooms used, and more",
    isAI: true
  },
  {
    title: "Performance Suggestions",
    description: "AI-based suggestions to improve metrics and get better revenue",
    isAI: true
  },
];

const financialFeatures = [
  {
    title: "Invoice Submission",
    description: "Submit invoices and track payments received and due",
    href: "/space-partner-portal/payments"
  },
  {
    title: "Revenue Reports",
    description: "Detailed reports on payments received till date",
    href: "/space-partner-portal/payments"
  },
  {
    title: "Feedback Dashboard",
    description: "Check client feedback, NPS scores, and improvement suggestions",
    href: "/space-partner-portal/feedback"
  },
];

const teamFeatures = [
  {
    title: "Team Management",
    description: "Add team members and assign specific access levels",
    href: "/space-partner-portal/team"
  },
  {
    title: "Tasks & Tickets",
    description: "View and assign client tickets to team members with deadlines",
    href: "/space-partner-portal/tickets"
  },
  {
    title: "Partner Profile",
    description: "Manage company details, KYC, documentation, and bank details",
    href: "/space-partner-portal/profile"
  },
];

const SpacePartnerPortal = () => {
  const [addSpaceOpen, setAddSpaceOpen] = useState(false);

  // Override the Add Spaces click
  const handleSpaceManagementClick = (feature: { title: string; href?: string }) => {
    if (feature.title === "Add Spaces") {
      setAddSpaceOpen(true);
    }
  };

  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Space Partner <span className="text-primary italic">Dashboard</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your workspace listings, clients, and revenue
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Active Spaces"
          value="8"
          change={12}
          icon={Building2}
        />
        <StatsCard
          title="Total Clients"
          value="156"
          change={8}
          icon={Users}
        />
        <StatsCard
          title="Monthly Revenue"
          value="₹4.2L"
          change={15}
          icon={TrendingUp}
        />
        <StatsCard
          title="Pending Bookings"
          value="12"
          icon={Calendar}
        />
      </div>

      {/* Feature Sections */}
      <FeatureSection
        title="AI-Powered Insights"
        description="Leverage AI for smarter business decisions"
        features={aiFeatures}
      />

      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        const card = target.closest('[class*="rounded-xl p-5"]');
        if (card) {
          const title = card.querySelector('h3')?.textContent;
          if (title === "Add Spaces") {
            e.stopPropagation();
            setAddSpaceOpen(true);
          }
        }
      }}>
        <FeatureSection
          title="Space Management"
          description="Manage all your workspace listings"
          icon={Building2}
          features={spaceManagementFeatures}
        />
      </div>

      <FeatureSection
        title="Client Management"
        description="Handle client relationships effectively"
        icon={Users}
        features={clientManagementFeatures}
      />

      <FeatureSection
        title="Financial Management"
        description="Track invoices, payments, and revenue"
        icon={CreditCard}
        features={financialFeatures}
      />

      <FeatureSection
        title="Team & Operations"
        description="Manage your team and operations"
        icon={UserPlus}
        features={teamFeatures}
      />

      <AddSpaceDialog open={addSpaceOpen} onOpenChange={setAddSpaceOpen} />
    </DashboardLayout>
  );
};

export default SpacePartnerPortal;
