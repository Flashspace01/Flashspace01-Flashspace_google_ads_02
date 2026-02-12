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
  User,
  Clock,
  CheckCircle,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const visits = [
  {
    id: "VT-001",
    visitorName: "Rahul Sharma",
    purpose: "Document Collection",
    visitDate: "Feb 2, 2024",
    visitTime: "10:30 AM",
    status: "completed",
    office: "Mumbai - BKC",
    duration: "15 mins"
  },
  {
    id: "VT-002",
    visitorName: "GST Officer",
    purpose: "Official Verification",
    visitDate: "Jan 28, 2024",
    visitTime: "2:00 PM",
    status: "completed",
    office: "Mumbai - BKC",
    duration: "45 mins"
  },
  {
    id: "VT-003",
    visitorName: "Courier - Delhivery",
    purpose: "Parcel Delivery",
    visitDate: "Jan 25, 2024",
    visitTime: "11:15 AM",
    status: "completed",
    office: "Delhi - CP",
    duration: "5 mins"
  },
  {
    id: "VT-004",
    visitorName: "Bank Representative",
    purpose: "Account Verification",
    visitDate: "Jan 20, 2024",
    visitTime: "3:30 PM",
    status: "completed",
    office: "Mumbai - BKC",
    duration: "30 mins"
  },
];

const VisitRecords = () => {
  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Visit <span className="text-primary italic">Records</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Track all visits made to your registered virtual office
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Total Visits</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">Official Visits</p>
            </div>
          </div>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">4</p>
              <p className="text-sm text-muted-foreground">Deliveries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visits Table */}
      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-foreground">ID</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Visitor</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Purpose</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Office</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Date & Time</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Duration</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <tr key={visit.id} className="border-t border-border">
                <td className="p-4 text-sm font-medium text-foreground">{visit.id}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-foreground">{visit.visitorName}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">{visit.purpose}</td>
                <td className="p-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {visit.office}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm">
                    <div className="text-foreground">{visit.visitDate}</div>
                    <div className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {visit.visitTime}
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">{visit.duration}</td>
                <td className="p-4">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default VisitRecords;
