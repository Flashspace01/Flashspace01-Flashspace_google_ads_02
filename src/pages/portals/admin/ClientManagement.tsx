import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  LayoutDashboard, 
  Users,
  TrendingUp,
  Ticket,
  BookOpen,
  Trophy,
  Target,
  Headphones,
  Calculator,
  FileText,
  Wallet,
  Receipt,
  Search,
  Filter,
  Eye,
  MessageSquare,
  MoreVertical,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ClientViewModal } from "@/components/modals/ClientViewModal";
import { ClientChatModal } from "@/components/modals/ClientChatModal";
import { toast } from "@/hooks/use-toast";

const navItems = [
  { label: "Dashboard", href: "/admin-portal", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Sales Analytics", href: "/admin-portal/sales", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Lead Management", href: "/admin-portal/leads", icon: <Target className="w-5 h-5" /> },
  { label: "Client Management", href: "/admin-portal/clients", icon: <Users className="w-5 h-5" /> },
  { label: "Ticket System", href: "/admin-portal/tickets", icon: <Ticket className="w-5 h-5" /> },
  { label: "Support Chats", href: "/admin-portal/support", icon: <Headphones className="w-5 h-5" /> },
  { label: "Learning Hub", href: "/admin-portal/learning", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Leaderboard", href: "/admin-portal/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  { label: "Revenue Dashboard", href: "/admin-portal/revenue", icon: <Wallet className="w-5 h-5" /> },
  { label: "Invoices", href: "/admin-portal/invoices", icon: <Receipt className="w-5 h-5" /> },
  { label: "Receivable/Payable", href: "/admin-portal/finance", icon: <Calculator className="w-5 h-5" /> },
  { label: "Balance Sheet", href: "/admin-portal/balance", icon: <FileText className="w-5 h-5" /> },
];

const clients = [
  {
    id: "CL-001",
    name: "Tech Innovations Pvt Ltd",
    contact: "Rahul Sharma",
    email: "rahul@techinnovations.com",
    plan: "Virtual Office Premium",
    space: "Mumbai - BKC",
    startDate: "Jan 15, 2024",
    renewal: "Jan 15, 2025",
    revenue: "₹45,000",
    status: "active",
    healthScore: 92
  },
  {
    id: "CL-002",
    name: "StartupXYZ Solutions",
    contact: "Priya Patel",
    email: "priya@startupxyz.com",
    plan: "Team Space",
    space: "Delhi - CP",
    startDate: "Dec 1, 2023",
    renewal: "Nov 30, 2024",
    revenue: "₹1,20,000",
    status: "active",
    healthScore: 78
  },
  {
    id: "CL-003",
    name: "Global Consulting LLC",
    contact: "Amit Kumar",
    email: "amit@globalconsulting.com",
    plan: "Virtual Office Standard",
    space: "Bangalore - HSR",
    startDate: "Feb 1, 2024",
    renewal: "Jan 31, 2025",
    revenue: "₹28,000",
    status: "at_risk",
    healthScore: 45
  },
  {
    id: "CL-004",
    name: "Design Studio Co",
    contact: "Neha Singh",
    email: "neha@designstudio.com",
    plan: "Hot Desk Monthly",
    space: "Chennai - Anna Nagar",
    startDate: "Jan 10, 2024",
    renewal: "Feb 10, 2024",
    revenue: "₹8,000",
    status: "churned",
    healthScore: 0
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>;
    case "at_risk":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">At Risk</Badge>;
    case "churned":
      return <Badge variant="secondary">Churned</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getHealthColor = (score: number) => {
  if (score >= 70) return "bg-green-500";
  if (score >= 50) return "bg-yellow-500";
  return "bg-red-500";
};

const ClientManagement = () => {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

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
        toast({ title: "Renewal Reminder Sent", description: `Renewal reminder sent to ${client.name}` });
        break;
      case "schedule_call":
        toast({ title: "Call Scheduled", description: `Call scheduled with ${client.contact}` });
        break;
      case "view_invoices":
        toast({ title: "Loading Invoices", description: `Fetching invoices for ${client.name}` });
        break;
      case "export_data":
        toast({ title: "Exporting Data", description: `Client data export started for ${client.name}` });
        break;
    }
  };

  const filteredClients = activeTab === "all" 
    ? clients 
    : clients.filter(c => c.status === activeTab);

  const renderClientTable = (clientList: typeof clients) => (
    <div className="bg-background border border-border rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Plan</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Space</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Revenue</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Health</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clientList.map((client) => (
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
                <Badge variant="outline">{client.plan}</Badge>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {client.space}
                </div>
              </td>
              <td className="p-4 font-semibold text-foreground">{client.revenue}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-2 rounded-full ${getHealthColor(client.healthScore)}`} />
                  <span className="text-sm text-muted-foreground">{client.healthScore}</span>
                </div>
              </td>
              <td className="p-4">{getStatusBadge(client.status)}</td>
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
                      <DropdownMenuItem onClick={() => handleClientAction("schedule_call", client)}>
                        Schedule Call
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleClientAction("view_invoices", client)}>
                        View Invoices
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
  );

  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Client <span className="text-primary italic">Management</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage all clients and track their health scores
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">1,234</p>
          <p className="text-sm text-muted-foreground">Total Clients</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-green-600">1,089</p>
          <p className="text-sm text-muted-foreground">Active</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-yellow-600">98</p>
          <p className="text-sm text-muted-foreground">At Risk</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">47</p>
          <p className="text-sm text-muted-foreground">Churned (YTD)</p>
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Clients</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="at_risk">At Risk</TabsTrigger>
          <TabsTrigger value="churned">Churned</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">{renderClientTable(filteredClients)}</TabsContent>
        <TabsContent value="active">{renderClientTable(filteredClients)}</TabsContent>
        <TabsContent value="at_risk">{renderClientTable(filteredClients)}</TabsContent>
        <TabsContent value="churned">{renderClientTable(filteredClients)}</TabsContent>
      </Tabs>

      {/* Modals */}
      <ClientViewModal
        client={selectedClient}
        open={viewModalOpen}
        onOpenChange={setViewModalOpen}
        onOpenChat={() => setChatModalOpen(true)}
      />
      <ClientChatModal
        client={selectedClient}
        open={chatModalOpen}
        onOpenChange={setChatModalOpen}
      />
    </DashboardLayout>
  );
};

export default ClientManagement;
