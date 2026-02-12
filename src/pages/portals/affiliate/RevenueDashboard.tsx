import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  Wallet,
  Receipt,
  Target,
  FileText,
  Send,
  Trophy,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const monthlyRevenue = [
  { month: "Oct 2023", earnings: "₹18,500", bookings: 5 },
  { month: "Nov 2023", earnings: "₹24,200", bookings: 7 },
  { month: "Dec 2023", earnings: "₹32,800", bookings: 9 },
  { month: "Jan 2024", earnings: "₹45,000", bookings: 12 },
  { month: "Feb 2024 (MTD)", earnings: "₹28,000", bookings: 8 },
];

const revenueByProduct = [
  { product: "Virtual Office Premium", revenue: "₹85,000", percentage: 35 },
  { product: "Team Space", revenue: "₹62,000", percentage: 26 },
  { product: "Virtual Office Standard", revenue: "₹48,000", percentage: 20 },
  { product: "Meeting Rooms", revenue: "₹28,000", percentage: 12 },
  { product: "Day Pass", revenue: "₹17,000", percentage: 7 },
];

const RevenueDashboard = () => {
  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Revenue <span className="text-primary italic">Dashboard</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Track your earnings and commission trends
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Total Earnings" value="₹2.8L" change={22} icon={TrendingUp} />
        <StatsCard title="This Month" value="₹45K" change={15} icon={Wallet} />
        <StatsCard title="Pending Payout" value="₹28K" icon={Receipt} />
        <StatsCard title="Avg Commission" value="₹3.2K" change={8} icon={ArrowUpRight} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Trend */}
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4">Monthly Earnings Trend</h2>
          <div className="space-y-4">
            {monthlyRevenue.map((item) => (
              <div key={item.month} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-foreground">{item.month}</span>
                    <span className="font-semibold text-foreground">{item.earnings}</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(parseInt(item.earnings.replace(/[₹,]/g, '')) / 45000) * 100}%` }}
                    />
                  </div>
                </div>
                <Badge variant="outline" className="ml-4">{item.bookings} deals</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Product */}
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4">Revenue by Product</h2>
          <div className="space-y-4">
            {revenueByProduct.map((item) => (
              <div key={item.product}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-foreground">{item.product}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{item.revenue}</span>
                    <span className="text-sm text-muted-foreground">({item.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-xl">
        <Badge className="bg-primary text-primary-foreground mb-2">AI Insight</Badge>
        <p className="text-sm text-muted-foreground">
          Your earnings have grown 43% over the last 3 months. Virtual Office Premium shows the highest 
          conversion rate (68%). Focus on Team Space promotions to increase revenue share in this segment.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default RevenueDashboard;
