import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  Ticket,
  BookOpen,
  Trophy,
  Target,
  Headphones,
  Calculator,
  FileText,
  Wallet,
  Receipt,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const metrics = [
  { category: "Virtual Office", bookings: 847, revenue: "₹12.4L", growth: 15 },
  { category: "Meeting Rooms", bookings: 1245, revenue: "₹8.2L", growth: 22 },
  { category: "Day Pass", bookings: 523, revenue: "₹4.1L", growth: 8 },
  { category: "Team Space", bookings: 232, revenue: "₹23.8L", growth: 35 },
];

const topPerformers = [
  { name: "Rahul Sharma", role: "Sales Lead", deals: 45, revenue: "₹8.5L", conversion: "68%" },
  { name: "Priya Patel", role: "Sales Executive", deals: 38, revenue: "₹6.2L", conversion: "62%" },
  { name: "Amit Kumar", role: "Sales Executive", deals: 32, revenue: "₹5.1L", conversion: "58%" },
];

const SalesAnalytics = () => {
  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Sales <span className="text-primary italic">Analytics</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive sales performance metrics and insights
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Total Bookings" value="2,847" change={18} icon={BarChart3} />
        <StatsCard title="Revenue MTD" value="₹48.5L" change={23} icon={TrendingUp} />
        <StatsCard title="Conversion Rate" value="34.5%" change={5} icon={Target} />
        <StatsCard title="Avg Deal Size" value="₹17K" change={12} icon={Wallet} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Revenue by Category */}
        <div className="lg:col-span-2 bg-background border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4">Revenue by Category</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-semibold text-foreground">Category</th>
                  <th className="text-right py-3 text-sm font-semibold text-foreground">Bookings</th>
                  <th className="text-right py-3 text-sm font-semibold text-foreground">Revenue</th>
                  <th className="text-right py-3 text-sm font-semibold text-foreground">Growth</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((item) => (
                  <tr key={item.category} className="border-b border-border last:border-b-0">
                    <td className="py-4 font-medium text-foreground">{item.category}</td>
                    <td className="py-4 text-right text-muted-foreground">{item.bookings.toLocaleString()}</td>
                    <td className="py-4 text-right font-semibold text-foreground">{item.revenue}</td>
                    <td className="py-4 text-right">
                      <span className={`flex items-center justify-end gap-1 ${item.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        {Math.abs(item.growth)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-background border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4">Top Performers</h2>
          <div className="space-y-4">
            {topPerformers.map((person, index) => (
              <div key={person.name} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{person.name}</h4>
                  <p className="text-xs text-muted-foreground">{person.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{person.revenue}</p>
                  <p className="text-xs text-muted-foreground">{person.deals} deals</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-primary text-primary-foreground">AI Insight</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Based on current trends, Team Space bookings are growing 35% faster than other categories. 
          Consider increasing marketing efforts for this segment. Virtual Office renewals are due for 
          12 clients next week - prioritize outreach to maximize retention.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default SalesAnalytics;
