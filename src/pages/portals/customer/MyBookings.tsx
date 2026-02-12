import { useState } from "react";
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
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Eye
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerBookingModal } from "@/components/modals/CustomerBookingModal";

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

const activeBookings = [
  {
    id: "BO-2024-001",
    type: "Virtual Office",
    location: "Mumbai - BKC",
    startDate: "Jan 15, 2024",
    endDate: "Jan 15, 2025",
    status: "active",
    price: "₹15,000/year"
  },
  {
    id: "BO-2024-002",
    type: "Meeting Room",
    location: "Delhi - Connaught Place",
    startDate: "Feb 1, 2024",
    endDate: "Feb 1, 2024",
    status: "upcoming",
    price: "₹2,500/session"
  },
  {
    id: "BO-2024-003",
    type: "Day Pass",
    location: "Bangalore - HSR Layout",
    startDate: "Feb 5, 2024",
    endDate: "Feb 5, 2024",
    status: "upcoming",
    price: "₹800/day"
  },
];

const pastBookings = [
  {
    id: "BO-2023-089",
    type: "Virtual Office",
    location: "Chennai - Anna Nagar",
    startDate: "Jan 1, 2023",
    endDate: "Dec 31, 2023",
    status: "completed",
    price: "₹12,000/year"
  },
  {
    id: "BO-2023-045",
    type: "Meeting Room",
    location: "Mumbai - Andheri",
    startDate: "Aug 15, 2023",
    endDate: "Aug 15, 2023",
    status: "completed",
    price: "₹2,000/session"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
    case "upcoming":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100"><Clock className="w-3 h-3 mr-1" />Upcoming</Badge>;
    case "completed":
      return <Badge variant="secondary"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
    case "cancelled":
      return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Cancelled</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const MyBookings = () => {
  const [selectedBooking, setSelectedBooking] = useState<typeof activeBookings[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewBooking = (booking: typeof activeBookings[0]) => {
    setSelectedBooking(booking);
    setModalOpen(true);
  };

  const BookingCard = ({ booking }: { booking: typeof activeBookings[0] }) => (
    <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs text-muted-foreground font-medium">{booking.id}</span>
          <h3 className="font-bold text-foreground">{booking.type}</h3>
        </div>
        {getStatusBadge(booking.status)}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{booking.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{booking.startDate} - {booking.endDate}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-bold text-foreground">{booking.price}</span>
        <Button variant="outline" size="sm" onClick={() => handleViewBooking(booking)}>
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </div>
    </div>
  );

  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          My <span className="text-primary italic">Bookings</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          View and manage all your workspace bookings
        </p>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active & Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Bookings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pastBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <CustomerBookingModal
        booking={selectedBooking}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </DashboardLayout>
  );
};

export default MyBookings;
