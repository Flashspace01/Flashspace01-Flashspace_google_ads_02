import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Mail, 
  Calendar,
  CreditCard,
  Bell,
  HelpCircle,
  Package,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  IndianRupee
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const navItems = [
  { label: "Dashboard", href: "/customer-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "My Bookings", href: "/customer-portal/bookings", icon: <Package className="w-5 h-5" /> },
  { label: "Mail Records", href: "/customer-portal/mail", icon: <Mail className="w-5 h-5" /> },
  { label: "Visit Records", href: "/customer-portal/visits", icon: <Calendar className="w-5 h-5" /> },
  { label: "Payments", href: "/customer-portal/payments", icon: <CreditCard className="w-5 h-5" /> },
  { label: "Documents", href: "/customer-portal/documents", icon: <FileText className="w-5 h-5" /> },
  { label: "Chat Support", href: "/customer-portal/chat", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Notifications", href: "/customer-portal/notifications", icon: <Bell className="w-5 h-5" /> },
  { label: "Help Center", href: "/customer-portal/help", icon: <HelpCircle className="w-5 h-5" /> },
];

const pendingPayments = [
  {
    id: "INV-2024-015",
    description: "Virtual Office Renewal - Mumbai BKC",
    amount: "₹15,000",
    dueDate: "Feb 15, 2024",
    status: "pending"
  },
  {
    id: "INV-2024-018",
    description: "Meeting Room Booking - Delhi CP",
    amount: "₹2,500",
    dueDate: "Feb 10, 2024",
    status: "overdue"
  },
];

const paymentHistory = [
  {
    id: "PAY-2024-001",
    invoiceId: "INV-2024-001",
    description: "Virtual Office - Chennai",
    amount: "₹12,000",
    paidDate: "Jan 15, 2024",
    method: "UPI",
    status: "completed"
  },
  {
    id: "PAY-2024-002",
    invoiceId: "INV-2024-005",
    description: "Day Pass - Bangalore",
    amount: "₹800",
    paidDate: "Jan 10, 2024",
    method: "Credit Card",
    status: "completed"
  },
  {
    id: "PAY-2023-089",
    invoiceId: "INV-2023-089",
    description: "Meeting Room - Mumbai",
    amount: "₹2,000",
    paidDate: "Dec 20, 2023",
    method: "Net Banking",
    status: "completed"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    case "overdue":
      return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Overdue</Badge>;
    case "completed":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Paid</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const Payments = () => {
  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Payments & <span className="text-primary italic">Invoices</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your payments and view invoice history
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">₹17,500</p>
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
              <p className="text-2xl font-extrabold text-foreground">₹2,500</p>
              <p className="text-sm text-muted-foreground">Overdue</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <IndianRupee className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">₹1,42,800</p>
              <p className="text-sm text-muted-foreground">Total Paid</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Payments</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <div className="space-y-4">
            {pendingPayments.map((payment) => (
              <div key={payment.id} className="bg-background border border-border rounded-xl p-5 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">{payment.id}</span>
                    {getStatusBadge(payment.status)}
                  </div>
                  <h3 className="font-bold text-foreground">{payment.description}</h3>
                  <p className="text-sm text-muted-foreground">Due: {payment.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-foreground">{payment.amount}</p>
                  <Button className="mt-2">Pay Now</Button>
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
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Description</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Method</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-foreground">{payment.id}</td>
                    <td className="p-4 text-sm text-primary cursor-pointer hover:underline">{payment.invoiceId}</td>
                    <td className="p-4 text-sm text-muted-foreground">{payment.description}</td>
                    <td className="p-4 text-sm font-semibold text-foreground">{payment.amount}</td>
                    <td className="p-4 text-sm text-muted-foreground">{payment.paidDate}</td>
                    <td className="p-4 text-sm text-muted-foreground">{payment.method}</td>
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

export default Payments;
