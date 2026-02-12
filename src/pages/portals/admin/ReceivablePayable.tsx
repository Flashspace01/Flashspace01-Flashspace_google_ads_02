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

const receivables = [
  { client: "Tech Innovations Pvt Ltd", amount: "₹45,000", dueDate: "Feb 15, 2024", age: "0 days", status: "current" },
  { client: "StartupXYZ Solutions", amount: "₹32,500", dueDate: "Feb 5, 2024", age: "5 days", status: "overdue" },
  { client: "Global Consulting LLC", amount: "₹28,000", dueDate: "Jan 28, 2024", age: "12 days", status: "overdue" },
  { client: "Design Studio Co", amount: "₹15,000", dueDate: "Feb 20, 2024", age: "-10 days", status: "upcoming" },
];

const payables = [
  { partner: "FlashSpace BKC", amount: "₹1,25,000", dueDate: "Feb 10, 2024", status: "pending" },
  { partner: "FlashSpace Delhi CP", amount: "₹98,000", dueDate: "Feb 15, 2024", status: "pending" },
  { partner: "FlashSpace Bangalore HSR", amount: "₹78,000", dueDate: "Feb 5, 2024", status: "overdue" },
  { partner: "FlashSpace Chennai", amount: "₹45,000", dueDate: "Feb 20, 2024", status: "scheduled" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "current":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Current</Badge>;
    case "upcoming":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Upcoming</Badge>;
    case "overdue":
      return <Badge variant="destructive">Overdue</Badge>;
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>;
    case "scheduled":
      return <Badge variant="outline">Scheduled</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const ReceivablePayable = () => {
  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Receivable / <span className="text-primary italic">Payable</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Track outstanding payments and partner payouts
          </p>
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter by City
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Total Receivable" value="₹1.2L" change={-5} icon={ArrowDownRight} />
        <StatsCard title="Overdue Amount" value="₹60.5K" icon={TrendingUp} />
        <StatsCard title="Total Payable" value="₹3.46L" change={12} icon={ArrowUpRight} />
        <StatsCard title="Due This Week" value="₹2.23L" icon={Calculator} />
      </div>

      <Tabs defaultValue="receivable" className="space-y-6">
        <TabsList>
          <TabsTrigger value="receivable">Accounts Receivable</TabsTrigger>
          <TabsTrigger value="payable">Accounts Payable</TabsTrigger>
        </TabsList>
        
        <TabsContent value="receivable">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Due Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Age</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {receivables.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{item.client}</td>
                    <td className="p-4 text-right font-semibold text-foreground">{item.amount}</td>
                    <td className="p-4 text-muted-foreground">{item.dueDate}</td>
                    <td className="p-4 text-muted-foreground">{item.age}</td>
                    <td className="p-4">{getStatusBadge(item.status)}</td>
                    <td className="p-4">
                      <Button variant="outline" size="sm">Send Reminder</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="payable">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Partner</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Due Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payables.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{item.partner}</td>
                    <td className="p-4 text-right font-semibold text-foreground">{item.amount}</td>
                    <td className="p-4 text-muted-foreground">{item.dueDate}</td>
                    <td className="p-4">{getStatusBadge(item.status)}</td>
                    <td className="p-4">
                      <Button size="sm">Process Payment</Button>
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

export default ReceivablePayable;
