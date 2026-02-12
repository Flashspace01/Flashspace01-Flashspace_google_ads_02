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
  Upload,
  User,
  Package,
  Clock,
  CheckCircle,
  MapPin
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

const mailItems = [
  {
    id: "ML-001",
    client: "Tech Innovations Pvt Ltd",
    sender: "HDFC Bank",
    type: "Letter",
    receivedDate: "Feb 2, 2024",
    status: "pending_action",
    space: "Mumbai - BKC"
  },
  {
    id: "ML-002",
    client: "StartupXYZ Solutions",
    sender: "Amazon",
    type: "Parcel",
    receivedDate: "Feb 1, 2024",
    status: "forwarded",
    space: "Delhi - CP"
  },
  {
    id: "ML-003",
    client: "Global Consulting LLC",
    sender: "GST Department",
    type: "Government Letter",
    receivedDate: "Jan 30, 2024",
    status: "collected",
    space: "Bangalore - HSR"
  },
];

const visits = [
  {
    id: "VT-001",
    client: "Tech Innovations Pvt Ltd",
    visitor: "Rahul Sharma",
    purpose: "Document Collection",
    visitDate: "Feb 2, 2024",
    visitTime: "10:30 AM",
    space: "Mumbai - BKC",
    status: "completed"
  },
  {
    id: "VT-002",
    client: "Global Consulting LLC",
    visitor: "GST Officer",
    purpose: "Official Verification",
    visitDate: "Jan 28, 2024",
    visitTime: "2:00 PM",
    space: "Bangalore - HSR",
    status: "completed"
  },
  {
    id: "VT-003",
    client: "Design Studio Co",
    visitor: "Courier - Delhivery",
    purpose: "Parcel Delivery",
    visitDate: "Jan 25, 2024",
    visitTime: "11:15 AM",
    space: "Chennai - Anna Nagar",
    status: "completed"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending_action":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending Action</Badge>;
    case "forwarded":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Forwarded</Badge>;
    case "collected":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Collected</Badge>;
    case "completed":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const MailVisits = () => {
  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Mail & <span className="text-primary italic">Visits</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Track mail and visits for all your clients
          </p>
        </div>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          Log New Mail
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">Pending Mail</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">24</p>
              <p className="text-sm text-muted-foreground">Forwarded This Month</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">45</p>
              <p className="text-sm text-muted-foreground">Visits This Month</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">156</p>
              <p className="text-sm text-muted-foreground">Total Handled</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="mail" className="space-y-6">
        <TabsList>
          <TabsTrigger value="mail">Mail Records</TabsTrigger>
          <TabsTrigger value="visits">Visit Records</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mail">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Sender</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Space</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Received</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mailItems.map((mail) => (
                  <tr key={mail.id} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-foreground">{mail.id}</td>
                    <td className="p-4 text-sm text-foreground">{mail.client}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.sender}</td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.type}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {mail.space}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{mail.receivedDate}</td>
                    <td className="p-4">{getStatusBadge(mail.status)}</td>
                    <td className="p-4">
                      <Button variant="outline" size="sm">Update</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="visits">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Visitor</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Purpose</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Space</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Date & Time</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {visits.map((visit) => (
                  <tr key={visit.id} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-foreground">{visit.id}</td>
                    <td className="p-4 text-sm text-foreground">{visit.client}</td>
                    <td className="p-4 text-sm text-muted-foreground">{visit.visitor}</td>
                    <td className="p-4 text-sm text-muted-foreground">{visit.purpose}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {visit.space}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div className="text-foreground">{visit.visitDate}</div>
                        <div className="text-muted-foreground">{visit.visitTime}</div>
                      </div>
                    </td>
                    <td className="p-4">{getStatusBadge(visit.status)}</td>
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

export default MailVisits;
