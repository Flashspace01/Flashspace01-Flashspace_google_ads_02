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
  Clock,
  CheckCircle,
  Phone,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnquiryChatModal } from "@/components/modals/EnquiryChatModal";
import { toast } from "@/hooks/use-toast";

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

const newEnquiries = [
  {
    id: "ENQ-001",
    name: "Vikram Mehta",
    company: "NextGen Technologies",
    email: "vikram@nextgen.com",
    phone: "+91 98765 11111",
    interest: "Virtual Office Premium",
    space: "Mumbai - BKC",
    date: "Feb 2, 2024",
    status: "new"
  },
  {
    id: "ENQ-002",
    name: "Sneha Reddy",
    company: "Creative Hub Studios",
    email: "sneha@creativehub.com",
    phone: "+91 87654 22222",
    interest: "Team Space",
    space: "Bangalore - HSR",
    date: "Feb 1, 2024",
    status: "new"
  },
  {
    id: "ENQ-003",
    name: "Arjun Kapoor",
    company: "Fintech Solutions",
    email: "arjun@fintechsol.com",
    phone: "+91 76543 33333",
    interest: "Meeting Room",
    space: "Delhi - CP",
    date: "Jan 31, 2024",
    status: "contacted"
  },
];

const convertedEnquiries = [
  {
    id: "ENQ-089",
    name: "Rahul Sharma",
    company: "Tech Innovations Pvt Ltd",
    interest: "Virtual Office Premium",
    convertedDate: "Jan 28, 2024",
    value: "₹45,000/year"
  },
  {
    id: "ENQ-085",
    name: "Priya Patel",
    company: "StartupXYZ Solutions",
    interest: "Team Space",
    convertedDate: "Jan 20, 2024",
    value: "₹32,500/month"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "new":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">New</Badge>;
    case "contacted":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Contacted</Badge>;
    case "converted":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Converted</Badge>;
    case "lost":
      return <Badge variant="secondary">Lost</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const ClientEnquiries = () => {
  const [selectedEnquiry, setSelectedEnquiry] = useState<typeof newEnquiries[0] | null>(null);
  const [chatModalOpen, setChatModalOpen] = useState(false);

  const handleStartChat = (enquiry: typeof newEnquiries[0]) => {
    setSelectedEnquiry(enquiry);
    setChatModalOpen(true);
  };

  const handleCall = (phone: string) => {
    toast({
      title: "Initiating Call",
      description: `Calling ${phone}...`,
    });
  };

  const handleMarkConverted = (enquiry: typeof newEnquiries[0]) => {
    toast({
      title: "Enquiry Converted",
      description: `${enquiry.company} has been marked as converted.`,
    });
  };

  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Client <span className="text-primary italic">Enquiries</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage and convert incoming client enquiries
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">12</p>
          <p className="text-sm text-muted-foreground">New Enquiries</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">8</p>
          <p className="text-sm text-muted-foreground">In Progress</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">24</p>
          <p className="text-sm text-muted-foreground">Converted</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">68%</p>
          <p className="text-sm text-muted-foreground">Conversion Rate</p>
        </div>
      </div>

      <Tabs defaultValue="new" className="space-y-6">
        <TabsList>
          <TabsTrigger value="new">New & In Progress</TabsTrigger>
          <TabsTrigger value="converted">Converted</TabsTrigger>
        </TabsList>
        
        <TabsContent value="new">
          <div className="space-y-4">
            {newEnquiries.map((enquiry) => (
              <div key={enquiry.id} className="bg-background border border-border rounded-xl p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm text-muted-foreground">{enquiry.id}</span>
                      {getStatusBadge(enquiry.status)}
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{enquiry.name}</h3>
                    <p className="text-muted-foreground">{enquiry.company}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {enquiry.date}
                  </div>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-4 py-4 border-y border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Interest</p>
                    <p className="text-sm font-medium text-foreground">{enquiry.interest}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Space</p>
                    <div className="flex items-center gap-1 text-sm text-foreground">
                      <MapPin className="w-3 h-3" />
                      {enquiry.space}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm text-foreground">{enquiry.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-sm text-foreground">{enquiry.phone}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm" onClick={() => handleStartChat(enquiry)}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Chat
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleCall(enquiry.phone)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleMarkConverted(enquiry)}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark Converted
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="converted">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">ID</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Company</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Product</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Converted Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Deal Value</th>
                </tr>
              </thead>
              <tbody>
                {convertedEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-foreground">{enquiry.id}</td>
                    <td className="p-4 text-sm text-foreground">{enquiry.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{enquiry.company}</td>
                    <td className="p-4 text-sm text-muted-foreground">{enquiry.interest}</td>
                    <td className="p-4 text-sm text-muted-foreground">{enquiry.convertedDate}</td>
                    <td className="p-4 text-sm font-semibold text-green-600">{enquiry.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      <EnquiryChatModal
        enquiry={selectedEnquiry}
        open={chatModalOpen}
        onOpenChange={setChatModalOpen}
      />
    </DashboardLayout>
  );
};

export default ClientEnquiries;
