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
  Plus,
  Phone,
  Mail,
  MoreVertical,
  Search,
  Eye
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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

const allLeads = [
  { id: "LD-001", name: "Vikram Mehta", company: "NextGen Tech", email: "vikram@nextgen.com", phone: "+91 98765 11111", interest: "Virtual Office", status: "hot", lastContact: "2 hours ago", notes: "Ready to sign, needs pricing confirmation" },
  { id: "LD-002", name: "Sneha Reddy", company: "Creative Hub", email: "sneha@creativehub.com", phone: "+91 87654 22222", interest: "Team Space", status: "warm", lastContact: "1 day ago", notes: "Interested but comparing options" },
  { id: "LD-003", name: "Arjun Kapoor", company: "Fintech Sol", email: "arjun@fintechsol.com", phone: "+91 76543 33333", interest: "Meeting Room", status: "cold", lastContact: "5 days ago", notes: "Not responding to follow-ups" },
  { id: "LD-004", name: "Pooja Singh", company: "Design Co", email: "pooja@designco.in", phone: "+91 65432 44444", interest: "Day Pass", status: "warm", lastContact: "3 hours ago", notes: "Scheduling a visit next week" },
  { id: "LD-005", name: "Rahul Sharma", company: "Tech Innovations", email: "rahul@techinnovations.com", phone: "+91 54321 55555", interest: "Virtual Office Premium", status: "converted", lastContact: "1 week ago", notes: "Converted! Signed annual plan" },
];

const hotLeads = allLeads.filter(l => l.status === "hot");
const warmLeads = allLeads.filter(l => l.status === "warm");
const convertedLeads = allLeads.filter(l => l.status === "converted");

const getStatusBadge = (status: string) => {
  switch (status) {
    case "hot":
      return <Badge variant="destructive">Hot</Badge>;
    case "warm":
      return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Warm</Badge>;
    case "cold":
      return <Badge variant="secondary">Cold</Badge>;
    case "converted":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Converted</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const LeadManagement = () => {
  const [selectedLead, setSelectedLead] = useState<typeof allLeads[0] | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleCall = (phone: string) => {
    toast({
      title: "Initiating Call",
      description: `Calling ${phone}...`,
    });
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleView = (lead: typeof allLeads[0]) => {
    setSelectedLead(lead);
    setViewModalOpen(true);
  };

  const handleAddLead = () => {
    toast({
      title: "Add New Lead",
      description: "Opening lead creation form...",
    });
  };

  const handleLeadAction = (action: string, lead: typeof allLeads[0]) => {
    switch (action) {
      case "send_quotation":
        toast({ title: "Sending Quotation", description: `Generating quotation for ${lead.company}` });
        break;
      case "schedule_followup":
        toast({ title: "Follow-up Scheduled", description: `Follow-up scheduled for ${lead.name}` });
        break;
      case "mark_converted":
        toast({ title: "Lead Converted", description: `${lead.company} has been marked as converted` });
        break;
      case "add_note":
        toast({ title: "Add Note", description: `Opening notes editor for ${lead.name}` });
        break;
    }
  };

  const renderLeadTable = (leads: typeof allLeads) => (
    <div className="bg-background border border-border rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Lead</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Company</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Interest</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Last Contact</th>
            <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t border-border hover:bg-muted/30 transition-colors">
              <td className="p-4">
                <div>
                  <div className="font-medium text-foreground">{lead.name}</div>
                  <div className="text-sm text-muted-foreground">{lead.phone}</div>
                </div>
              </td>
              <td className="p-4 text-muted-foreground">{lead.company}</td>
              <td className="p-4"><Badge variant="outline">{lead.interest}</Badge></td>
              <td className="p-4">{getStatusBadge(lead.status)}</td>
              <td className="p-4 text-sm text-muted-foreground">{lead.lastContact}</td>
              <td className="p-4">
                <div className="flex gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleView(lead)}
                    className="bg-primary/10 hover:bg-primary/20"
                  >
                    <Eye className="w-4 h-4 text-primary" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleCall(lead.phone)}>
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleEmail(lead.email)}>
                    <Mail className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleLeadAction("send_quotation", lead)}>
                        Send Quotation
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleLeadAction("schedule_followup", lead)}>
                        Schedule Follow-up
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleLeadAction("add_note", lead)}>
                        Add Note
                      </DropdownMenuItem>
                      {lead.status !== "converted" && (
                        <DropdownMenuItem onClick={() => handleLeadAction("mark_converted", lead)}>
                          Mark as Converted
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {leads.length === 0 && (
        <div className="p-8 text-center text-muted-foreground">
          No leads in this category
        </div>
      )}
    </div>
  );

  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            Lead <span className="text-primary italic">Management</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Track and manage your referral leads
          </p>
        </div>
        <Button onClick={handleAddLead}>
          <Plus className="w-4 h-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4 mb-8">
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">{allLeads.length}</p>
          <p className="text-sm text-muted-foreground">Total Leads</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-red-600">{hotLeads.length}</p>
          <p className="text-sm text-muted-foreground">Hot Leads</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-green-600">{convertedLeads.length}</p>
          <p className="text-sm text-muted-foreground">Converted</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">38%</p>
          <p className="text-sm text-muted-foreground">Conversion Rate</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search leads..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Leads ({allLeads.length})</TabsTrigger>
          <TabsTrigger value="hot">Hot ({hotLeads.length})</TabsTrigger>
          <TabsTrigger value="warm">Warm ({warmLeads.length})</TabsTrigger>
          <TabsTrigger value="converted">Converted ({convertedLeads.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">{renderLeadTable(allLeads)}</TabsContent>
        <TabsContent value="hot">{renderLeadTable(hotLeads)}</TabsContent>
        <TabsContent value="warm">{renderLeadTable(warmLeads)}</TabsContent>
        <TabsContent value="converted">{renderLeadTable(convertedLeads)}</TabsContent>
      </Tabs>

      {/* Lead View Modal */}
      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Lead Details</span>
              {selectedLead && getStatusBadge(selectedLead.status)}
            </DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Lead ID</p>
                <p className="text-lg font-mono font-bold text-primary">{selectedLead.id}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{selectedLead.name}</h3>
                <p className="text-muted-foreground">{selectedLead.company}</p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Interest</span>
                  <Badge variant="outline">{selectedLead.interest}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Contact</span>
                  <span className="text-foreground">{selectedLead.lastContact}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Contact Information</h4>
                <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{selectedLead.email}</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">{selectedLead.phone}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Notes</h4>
                <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">{selectedLead.notes}</p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => handleCall(selectedLead.phone)}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button className="flex-1" onClick={() => handleEmail(selectedLead.email)}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default LeadManagement;
