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
  Edit,
  Trash2,
  MoreVertical
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const teamMembers = [
  {
    id: 1,
    name: "Raj Kumar",
    email: "raj.kumar@flashspace.com",
    role: "Operations Manager",
    spaces: ["Mumbai - BKC", "Delhi - CP"],
    status: "active",
    permissions: ["full_access"]
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@flashspace.com",
    role: "Client Relations",
    spaces: ["Bangalore - HSR"],
    status: "active",
    permissions: ["client_management", "enquiries"]
  },
  {
    id: 3,
    name: "Amit Verma",
    email: "amit.verma@flashspace.com",
    role: "Accounts Executive",
    spaces: ["All Spaces"],
    status: "active",
    permissions: ["payments", "invoices"]
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@flashspace.com",
    role: "Front Desk",
    spaces: ["Chennai - Anna Nagar"],
    status: "inactive",
    permissions: ["mail_visits"]
  },
];

const roles = [
  { name: "Operations Manager", count: 1 },
  { name: "Client Relations", count: 2 },
  { name: "Accounts Executive", count: 1 },
  { name: "Front Desk", count: 3 },
];

const TeamMembers = () => {
  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Team <span className="text-primary italic">Members</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your team and their access permissions
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Team Member
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Team Members List */}
        <div className="lg:col-span-3">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Member</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Role</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Assigned Spaces</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-foreground">{member.name}</div>
                          <div className="text-sm text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{member.role}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {member.spaces.map((space, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {space}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={member.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-100'}>
                        {member.status === 'active' ? 'Active' : 'Inactive'}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Roles Summary */}
        <div className="space-y-4">
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Roles Overview</h3>
            <div className="space-y-3">
              {roles.map((role) => (
                <div key={role.name} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{role.name}</span>
                  <Badge variant="outline">{role.count}</Badge>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-background border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Members</span>
                <span className="font-semibold text-foreground">7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active</span>
                <span className="font-semibold text-green-600">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Inactive</span>
                <span className="font-semibold text-muted-foreground">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamMembers;
