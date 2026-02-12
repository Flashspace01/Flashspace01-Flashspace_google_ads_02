import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Search,
  Download,
  Eye,
  Filter,
  Share2
} from "lucide-react";
import { InvoiceViewModal } from "@/components/modals/InvoiceViewModal";
import { toast } from "@/hooks/use-toast";

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

const invoices = [
  {
    id: "INV-2024-001",
    client: "TechStart Solutions",
    amount: "₹15,000",
    commission: "₹1,500",
    date: "Jan 15, 2024",
    dueDate: "Feb 15, 2024",
    status: "paid"
  },
  {
    id: "INV-2024-002",
    client: "Creative Hub Co",
    amount: "₹28,000",
    commission: "₹2,800",
    date: "Jan 18, 2024",
    dueDate: "Feb 18, 2024",
    status: "paid"
  },
  {
    id: "INV-2024-003",
    client: "DataFlow Analytics",
    amount: "₹45,000",
    commission: "₹4,500",
    date: "Jan 22, 2024",
    dueDate: "Feb 22, 2024",
    status: "pending"
  },
  {
    id: "INV-2024-004",
    client: "GreenTech Innovations",
    amount: "₹32,000",
    commission: "₹3,200",
    date: "Jan 25, 2024",
    dueDate: "Feb 25, 2024",
    status: "pending"
  },
  {
    id: "INV-2024-005",
    client: "StartupNest",
    amount: "₹18,500",
    commission: "₹1,850",
    date: "Jan 28, 2024",
    dueDate: "Feb 28, 2024",
    status: "overdue"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "overdue":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Invoices = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<typeof invoices[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleView = (invoice: typeof invoices[0]) => {
    setSelectedInvoice(invoice);
    setModalOpen(true);
  };

  const handleDownload = (invoice: typeof invoices[0]) => {
    toast({
      title: "Downloading Invoice",
      description: `Invoice ${invoice.id} is being downloaded as PDF.`,
    });
  };

  const handleExportAll = () => {
    toast({
      title: "Exporting All Invoices",
      description: "All invoices are being exported to a ZIP file.",
    });
  };

  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          <span className="text-primary italic">Invoices</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          View and manage all your commission invoices
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Invoices"
          value="47"
          change={12}
          icon={Receipt}
        />
        <StatsCard
          title="Paid Invoices"
          value="38"
          change={8}
          icon={Receipt}
        />
        <StatsCard
          title="Pending Amount"
          value="₹12.5K"
          icon={Wallet}
        />
        <StatsCard
          title="Total Earnings"
          value="₹2.8L"
          change={18}
          icon={TrendingUp}
        />
      </div>

      {/* Filters */}
      <div className="bg-background border border-border rounded-xl p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search invoices..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2" onClick={handleExportAll}>
            <Download className="w-4 h-4" />
            Export All
          </Button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Invoice ID</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Client</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Commission</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Due Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-medium text-foreground">{invoice.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-foreground">{invoice.client}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-foreground">{invoice.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-primary">{invoice.commission}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{invoice.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{invoice.dueDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getStatusColor(invoice.status)}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleView(invoice)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(invoice)}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InvoiceViewModal
        invoice={selectedInvoice}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </DashboardLayout>
  );
};

export default Invoices;
