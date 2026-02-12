import { DashboardLayout } from "@/components/layout/DashboardLayout";
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
  CheckCircle,
  Clock,
  Download
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const pendingPayouts = [
  { id: "PAY-001", period: "Jan 2024", amount: "₹28,000", bookings: 8, status: "processing", expectedDate: "Feb 10, 2024" },
  { id: "PAY-002", period: "Feb 2024 (MTD)", amount: "₹17,000", bookings: 5, status: "pending", expectedDate: "Mar 10, 2024" },
];

const completedPayouts = [
  { id: "PAY-089", period: "Dec 2023", amount: "₹32,800", bookings: 9, paidDate: "Jan 10, 2024", method: "Bank Transfer" },
  { id: "PAY-085", period: "Nov 2023", amount: "₹24,200", bookings: 7, paidDate: "Dec 10, 2023", method: "Bank Transfer" },
  { id: "PAY-078", period: "Oct 2023", amount: "₹18,500", bookings: 5, paidDate: "Nov 10, 2023", method: "Bank Transfer" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "processing":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100"><Clock className="w-3 h-3 mr-1" />Processing</Badge>;
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    case "completed":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const Payouts = () => {
  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Payout <span className="text-primary italic">Management</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Track your commission payouts
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">₹2.8L</p>
          <p className="text-sm text-muted-foreground">Total Earned</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-green-600">₹2.35L</p>
          <p className="text-sm text-muted-foreground">Total Paid</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-yellow-600">₹45K</p>
          <p className="text-sm text-muted-foreground">Pending Payout</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">10th</p>
          <p className="text-sm text-muted-foreground">Next Payout Date</p>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Payouts</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <div className="space-y-4">
            {pendingPayouts.map((payout) => (
              <div key={payout.id} className="bg-background border border-border rounded-xl p-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-medium text-muted-foreground">{payout.id}</span>
                    {getStatusBadge(payout.status)}
                  </div>
                  <h3 className="font-bold text-foreground">{payout.period}</h3>
                  <p className="text-sm text-muted-foreground">{payout.bookings} bookings • Expected: {payout.expectedDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-foreground">{payout.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Payout ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Period</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Bookings</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Paid Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Method</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {completedPayouts.map((payout) => (
                  <tr key={payout.id} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{payout.id}</td>
                    <td className="p-4 text-muted-foreground">{payout.period}</td>
                    <td className="p-4 text-muted-foreground">{payout.bookings}</td>
                    <td className="p-4 font-semibold text-green-600">{payout.amount}</td>
                    <td className="p-4 text-muted-foreground">{payout.paidDate}</td>
                    <td className="p-4 text-muted-foreground">{payout.method}</td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Payouts;
