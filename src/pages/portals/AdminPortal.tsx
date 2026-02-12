import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { FeatureSection } from "@/components/dashboard/FeatureSection";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Trophy,
  Ticket,
  CreditCard,
  FileText,
  Globe,
  Target,
  Headphones,
  Calculator,
  BarChart3,
  Wallet,
  Receipt
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Sales Analytics", href: "/admin-portal/sales", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Lead Management", href: "/admin-portal/leads", icon: <Target className="w-5 h-5" /> },
  { label: "Client Management", href: "/admin-portal/clients", icon: <Users className="w-5 h-5" /> },
  { label: "Ticket System", href: "/admin-portal/tickets", icon: <Ticket className="w-5 h-5" /> },
  { label: "Support Chats", href: "/admin-portal/support", icon: <Headphones className="w-5 h-5" /> },
  { label: "Learning Hub", href: "/admin-portal/learning", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Leaderboard", href: "/admin-portal/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  { label: "Revenue Dashboard", href: "/admin-portal/revenue", icon: <Wallet className="w-5 h-5" /> },
  { label: "Invoices", href: "/admin-portal/invoices", icon: <Receipt className="w-5 h-5" /> },
  { label: "Receivable/Payable", href: "/admin-portal/finance", icon: <Calculator className="w-5 h-5" /> },
  { label: "Balance Sheet", href: "/admin-portal/balance", icon: <FileText className="w-5 h-5" /> },
];

const salesAIFeatures = [
  {
    title: "Sales Forecasting",
    description: "AI-based analysis and forecasting of sales based on web portal activity",
    isAI: true
  },
  {
    title: "Lead Scoring",
    description: "AI-enabled lead scoring with sales probability prediction",
    isAI: true
  },
  {
    title: "Client Suggestions",
    description: "AI forecasting and suggestions on which clients to focus on",
    isAI: true
  },
  {
    title: "Inhouse AI Agent",
    description: "Ask anything about clients, get improvement suggestions and more",
    isAI: true
  },
];

const salesFeatures = [
  {
    title: "Client Information Panel",
    description: "View all client information including their activity on FlashSpace ecosystem",
    href: "/admin-portal/clients"
  },
  {
    title: "CRM Integration",
    description: "Manage leads with email and WhatsApp marketing workflows integrated",
    href: "/admin-portal/leads"
  },
  {
    title: "Coupon Generator",
    description: "Create discount vouchers for payment portal to help close deals",
    href: "/admin-portal/sales"
  },
  {
    title: "WhatsApp Access",
    description: "Tap into client chats coming into the website via WhatsApp API",
    href: "/admin-portal/support"
  },
  {
    title: "Booking Dashboard",
    description: "View total bookings by categories, packages, and sales amounts",
    href: "/admin-portal/sales"
  },
  {
    title: "Leaderboard",
    description: "Track KPIs, targets, and achievements with team rankings",
    href: "/admin-portal/leaderboard"
  },
];

const supportAIFeatures = [
  {
    title: "AI Support Agent",
    description: "Access all client data - agreements, renewals, visits, and more",
    isAI: true
  },
  {
    title: "Auto Translation",
    description: "Translate any language used by clients for support team understanding",
    isAI: true
  },
  {
    title: "Satisfaction Dashboard",
    description: "AI-based metrics on client satisfaction, pending cases, and more",
    isAI: true
  },
  {
    title: "Performance Suggestions",
    description: "AI board showing best performers' strategies and improvement tips",
    isAI: true
  },
];

const supportFeatures = [
  {
    title: "Ticket Management",
    description: "Auto-assign tickets with due dates, follow-ups, and escalation alerts",
    href: "/admin-portal/tickets"
  },
  {
    title: "Chat Takeover",
    description: "Take over support chats and view all active and past tickets",
    href: "/admin-portal/support"
  },
  {
    title: "Client Portal",
    description: "Detailed access to all client accounts and their history",
    href: "/admin-portal/clients"
  },
  {
    title: "Learning Hub",
    description: "Training videos, articles, and documents for day-to-day tasks",
    href: "/admin-portal/learning"
  },
  {
    title: "Support Leaderboard",
    description: "Track team performance and highlight best performers",
    href: "/admin-portal/leaderboard"
  },
];

const financeFeatures = [
  {
    title: "Revenue Dashboard",
    description: "Track payments received, receivable, payable, and more data",
    href: "/admin-portal/revenue"
  },
  {
    title: "Receivable/Payable",
    description: "Filter by space, city to get detailed payment information",
    href: "/admin-portal/finance"
  },
  {
    title: "Invoice Management",
    description: "View and approve/reject invoices from clients and space partners",
    href: "/admin-portal/invoices"
  },
  {
    title: "Cleared Invoices",
    description: "Track all cleared invoices with payment details",
    href: "/admin-portal/invoices"
  },
  {
    title: "Balance Sheet",
    description: "Overall, space-specific, region-specific, and date-range reports",
    href: "/admin-portal/balance"
  },
  {
    title: "AI Assistant",
    description: "Custom AI agent to answer questions about any client",
    isAI: true
  },
];

const AdminPortal = () => {
  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Admin <span className="text-primary italic">Portal</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Complete control over sales, support, and finance operations
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Bookings"
          value="2,847"
          change={18}
          icon={BarChart3}
        />
        <StatsCard
          title="Active Clients"
          value="1,234"
          change={12}
          icon={Users}
        />
        <StatsCard
          title="Monthly Revenue"
          value="₹48.5L"
          change={23}
          icon={TrendingUp}
        />
        <StatsCard
          title="Open Tickets"
          value="47"
          change={-8}
          icon={Ticket}
        />
      </div>

      {/* Sales Team Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-2">Sales Team</h2>
        <p className="text-muted-foreground">Tools and insights for the sales team</p>
      </div>

      <FeatureSection
        title="AI-Powered Sales Tools"
        description="Leverage AI for better sales outcomes"
        features={salesAIFeatures}
      />

      <FeatureSection
        title="Sales Management"
        description="Comprehensive tools for managing sales"
        icon={Target}
        features={salesFeatures}
      />

      {/* Support Team Section */}
      <div className="mb-4 mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Support Team</h2>
        <p className="text-muted-foreground">Tools for client support and satisfaction</p>
      </div>

      <FeatureSection
        title="AI Support Tools"
        description="AI-powered support assistance"
        features={supportAIFeatures}
      />

      <FeatureSection
        title="Support Operations"
        description="Manage tickets and client support"
        icon={Headphones}
        features={supportFeatures}
      />

      {/* Finance Team Section */}
      <div className="mb-4 mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Finance & Accounts</h2>
        <p className="text-muted-foreground">Financial management and reporting</p>
      </div>

      <FeatureSection
        title="Financial Management"
        description="Complete financial control and reporting"
        icon={Wallet}
        features={financeFeatures}
      />
    </DashboardLayout>
  );
};

export default AdminPortal;
