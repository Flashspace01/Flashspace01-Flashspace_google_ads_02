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
  ArrowUpRight,
  ArrowDownRight,
  Building2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const revenueByCity = [
  { city: "Mumbai", revenue: "₹18.5L", growth: 22, share: 38 },
  { city: "Delhi", revenue: "₹12.2L", growth: 18, share: 25 },
  { city: "Bangalore", revenue: "₹10.8L", growth: 28, share: 22 },
  { city: "Chennai", revenue: "₹4.5L", growth: 12, share: 9 },
  { city: "Hyderabad", revenue: "₹2.5L", growth: 35, share: 6 },
];

const revenueByCategory = [
  { category: "Virtual Office", revenue: "₹22.4L", clients: 847, growth: 15 },
  { category: "Team Space", revenue: "₹15.8L", clients: 232, growth: 35 },
  { category: "Meeting Rooms", revenue: "₹6.2L", bookings: 1245, growth: 22 },
  { category: "Day Pass", revenue: "₹4.1L", bookings: 523, growth: 8 },
];

const RevenueDashboard = () => {
  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Revenue <span className="text-primary italic">Dashboard</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Complete financial overview and analytics
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Total Revenue (MTD)" value="₹48.5L" change={23} icon={TrendingUp} />
        <StatsCard title="Revenue (YTD)" value="₹4.2Cr" change={18} icon={Wallet} />
        <StatsCard title="Avg Revenue/Client" value="₹34K" change={12} icon={Users} />
        <StatsCard title="Partner Payouts" value="₹28.5L" change={15} icon={Building2} />
      </div>

      <Tabs defaultValue="city" className="space-y-6">
        <TabsList>
          <TabsTrigger value="city">By City</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="partner">By Partner</TabsTrigger>
        </TabsList>
        
        <TabsContent value="city">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">City</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Revenue</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Growth</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Share</th>
                </tr>
              </thead>
              <tbody>
                {revenueByCity.map((item) => (
                  <tr key={item.city} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{item.city}</td>
                    <td className="p-4 text-right font-semibold text-foreground">{item.revenue}</td>
                    <td className="p-4 text-right">
                      <span className={`flex items-center justify-end gap-1 ${item.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        {Math.abs(item.growth)}%
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${item.share}%` }} />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{item.share}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="category">
          <div className="grid gap-4 sm:grid-cols-2">
            {revenueByCategory.map((item) => (
              <div key={item.category} className="bg-background border border-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">{item.category}</h3>
                  <Badge className={`${item.growth >= 20 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    +{item.growth}%
                  </Badge>
                </div>
                <p className="text-3xl font-extrabold text-foreground mb-2">{item.revenue}</p>
                <p className="text-sm text-muted-foreground">
                  {item.clients ? `${item.clients} active clients` : `${item.bookings} bookings`}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="partner">
          <div className="bg-background border border-border rounded-xl p-6 text-center">
            <p className="text-muted-foreground">Partner-wise revenue breakdown coming soon</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* AI Insight */}
      <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-xl">
        <Badge className="bg-primary text-primary-foreground mb-2">AI Forecast</Badge>
        <p className="text-sm text-muted-foreground">
          Based on current growth trends and seasonal patterns, projected revenue for next month is 
          <strong className="text-foreground"> ₹52.8L</strong> (+8.8%). Bangalore shows the highest growth 
          potential with 28% MoM increase. Consider expanding team space inventory in this region.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default RevenueDashboard;
