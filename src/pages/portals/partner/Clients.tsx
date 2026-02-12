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
  Search,
  Filter,
  Eye,
  MoreVertical,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PartnerClientViewModal } from "@/components/modals/PartnerClientViewModal";
import { PartnerClientChatModal } from "@/components/modals/PartnerClientChatModal";
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

const clients = [
  {
    id: "CL-001",
    name: "Tech Innovations Pvt Ltd",
    contact: "Rahul Sharma",
    email: "rahul@techinnovations.com",
    phone: "+91 98765 43210",
    plan: "Virtual Office Premium",
    space: "Mumbai - BKC",
    startDate: "Jan 15, 2024",
    endDate: "Jan 15, 2025",
    status: "active",
    kycStatus: "verified"
  },
  {
    id: "CL-002",
    name: "StartupXYZ Solutions",
    contact: "Priya Patel",
    email: "priya@startupxyz.com",
    phone: "+91 87654 32109",
    plan: "Team Space",
    space: "Delhi - CP",
    startDate: "Dec 1, 2023",
    endDate: "Nov 30, 2024",
    status: "active",
    kycStatus: "verified"
  },
  {
    id: "CL-003",
    name: "Global Consulting LLC",
    contact: "Amit Kumar",
    email: "amit@globalconsulting.com",
    phone: "+91 76543 21098",
    plan: "Virtual Office Standard",
    space: "Bangalore - HSR",
    startDate: "Feb 1, 2024",
    endDate: "Jan 31, 2025",
    status: "active",
    kycStatus: "pending"
  },
  {
    id: "CL-004",
    name: "Design Studio Co",
    contact: "Neha Singh",
    email: "neha@designstudio.com",
    phone: "+91 65432 10987",
    plan: "Hot Desk Monthly",
    space: "Chennai - Anna Nagar",
    startDate: "Jan 10, 2024",
    endDate: "Feb 10, 2024",
    status: "expiring",
    kycStatus: "verified"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>;
    case "expiring":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Expiring Soon</Badge>;
    case "expired":
      return <Badge variant="destructive">Expired</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getKycBadge = (status: string) => {
  switch (status) {
    case "verified":
      return <Badge variant="outline" className="text-green-600 border-green-300">KYC Verified</Badge>;
    case "pending":
      return <Badge variant="outline" className="text-yellow-600 border-yellow-300">KYC Pending</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);

  const handleViewClient = (client: typeof clients[0]) => {
    setSelectedClient(client);
    setViewModalOpen(true);
  };

  const handleChatClient = (client: typeof clients[0]) => {
    setSelectedClient(client);
    setChatModalOpen(true);
  };

  const handleClientAction = (action: string, client: typeof clients[0]) => {
    switch (action) {
      case "send_renewal":
        toast({ title: "Renewal Reminder Sent", description: `Renewal reminder sent to ${client.contact}` });
        break;
      case "view_invoices":
        toast({ title: "Loading Invoices", description: `Fetching invoices for ${client.name}` });
        break;
      case "view_mail":
        toast({ title: "Loading Mail Records", description: `Fetching mail records for ${client.name}` });
        break;
      case "export_data":
        toast({ title: "Exporting Data", description: `Client data export started for ${client.name}` });
        break;
    }
  };

  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            My <span className="text-primary italic">Clients</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage all your client relationships
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search clients..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Clients Table */}
      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Plan</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Space</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Duration</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">KYC</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground">{client.name}</div>
                      <div className="text-sm text-muted-foreground">{client.contact}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm font-medium text-foreground">{client.plan}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {client.space}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm">
                    <div className="text-foreground">{client.startDate}</div>
                    <div className="text-muted-foreground">to {client.endDate}</div>
                  </div>
                </td>
                <td className="p-4">{getStatusBadge(client.status)}</td>
                <td className="p-4">{getKycBadge(client.kycStatus)}</td>
                <td className="p-4">
                  <div className="flex gap-1">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewClient(client)}
                      className="hover:bg-primary/10"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleChatClient(client)}
                      className="hover:bg-primary/10"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleClientAction("send_renewal", client)}>
                          Send Renewal Reminder
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleClientAction("view_invoices", client)}>
                          View Invoices
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleClientAction("view_mail", client)}>
                          View Mail Records
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleClientAction("export_data", client)}>
                          Export Client Data
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <PartnerClientViewModal
        client={selectedClient}
        open={viewModalOpen}
        onOpenChange={setViewModalOpen}
        onOpenChat={() => setChatModalOpen(true)}
      />
      <PartnerClientChatModal
        client={selectedClient}
        open={chatModalOpen}
        onOpenChange={setChatModalOpen}
      />
    </DashboardLayout>
  );
};

export default Clients;
