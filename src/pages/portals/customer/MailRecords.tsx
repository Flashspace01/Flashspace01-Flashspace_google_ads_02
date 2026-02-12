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
  Inbox,
  Send,
  Archive,
  Clock,
  CheckCircle
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

const receivedMail = [
  {
    id: "ML-001",
    sender: "HDFC Bank",
    type: "Letter",
    receivedDate: "Feb 1, 2024",
    status: "pending_pickup",
    office: "Mumbai - BKC"
  },
  {
    id: "ML-002",
    sender: "Amazon",
    type: "Parcel",
    receivedDate: "Jan 30, 2024",
    status: "collected",
    office: "Mumbai - BKC"
  },
  {
    id: "ML-003",
    sender: "GST Department",
    type: "Government Letter",
    receivedDate: "Jan 28, 2024",
    status: "forwarded",
    office: "Delhi - CP"
  },
];

const forwardedMail = [
  {
    id: "FW-001",
    sender: "Income Tax Dept",
    type: "Government Letter",
    forwardedDate: "Jan 25, 2024",
    deliveryStatus: "delivered",
    deliveryAddress: "Home Address, Mumbai"
  },
  {
    id: "FW-002",
    sender: "SBI Credit Card",
    type: "Letter",
    forwardedDate: "Jan 20, 2024",
    deliveryStatus: "in_transit",
    deliveryAddress: "Office Address, Pune"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending_pickup":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending Pickup</Badge>;
    case "collected":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Collected</Badge>;
    case "forwarded":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100"><Send className="w-3 h-3 mr-1" />Forwarded</Badge>;
    case "delivered":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Delivered</Badge>;
    case "in_transit":
      return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100"><Clock className="w-3 h-3 mr-1" />In Transit</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const MailRecords = () => {
  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Mail <span className="text-primary italic">Records</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Track all mail and parcels received at your virtual office
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Inbox className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">3</p>
              <p className="text-sm text-muted-foreground">Pending Pickup</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Send className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">5</p>
              <p className="text-sm text-muted-foreground">Forwarded</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Archive className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">24</p>
              <p className="text-sm text-muted-foreground">Total Received</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="received" className="space-y-6">
        <TabsList>
          <TabsTrigger value="received">Received Mail</TabsTrigger>
          <TabsTrigger value="forwarded">Forwarded Mail</TabsTrigger>
        </TabsList>
        
        <TabsContent value="received">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Sender</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Office</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Received</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {receivedMail.map((mail) => (
                  <tr key={mail.id} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-foreground">{mail.id}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.sender}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.type}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.office}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.receivedDate}</td>
                    <td className="p-4">{getStatusBadge(mail.status)}</td>
                    <td className="p-4">
                      <Button variant="outline" size="sm">Request Forward</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="forwarded">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Sender</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Forwarded Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Delivery Address</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {forwardedMail.map((mail) => (
                  <tr key={mail.id} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-foreground">{mail.id}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.sender}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.type}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.forwardedDate}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.deliveryAddress}</td>
                    <td className="p-4">{getStatusBadge(mail.deliveryStatus)}</td>
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

export default MailRecords;
