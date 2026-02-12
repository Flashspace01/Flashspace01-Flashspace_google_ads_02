import { useState } from "react";
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
  Eye,
  MapPin,
  CheckCircle,
  Clock,
  XCircle,
  Share2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingViewModal } from "@/components/modals/BookingViewModal";
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

const activeBookings = [
  {
    id: "BO-2024-001",
    company: "Tech Innovations Pvt Ltd",
    contact: "Rahul Sharma",
    email: "rahul@techinnovations.com",
    phone: "+91 98765 43210",
    plan: "Virtual Office Premium",
    location: "Mumbai - BKC",
    startDate: "Jan 15, 2024",
    endDate: "Jan 15, 2025",
    commission: "₹4,500",
    amount: "₹45,000",
    status: "active"
  },
  {
    id: "BO-2024-002",
    company: "StartupXYZ Solutions",
    contact: "Priya Patel",
    email: "priya@startupxyz.com",
    phone: "+91 87654 32109",
    plan: "Team Space",
    location: "Delhi - CP",
    startDate: "Dec 1, 2023",
    endDate: "Nov 30, 2024",
    commission: "₹12,000",
    amount: "₹1,20,000",
    status: "active"
  },
  {
    id: "BO-2024-003",
    company: "Global Consulting",
    contact: "Amit Kumar",
    email: "amit@globalconsulting.com",
    phone: "+91 76543 21098",
    plan: "Virtual Office Standard",
    location: "Bangalore - HSR",
    startDate: "Feb 1, 2024",
    endDate: "Jan 31, 2025",
    commission: "₹2,800",
    amount: "₹28,000",
    status: "pending_activation"
  },
];

const pendingBookings = [
  {
    id: "BO-2024-004",
    company: "Design Hub Studios",
    contact: "Neha Singh",
    email: "neha@designhub.com",
    phone: "+91 65432 10987",
    plan: "Hot Desk Monthly",
    location: "Chennai - Anna Nagar",
    startDate: "Feb 5, 2024",
    endDate: "Mar 5, 2024",
    commission: "₹800",
    amount: "₹8,000",
    status: "pending"
  },
  {
    id: "BO-2024-005",
    company: "Fintech Solutions Inc",
    contact: "Arjun Shah",
    email: "arjun@fintechsol.com",
    phone: "+91 54321 09876",
    plan: "Virtual Office Premium",
    location: "Mumbai - Andheri",
    startDate: "Feb 10, 2024",
    endDate: "Feb 10, 2025",
    commission: "₹5,200",
    amount: "₹52,000",
    status: "pending"
  },
];

const renewalBookings = [
  {
    id: "BO-2023-089",
    company: "DataFlow Analytics",
    contact: "Vikram Joshi",
    email: "vikram@dataflow.io",
    phone: "+91 43210 98765",
    plan: "Team Space",
    location: "Bangalore - Koramangala",
    startDate: "Feb 15, 2023",
    endDate: "Feb 15, 2024",
    commission: "₹8,500",
    amount: "₹85,000",
    status: "renewal_due"
  },
  {
    id: "BO-2023-092",
    company: "CloudTech Systems",
    contact: "Meera Reddy",
    email: "meera@cloudtech.com",
    phone: "+91 32109 87654",
    plan: "Virtual Office Standard",
    location: "Hyderabad - HITEC City",
    startDate: "Feb 20, 2023",
    endDate: "Feb 20, 2024",
    commission: "₹3,200",
    amount: "₹32,000",
    status: "renewal_due"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
    case "pending_activation":
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    case "renewal_due":
      return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100"><Clock className="w-3 h-3 mr-1" />Renewal Due</Badge>;
    case "expired":
      return <Badge variant="secondary"><XCircle className="w-3 h-3 mr-1" />Expired</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const BookingManagement = () => {
  const [selectedBooking, setSelectedBooking] = useState<typeof activeBookings[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleView = (booking: typeof activeBookings[0]) => {
    setSelectedBooking(booking);
    setModalOpen(true);
  };

  const handleShare = async (booking: typeof activeBookings[0]) => {
    const shareText = `Booking ${booking.id} - ${booking.company}\nPlan: ${booking.plan}\nLocation: ${booking.location}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Booking ${booking.id}`,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to Clipboard",
        description: "Booking details have been copied.",
      });
    }
  };

  const renderTable = (bookings: typeof activeBookings) => (
    <div className="bg-background border border-border rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Booking ID</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Company</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Plan</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Location</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Duration</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Commission</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t border-border hover:bg-muted/30 transition-colors">
              <td className="p-4 font-medium text-foreground">{booking.id}</td>
              <td className="p-4 text-foreground">{booking.company}</td>
              <td className="p-4"><Badge variant="outline">{booking.plan}</Badge></td>
              <td className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {booking.location}
                </div>
              </td>
              <td className="p-4 text-sm text-muted-foreground">
                {booking.startDate} - {booking.endDate}
              </td>
              <td className="p-4 font-semibold text-green-600">{booking.commission}</td>
              <td className="p-4">{getStatusBadge(booking.status)}</td>
              <td className="p-4">
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" onClick={() => handleView(booking)} className="bg-primary/10 hover:bg-primary/20">
                    <Eye className="w-4 h-4 text-primary" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare(booking)} className="bg-primary/10 hover:bg-primary/20">
                    <Share2 className="w-4 h-4 text-primary" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Booking <span className="text-primary italic">Management</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Track all your referred clients and their bookings
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">34</p>
          <p className="text-sm text-muted-foreground">Active Bookings</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-yellow-600">5</p>
          <p className="text-sm text-muted-foreground">Pending Activation</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-blue-600">8</p>
          <p className="text-sm text-muted-foreground">Renewals Due</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-green-600">₹2.8L</p>
          <p className="text-sm text-muted-foreground">Total Commissions</p>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Bookings</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="renewals">Upcoming Renewals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          {renderTable(activeBookings)}
        </TabsContent>

        <TabsContent value="pending">
          {renderTable(pendingBookings)}
        </TabsContent>

        <TabsContent value="renewals">
          {renderTable(renewalBookings)}
        </TabsContent>
      </Tabs>

      <BookingViewModal
        booking={selectedBooking}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </DashboardLayout>
  );
};

export default BookingManagement;
