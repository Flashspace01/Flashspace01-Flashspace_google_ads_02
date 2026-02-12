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
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  User
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

const openTickets = [
  {
    id: "TKT-001",
    subject: "Mail forwarding request pending",
    client: "Tech Innovations Pvt Ltd",
    priority: "high",
    assignee: "Raj Kumar",
    created: "Feb 2, 2024",
    deadline: "Feb 3, 2024",
    status: "open"
  },
  {
    id: "TKT-002",
    subject: "Meeting room booking confirmation needed",
    client: "StartupXYZ Solutions",
    priority: "medium",
    assignee: "Priya Sharma",
    created: "Feb 1, 2024",
    deadline: "Feb 2, 2024",
    status: "in_progress"
  },
  {
    id: "TKT-003",
    subject: "Document verification follow-up",
    client: "Global Consulting LLC",
    priority: "low",
    assignee: "Unassigned",
    created: "Jan 30, 2024",
    deadline: "Feb 5, 2024",
    status: "open"
  },
];

const tasks = [
  {
    id: "TSK-001",
    title: "Update pricing for Q2",
    assignee: "Self",
    dueDate: "Feb 10, 2024",
    status: "pending"
  },
  {
    id: "TSK-002",
    title: "Review client agreements for renewal",
    assignee: "Raj Kumar",
    dueDate: "Feb 5, 2024",
    status: "in_progress"
  },
  {
    id: "TSK-003",
    title: "Prepare monthly revenue report",
    assignee: "Priya Sharma",
    dueDate: "Feb 3, 2024",
    status: "completed"
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
    case "completed":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const TicketsTasks = () => {
  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Tickets & <span className="text-primary italic">Tasks</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage support tickets and team tasks
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Task
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">5</p>
          <p className="text-sm text-muted-foreground">Open Tickets</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">3</p>
          <p className="text-sm text-muted-foreground">In Progress</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">12</p>
          <p className="text-sm text-muted-foreground">Resolved This Week</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">4.2 hrs</p>
          <p className="text-sm text-muted-foreground">Avg Response Time</p>
        </div>
      </div>

      <Tabs defaultValue="tickets" className="space-y-6">
        <TabsList>
          <TabsTrigger value="tickets">Client Tickets</TabsTrigger>
          <TabsTrigger value="tasks">Team Tasks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tickets">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Ticket</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Client</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Priority</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Assignee</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Deadline</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {openTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-t border-border">
                    <td className="p-4">
                      <div>
                        <span className="text-xs text-muted-foreground">{ticket.id}</span>
                        <p className="text-sm font-medium text-foreground">{ticket.subject}</p>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{ticket.client}</td>
                    <td className="p-4">{getPriorityBadge(ticket.priority)}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {ticket.assignee.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{ticket.assignee}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{ticket.deadline}</td>
                    <td className="p-4">{getStatusBadge(ticket.status)}</td>
                    <td className="p-4">
                      <Button variant="outline" size="sm">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="tasks">
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="bg-background border border-border rounded-xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    task.status === 'completed' ? 'bg-green-100' : 'bg-muted'
                  }`}>
                    {task.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h4 className={`font-medium ${task.status === 'completed' ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                      {task.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">Assigned to: {task.assignee}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                  </div>
                  {getStatusBadge(task.status)}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default TicketsTasks;
