import { DashboardLayout } from "@/components/layout/DashboardLayout";
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
  Download,
  Calendar,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const overallSummary = [
  { label: "Total Revenue", amount: "₹4,85,00,000", type: "credit" },
  { label: "Total Expenses", amount: "₹2,85,00,000", type: "debit" },
  { label: "Partner Payouts", amount: "₹1,45,00,000", type: "debit" },
  { label: "Operating Costs", amount: "₹48,00,000", type: "debit" },
  { label: "Net Profit", amount: "₹1,07,00,000", type: "profit" },
];

const monthlyBreakdown = [
  { month: "January 2024", revenue: "₹42.5L", expenses: "₹28.5L", profit: "₹14.0L" },
  { month: "February 2024 (MTD)", revenue: "₹48.5L", expenses: "₹32.1L", profit: "₹16.4L" },
];

const cityBreakdown = [
  { city: "Mumbai", revenue: "₹1.85Cr", expenses: "₹1.12Cr", profit: "₹73L", margin: "39%" },
  { city: "Delhi", revenue: "₹1.22Cr", expenses: "₹78L", profit: "₹44L", margin: "36%" },
  { city: "Bangalore", revenue: "₹1.08Cr", expenses: "₹62L", profit: "₹46L", margin: "43%" },
  { city: "Chennai", revenue: "₹45L", expenses: "₹28L", profit: "₹17L", margin: "38%" },
  { city: "Hyderabad", revenue: "₹25L", expenses: "₹15L", profit: "₹10L", margin: "40%" },
];

const BalanceSheet = () => {
  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Balance <span className="text-primary italic">Sheet</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Complete financial summary and reports
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Select Period
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overall Summary */}
      <div className="bg-background border border-border rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-4">FY 2023-24 Summary</h2>
        <div className="space-y-3">
          {overallSummary.map((item, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
              item.type === 'profit' ? 'bg-green-50 border border-green-200' : 'bg-muted/30'
            }`}>
              <span className={`font-medium ${item.type === 'profit' ? 'text-green-700' : 'text-foreground'}`}>
                {item.label}
              </span>
              <span className={`font-bold text-lg ${
                item.type === 'credit' ? 'text-green-600' : 
                item.type === 'profit' ? 'text-green-700' : 
                'text-red-600'
              }`}>
                {item.type === 'debit' ? '-' : ''}{item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Tabs defaultValue="monthly" className="space-y-6">
        <TabsList>
          <TabsTrigger value="monthly">Monthly Breakdown</TabsTrigger>
          <TabsTrigger value="city">City-wise</TabsTrigger>
          <TabsTrigger value="partner">Partner-wise</TabsTrigger>
        </TabsList>
        
        <TabsContent value="monthly">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Month</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Revenue</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Expenses</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Net Profit</th>
                </tr>
              </thead>
              <tbody>
                {monthlyBreakdown.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{item.month}</td>
                    <td className="p-4 text-right text-green-600 font-semibold">{item.revenue}</td>
                    <td className="p-4 text-right text-red-600 font-semibold">{item.expenses}</td>
                    <td className="p-4 text-right text-foreground font-bold">{item.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="city">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">City</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Revenue</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Expenses</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Profit</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Margin</th>
                </tr>
              </thead>
              <tbody>
                {cityBreakdown.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{item.city}</td>
                    <td className="p-4 text-right text-green-600 font-semibold">{item.revenue}</td>
                    <td className="p-4 text-right text-red-600 font-semibold">{item.expenses}</td>
                    <td className="p-4 text-right text-foreground font-bold">{item.profit}</td>
                    <td className="p-4 text-right">
                      <Badge className={`${
                        parseInt(item.margin) >= 40 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.margin}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="partner">
          <div className="bg-background border border-border rounded-xl p-6 text-center">
            <p className="text-muted-foreground">Partner-wise breakdown coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default BalanceSheet;
