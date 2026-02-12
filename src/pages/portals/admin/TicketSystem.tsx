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
  Plus,
  Search,
  Clock,
  AlertCircle,
  CheckCircle,
  Eye
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TicketViewModal } from "@/components/modals/TicketViewModal";
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

const allTickets = [
  {
    id: "TKT-001",
    subject: "Mail forwarding delay",
    client: "Tech Innovations Pvt Ltd",
    priority: "high",
    category: "Mail Services",
    assignee: "Support Team A",
    created: "2 hours ago",
    deadline: "4 hours",
    status: "open",
    description: "Our mails are getting delayed by 2-3 days. Need urgent resolution."
  },
  {
    id: "TKT-002",
    subject: "Meeting room booking issue",
    client: "StartupXYZ Solutions",
    priority: "medium",
    category: "Bookings",
    assignee: "Support Team B",
    created: "1 day ago",
    deadline: "2 days",
    status: "in_progress",
    description: "Unable to book meeting room for next week. System shows unavailable."
  },
  {
    id: "TKT-003",
    subject: "Invoice discrepancy",
    client: "Global Consulting LLC",
    priority: "low",
    category: "Billing",
    assignee: "Finance Team",
    created: "3 days ago",
    deadline: "5 days",
    status: "in_progress",
    description: "The invoice amount doesn't match the agreed rate. Please review."
  },
  {
    id: "TKT-004",
    subject: "KYC document rejection",
    client: "Design Studio Co",
    priority: "high",
    category: "Compliance",
    assignee: "Compliance Team",
    created: "5 hours ago",
    deadline: "1 day",
    status: "escalated",
    description: "KYC documents were rejected. Need clarification on requirements."
  },
  {
    id: "TKT-005",
    subject: "Virtual address not updating",
    client: "CloudTech Systems",
    priority: "medium",
    category: "Address Services",
    assignee: "Support Team A",
    created: "6 hours ago",
    deadline: "12 hours",
    status: "open",
    description: "Changed address 3 days ago but still shows old address on documents."
  },
];

const openTickets = allTickets.filter(t => t.status === "open");
const escalatedTickets = allTickets.filter(t => t.status === "escalated");
const resolvedTickets = [
  {
    id: "TKT-098",
    subject: "GST registration assistance",
    client: "DataFlow Analytics",
    priority: "medium",
    category: "Compliance",
    assignee: "Compliance Team",
    created: "5 days ago",
    deadline: "Completed",
    status: "resolved",
    description: "Need help with GST registration process."
  },
  {
    id: "TKT-097",
    subject: "Access card not working",
    client: "GreenTech Innovations",
    priority: "high",
    category: "Facilities",
    assignee: "Facilities Team",
    created: "6 days ago",
    deadline: "Completed",
    status: "resolved",
    description: "Access card stopped working suddenly."
  },
  {
    id: "TKT-096",
    subject: "WiFi connectivity issues",
    client: "StartupNest",
    priority: "high",
    category: "IT Support",
    assignee: "IT Team",
    created: "1 week ago",
    deadline: "Completed",
    status: "resolved",
    description: "Frequent WiFi disconnections in meeting room 3."
  },
];

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge variant="destructive">High</Badge>;
    case "medium":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Medium</Badge>;
    case "low":
      return <Badge variant="secondary">Low</Badge>;
    default:
      return <Badge variant="outline">{priority}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "open":
      return <Badge variant="outline"><AlertCircle className="w-3 h-3 mr-1" />Open</Badge>;
    case "in_progress":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100"><Clock className="w-3 h-3 mr-1" />In Progress</Badge>;
    case "escalated":
      return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Escalated</Badge>;
    case "resolved":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Resolved</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const TicketSystem = () => {
  const [selectedTicket, setSelectedTicket] = useState<typeof allTickets[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewTicket = (ticket: typeof allTickets[0]) => {
    setSelectedTicket(ticket);
    setModalOpen(true);
  };

  const handleCreateTicket = () => {
    toast({
      title: "Create Ticket",
      description: "Opening ticket creation form...",
    });
  };

  const renderTicketTable = (tickets: typeof allTickets) => (
    <div className="bg-background border border-border rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Ticket</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Category</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Priority</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Assignee</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Deadline</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-t border-border hover:bg-muted/30 transition-colors">
              <td className="p-4">
                <div>
                  <span className="text-xs text-muted-foreground">{ticket.id}</span>
                  <p className="font-medium text-foreground">{ticket.subject}</p>
                </div>
              </td>
              <td className="p-4 text-sm text-muted-foreground">{ticket.client}</td>
              <td className="p-4">
                <Badge variant="outline">{ticket.category}</Badge>
              </td>
              <td className="p-4">{getPriorityBadge(ticket.priority)}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs bg-primary/10 text-primary">
                      {ticket.assignee.split(' ').map(w => w[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{ticket.assignee}</span>
                </div>
              </td>
              <td className="p-4 text-sm text-muted-foreground">{ticket.deadline}</td>
              <td className="p-4">{getStatusBadge(ticket.status)}</td>
              <td className="p-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleViewTicket(ticket)}
                  className="gap-1"
                >
                  <Eye className="w-4 h-4" />
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tickets.length === 0 && (
        <div className="p-8 text-center text-muted-foreground">
          No tickets in this category
        </div>
      )}
    </div>
  );

  return (
    <DashboardLayout
      portalName="FlashSpace Admin"
      portalDescription="Complete platform management"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Ticket <span className="text-primary italic">System</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and resolve support tickets
          </p>
        </div>
        <Button onClick={handleCreateTicket}>
          <Plus className="w-4 h-4 mr-2" />
          Create Ticket
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-5 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">47</p>
          <p className="text-sm text-muted-foreground">Open Tickets</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-blue-600">23</p>
          <p className="text-sm text-muted-foreground">In Progress</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-red-600">8</p>
          <p className="text-sm text-muted-foreground">Escalated</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-green-600">156</p>
          <p className="text-sm text-muted-foreground">Resolved (MTD)</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">4.2 hrs</p>
          <p className="text-sm text-muted-foreground">Avg Resolution</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search tickets..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Tickets ({allTickets.length})</TabsTrigger>
          <TabsTrigger value="open">Open ({openTickets.length})</TabsTrigger>
          <TabsTrigger value="escalated">Escalated ({escalatedTickets.length})</TabsTrigger>
          <TabsTrigger value="resolved">Resolved ({resolvedTickets.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {renderTicketTable(allTickets)}
        </TabsContent>

        <TabsContent value="open">
          {renderTicketTable(openTickets)}
        </TabsContent>

        <TabsContent value="escalated">
          {renderTicketTable(escalatedTickets)}
        </TabsContent>

        <TabsContent value="resolved">
          {renderTicketTable(resolvedTickets)}
        </TabsContent>
      </Tabs>

      <TicketViewModal
        ticket={selectedTicket}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </DashboardLayout>
  );
};

export default TicketSystem;
