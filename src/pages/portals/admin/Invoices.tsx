import { useState } from "react";
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
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvoiceViewModal } from "@/components/modals/InvoiceViewModal";
import { toast } from "@/hooks/use-toast";

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

const pendingInvoices = [
  { id: "INV-2024-101", client: "Tech Innovations", type: "Client", amount: "₹45,000", date: "Feb 15, 2024", dueDate: "Feb 28, 2024", status: "pending" },
  { id: "INV-2024-102", partner: "FlashSpace BKC", type: "Partner", amount: "₹1,25,000", date: "Feb 10, 2024", dueDate: "Feb 25, 2024", status: "pending" },
  { id: "INV-2024-103", client: "StartupXYZ", type: "Client", amount: "₹32,500", date: "Feb 8, 2024", dueDate: "Feb 22, 2024", status: "overdue" },
];

const approvedInvoices = [
  { id: "INV-2024-089", client: "Global Consulting", type: "Client", amount: "₹28,000", date: "Jan 28, 2024", dueDate: "Feb 15, 2024", status: "approved", approvedBy: "Admin" },
  { id: "INV-2024-085", partner: "FlashSpace Delhi", type: "Partner", amount: "₹98,000", date: "Jan 25, 2024", dueDate: "Feb 10, 2024", status: "approved", approvedBy: "Finance" },
  { id: "INV-2024-078", client: "Design Studio", type: "Client", amount: "₹15,000", date: "Jan 20, 2024", dueDate: "Feb 5, 2024", status: "paid", paidDate: "Jan 22, 2024" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    case "overdue":
      return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Overdue</Badge>;
    case "approved":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
    case "paid":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Paid</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const Invoices = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<{
    id: string;
    client: string;
    amount: string;
    date: string;
    dueDate: string;
    status: string;
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewInvoice = (invoice: typeof pendingInvoices[0]) => {
    setSelectedInvoice({
      id: invoice.id,
      client: invoice.client || invoice.partner || "",
      amount: invoice.amount,
      date: invoice.date,
      dueDate: invoice.dueDate,
      status: invoice.status,
    });
    setModalOpen(true);
  };

  const handleApproveInvoice = (invoice: typeof pendingInvoices[0]) => {
    toast({
      title: "Invoice Approved",
      description: `${invoice.id} has been approved successfully.`,
    });
  };

  const handleRejectInvoice = (invoice: typeof pendingInvoices[0]) => {
    toast({
      title: "Invoice Rejected",
      description: `${invoice.id} has been rejected.`,
      variant: "destructive",
    });
  };

  const handleDownloadInvoice = (invoice: typeof approvedInvoices[0]) => {
    toast({
      title: "Downloading Invoice",
      description: `${invoice.id} is being downloaded as PDF.`,
    });
  };

  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Invoice <span className="text-primary italic">Management</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Review and approve invoices from clients and partners
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-yellow-600">23</p>
          <p className="text-sm text-muted-foreground">Pending Approval</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-red-600">5</p>
          <p className="text-sm text-muted-foreground">Overdue</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-blue-600">45</p>
          <p className="text-sm text-muted-foreground">Approved (MTD)</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-green-600">₹18.5L</p>
          <p className="text-sm text-muted-foreground">Cleared (MTD)</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search invoices..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="all">All Invoices</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <div className="space-y-4">
            {pendingInvoices.map((invoice) => (
              <div key={invoice.id} className="bg-background border border-border rounded-xl p-5 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-medium text-foreground">{invoice.id}</span>
                    <Badge variant="outline">{invoice.type}</Badge>
                    {getStatusBadge(invoice.status)}
                  </div>
                  <p className="text-muted-foreground">{invoice.client || invoice.partner}</p>
                  <p className="text-sm text-muted-foreground">Due: {invoice.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-foreground">{invoice.amount}</p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" onClick={() => handleViewInvoice(invoice)}>
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleApproveInvoice(invoice)}>
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleRejectInvoice(invoice)}>
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="approved">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Invoice ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client/Partner</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{invoice.id}</td>
                    <td className="p-4 text-muted-foreground">{invoice.client || invoice.partner}</td>
                    <td className="p-4"><Badge variant="outline">{invoice.type}</Badge></td>
                    <td className="p-4 font-semibold text-foreground">{invoice.amount}</td>
                    <td className="p-4 text-muted-foreground">{invoice.date}</td>
                    <td className="p-4">{getStatusBadge(invoice.status)}</td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewInvoice({ ...invoice, dueDate: invoice.dueDate })}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDownloadInvoice(invoice)}>
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="all">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Invoice ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client/Partner</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...pendingInvoices, ...approvedInvoices].map((invoice) => (
                  <tr key={invoice.id} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{invoice.id}</td>
                    <td className="p-4 text-muted-foreground">{invoice.client || invoice.partner}</td>
                    <td className="p-4"><Badge variant="outline">{invoice.type}</Badge></td>
                    <td className="p-4 font-semibold text-foreground">{invoice.amount}</td>
                    <td className="p-4 text-muted-foreground">{invoice.date}</td>
                    <td className="p-4">{getStatusBadge(invoice.status)}</td>
                    <td className="p-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewInvoice({ ...invoice, dueDate: invoice.dueDate })}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      <InvoiceViewModal
        invoice={selectedInvoice}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </DashboardLayout>
  );
};

export default Invoices;
