import { useState } from "react";
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
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

// Import space images
import spaceBkcMumbai from "@/assets/space-bkc-mumbai.jpg";
import spaceConnaughtDelhi from "@/assets/space-connaught-delhi.jpg";
import spaceHsrBangalore from "@/assets/space-hsr-bangalore.jpg";
import spaceAnnaNagarChennai from "@/assets/space-anna-nagar-chennai.jpg";

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

// Define spaces with their bookings
const spacesData = [
  {
    id: "SP-001",
    name: "FlashSpace BKC",
    location: "Mumbai - Bandra Kurla Complex",
    image: spaceBkcMumbai,
    bookings: [
      { day: 0, start: 1, duration: 2, title: "Meeting Room A", client: "Tech Corp", type: "meeting" },
      { day: 1, start: 0, duration: 8, title: "Virtual Office", client: "StartupXYZ", type: "virtual" },
      { day: 2, start: 3, duration: 3, title: "Day Pass", client: "John Doe", type: "daypass" },
      { day: 5, start: 0, duration: 4, title: "Team Space", client: "Design Co", type: "team" },
    ],
    requests: [
      { id: "REQ-001", client: "New Startup Inc", type: "Virtual Office", date: "Feb 10, 2024", status: "pending" },
      { id: "REQ-002", client: "Consulting LLC", type: "Meeting Room", date: "Feb 8, 2024", status: "pending" },
    ]
  },
  {
    id: "SP-002",
    name: "FlashSpace Connaught Place",
    location: "Delhi - Connaught Place",
    image: spaceConnaughtDelhi,
    bookings: [
      { day: 0, start: 2, duration: 3, title: "Private Office", client: "Finance Ltd", type: "team" },
      { day: 2, start: 1, duration: 2, title: "Meeting Room B", client: "Legal Associates", type: "meeting" },
      { day: 3, start: 4, duration: 2, title: "Hot Desk", client: "Freelancer", type: "daypass" },
      { day: 4, start: 0, duration: 6, title: "Virtual Office", client: "RemoteCo", type: "virtual" },
    ],
    requests: [
      { id: "REQ-003", client: "Delhi Ventures", type: "Private Office", date: "Feb 12, 2024", status: "pending" },
    ]
  },
  {
    id: "SP-003",
    name: "FlashSpace HSR Layout",
    location: "Bangalore - HSR Layout",
    image: spaceHsrBangalore,
    bookings: [
      { day: 1, start: 0, duration: 4, title: "Team Space", client: "TechStart", type: "team" },
      { day: 2, start: 2, duration: 2, title: "Meeting Room", client: "Investor Meet", type: "meeting" },
      { day: 3, start: 1, duration: 3, title: "Day Pass", client: "Jane Smith", type: "daypass" },
      { day: 5, start: 3, duration: 5, title: "Virtual Office", client: "CloudOps", type: "virtual" },
    ],
    requests: [
      { id: "REQ-004", client: "Startup Hub", type: "Team Space", date: "Feb 9, 2024", status: "pending" },
      { id: "REQ-005", client: "Solo Dev", type: "Hot Desk", date: "Feb 7, 2024", status: "pending" },
    ]
  },
  {
    id: "SP-004",
    name: "FlashSpace Anna Nagar",
    location: "Chennai - Anna Nagar",
    image: spaceAnnaNagarChennai,
    bookings: [
      { day: 0, start: 0, duration: 3, title: "Meeting Room", client: "Client ABC", type: "meeting" },
      { day: 1, start: 2, duration: 4, title: "Day Pass", client: "Consultant", type: "daypass" },
    ],
    requests: [
      { id: "REQ-006", client: "Chennai Tech", type: "Virtual Office", date: "Feb 11, 2024", status: "pending" },
    ]
  },
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const days = ["Mon 3", "Tue 4", "Wed 5", "Thu 6", "Fri 7", "Sat 8", "Sun 9"];

const getBookingColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "bg-blue-100 border-blue-300 text-blue-700";
    case "virtual":
      return "bg-green-100 border-green-300 text-green-700";
    case "daypass":
      return "bg-purple-100 border-purple-300 text-purple-700";
    case "team":
      return "bg-orange-100 border-orange-300 text-orange-700";
    default:
      return "bg-gray-100 border-gray-300 text-gray-700";
  }
};

const BookingCalendar = () => {
  const [selectedSpaceId, setSelectedSpaceId] = useState(spacesData[0].id);
  const [monthOffset, setMonthOffset] = useState(0);
  
  const selectedSpace = spacesData.find(s => s.id === selectedSpaceId) || spacesData[0];

  const handleAcceptRequest = (request: typeof spacesData[0]["requests"][0]) => {
    toast({
      title: "Request Accepted",
      description: `Booking request from ${request.client} has been accepted.`,
    });
  };

  const handleDeclineRequest = (request: typeof spacesData[0]["requests"][0]) => {
    toast({
      title: "Request Declined",
      description: `Booking request from ${request.client} has been declined.`,
      variant: "destructive",
    });
  };

  const handlePreviousWeek = () => {
    setMonthOffset(prev => prev - 1);
    toast({
      title: "Previous Week",
      description: "Showing previous week's bookings",
    });
  };

  const handleNextWeek = () => {
    setMonthOffset(prev => prev + 1);
    toast({
      title: "Next Week",
      description: "Showing next week's bookings",
    });
  };

  const getMonthLabel = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const baseMonth = 1; // February (0-indexed)
    const currentMonth = (baseMonth + monthOffset + 12) % 12;
    const year = 2024 + Math.floor((baseMonth + monthOffset) / 12);
    return `${months[currentMonth]} ${year}`;
  };

  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Booking <span className="text-primary italic">Calendar</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            View and manage all bookings across your spaces
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePreviousWeek}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="font-medium text-foreground px-4">{getMonthLabel()}</span>
          <Button variant="outline" size="icon" onClick={handleNextWeek}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Space Selector */}
      <div className="mb-6 bg-background border border-border rounded-xl p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <img src={selectedSpace.image} alt={selectedSpace.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-muted-foreground mb-1 block">Select Space</label>
              <Select value={selectedSpaceId} onValueChange={setSelectedSpaceId}>
                <SelectTrigger className="w-full sm:w-[300px]">
                  <SelectValue placeholder="Choose a space" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border">
                  {spacesData.map((space) => (
                    <SelectItem key={space.id} value={space.id}>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>{space.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground sm:ml-auto">
            <MapPin className="w-4 h-4" />
            {selectedSpace.location}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Calendar Grid */}
        <div className="lg:col-span-3 bg-background border border-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-8 border-b border-border">
            <div className="p-3 bg-muted/50">
              <Clock className="w-4 h-4 text-muted-foreground" />
            </div>
            {days.map((day) => (
              <div key={day} className="p-3 bg-muted/50 text-center">
                <span className="text-sm font-medium text-foreground">{day}</span>
              </div>
            ))}
          </div>
          
          {/* Time Grid */}
          <div className="relative">
            {timeSlots.map((time, timeIndex) => (
              <div key={time} className="grid grid-cols-8 border-b border-border last:border-b-0">
                <div className="p-2 text-xs text-muted-foreground bg-muted/30 flex items-center justify-center">
                  {time}
                </div>
                {days.map((_, dayIndex) => (
                  <div key={dayIndex} className="p-1 min-h-[40px] relative">
                    {/* Render bookings for selected space */}
                    {selectedSpace.bookings
                      .filter(b => b.day === dayIndex && b.start === timeIndex)
                      .map((booking, i) => (
                        <div
                          key={i}
                          className={`absolute left-1 right-1 z-10 rounded px-2 py-1 text-xs border cursor-pointer hover:opacity-80 transition-opacity ${getBookingColor(booking.type)}`}
                          style={{ height: `${booking.duration * 40 - 4}px` }}
                          onClick={() => toast({
                            title: booking.title,
                            description: `Client: ${booking.client} | Type: ${booking.type}`,
                          })}
                        >
                          <div className="font-medium truncate">{booking.title}</div>
                          <div className="truncate opacity-75">{booking.client}</div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Pending Requests */}
        <div className="space-y-4">
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Pending Requests</h3>
            {selectedSpace.requests.length > 0 ? (
              <div className="space-y-3">
                {selectedSpace.requests.map((request) => (
                  <div key={request.id} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">{request.id}</span>
                      <Badge variant="outline" className="text-xs">Pending</Badge>
                    </div>
                    <h4 className="font-medium text-foreground text-sm">{request.client}</h4>
                    <p className="text-xs text-muted-foreground">{request.type} • {request.date}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" className="text-xs h-7" onClick={() => handleAcceptRequest(request)}>
                        Accept
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => handleDeclineRequest(request)}>
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No pending requests for this space</p>
            )}
          </div>
          
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-3">Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-400" />
                <span className="text-sm text-muted-foreground">Meeting Room</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-400" />
                <span className="text-sm text-muted-foreground">Virtual Office</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-purple-400" />
                <span className="text-sm text-muted-foreground">Day Pass</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-orange-400" />
                <span className="text-sm text-muted-foreground">Team Space</span>
              </div>
            </div>
          </div>

          {/* Quick Stats for Selected Space */}
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-3">This Week</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="text-xl font-bold text-foreground">{selectedSpace.bookings.length}</div>
                <div className="text-xs text-muted-foreground">Bookings</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="text-xl font-bold text-foreground">{selectedSpace.requests.length}</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookingCalendar;
