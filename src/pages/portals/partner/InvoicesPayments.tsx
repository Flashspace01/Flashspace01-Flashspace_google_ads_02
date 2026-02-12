import { DashboardLayout } from "@/components/layout/DashboardLayout";
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
  Download,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const pendingInvoices = [
  {
    id: "INV-2024-021",
    client: "Tech Innovations Pvt Ltd",
    amount: "₹45,000",
    dueDate: "Feb 15, 2024",
    status: "pending"
  },
  {
    id: "INV-2024-018",
    client: "StartupXYZ Solutions",
    amount: "₹32,500",
    dueDate: "Feb 10, 2024",
    status: "overdue"
  },
];

const paymentHistory = [
  {
    id: "PAY-2024-015",
    invoiceId: "INV-2024-015",
    client: "Global Consulting LLC",
    amount: "₹28,000",
    paidDate: "Jan 28, 2024",
    method: "Bank Transfer",
    commission: "₹2,800"
  },
  {
    id: "PAY-2024-012",
    invoiceId: "INV-2024-012",
    client: "Design Studio Co",
    amount: "₹15,000",
    paidDate: "Jan 20, 2024",
    method: "UPI",
    commission: "₹1,500"
  },
  {
    id: "PAY-2024-008",
    invoiceId: "INV-2024-008",
    client: "Tech Innovations Pvt Ltd",
    amount: "₹45,000",
    paidDate: "Jan 15, 2024",
    method: "Bank Transfer",
    commission: "₹4,500"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    case "overdue":
      return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Overdue</Badge>;
    case "paid":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Paid</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const InvoicesPayments = () => {
  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Invoices & <span className="text-primary italic">Payments</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Track invoices and monitor your revenue
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">₹4.2L</p>
              <p className="text-sm text-muted-foreground">This Month</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">₹77,500</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">₹32,500</p>
              <p className="text-sm text-muted-foreground">Overdue</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">₹8,800</p>
              <p className="text-sm text-muted-foreground">Commission Earned</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Invoices</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <div className="space-y-4">
            {pendingInvoices.map((invoice) => (
              <div key={invoice.id} className="bg-background border border-border rounded-xl p-5 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">{invoice.id}</span>
                    {getStatusBadge(invoice.status)}
                  </div>
                  <h3 className="font-bold text-foreground">{invoice.client}</h3>
                  <p className="text-sm text-muted-foreground">Due: {invoice.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-foreground">{invoice.amount}</p>
                  <Button variant="outline" className="mt-2">Send Reminder</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Payment ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Invoice</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Method</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Commission</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-foreground">{payment.id}</td>
                    <td className="p-4 text-sm text-primary cursor-pointer hover:underline">{payment.invoiceId}</td>
                    <td className="p-4 text-sm text-muted-foreground">{payment.client}</td>
                    <td className="p-4 text-sm font-semibold text-foreground">{payment.amount}</td>
                    <td className="p-4 text-sm text-muted-foreground">{payment.paidDate}</td>
                    <td className="p-4 text-sm text-muted-foreground">{payment.method}</td>
                    <td className="p-4 text-sm font-semibold text-green-600">{payment.commission}</td>
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

export default InvoicesPayments;
