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
  Filter,
  Phone,
  Mail,
  MoreVertical,
  Eye,
  MessageSquare
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

const allLeads = [
  {
    id: "LD-001",
    name: "Vikram Technologies",
    contact: "Ravi Kumar",
    email: "ravi@vikramtech.com",
    phone: "+91 98765 11111",
    source: "Website",
    interest: "Virtual Office",
    score: 92,
    status: "hot",
    assignee: "Rahul S.",
    lastActivity: "30 min ago",
    notes: "Ready to sign, needs pricing confirmation"
  },
  {
    id: "LD-002",
    name: "Startup Labs India",
    contact: "Priya Menon",
    email: "priya@startuplabs.in",
    phone: "+91 87654 22222",
    source: "Referral",
    interest: "Team Space",
    score: 88,
    status: "hot",
    assignee: "Amit K.",
    lastActivity: "1 hour ago",
    notes: "Visited space, very interested"
  },
  {
    id: "LD-003",
    name: "CloudFirst Systems",
    contact: "Arjun Reddy",
    email: "arjun@cloudfirst.io",
    phone: "+91 76543 33333",
    source: "LinkedIn",
    interest: "Virtual Office Premium",
    score: 85,
    status: "hot",
    assignee: "Priya P.",
    lastActivity: "2 hours ago",
    notes: "Budget approved, finalizing location"
  },
  {
    id: "LD-004",
    name: "Design Hub Studios",
    contact: "Neha Reddy",
    email: "neha@designhub.io",
    phone: "+91 65432 44444",
    source: "Google Ads",
    interest: "Day Pass",
    score: 68,
    status: "warm",
    assignee: "Rahul S.",
    lastActivity: "3 hours ago",
    notes: "Requested callback next week"
  },
  {
    id: "LD-005",
    name: "Global Fintech Co",
    contact: "Arjun Shah",
    email: "arjun@globalfintech.com",
    phone: "+91 76543 55555",
    source: "LinkedIn",
    interest: "Meeting Room",
    score: 72,
    status: "warm",
    assignee: "Priya P.",
    lastActivity: "5 hours ago",
    notes: "Comparing with competitors"
  },
  {
    id: "LD-006",
    name: "TechNova Solutions",
    contact: "Meera Joshi",
    email: "meera@technova.in",
    phone: "+91 54321 66666",
    source: "Website",
    interest: "Virtual Office",
    score: 45,
    status: "cold",
    assignee: "Amit K.",
    lastActivity: "5 days ago",
    notes: "Not responding to follow-ups"
  },
];

const hotLeads = allLeads.filter(l => l.status === "hot");
const warmLeads = allLeads.filter(l => l.status === "warm");
const coldLeads = allLeads.filter(l => l.status === "cold");

const getStatusBadge = (status: string) => {
  switch (status) {
    case "hot":
      return <Badge variant="destructive">Hot Lead</Badge>;
    case "warm":
      return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Warm</Badge>;
    case "cold":
      return <Badge variant="secondary">Cold</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-green-600";
  if (score >= 60) return "text-yellow-600";
  return "text-red-600";
};

const LeadManagement = () => {
  const [selectedLead, setSelectedLead] = useState<typeof allLeads[0] | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleView = (lead: typeof allLeads[0]) => {
    setSelectedLead(lead);
    setViewModalOpen(true);
  };

  const handleCall = (phone: string) => {
    toast({
      title: "Initiating Call",
      description: `Calling ${phone}...`,
    });
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleAddLead = () => {
    toast({
      title: "Add New Lead",
      description: "Opening lead creation form...",
    });
  };

  const renderLeadTable = (leads: typeof allLeads) => (
    <div className="bg-background border border-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Lead</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Interest</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Source</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">AI Score</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Assignee</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Last Activity</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div>
                    <div className="font-medium text-foreground">{lead.name}</div>
                    <div className="text-sm text-muted-foreground">{lead.contact}</div>
                  </div>
                </td>
                <td className="p-4">
                  <Badge variant="outline">{lead.interest}</Badge>
                </td>
                <td className="p-4 text-sm text-muted-foreground">{lead.source}</td>
                <td className="p-4">
                  <span className={`font-bold text-lg ${getScoreColor(lead.score)}`}>{lead.score}</span>
                </td>
                <td className="p-4">{getStatusBadge(lead.status)}</td>
                <td className="p-4 text-sm text-muted-foreground">{lead.assignee}</td>
                <td className="p-4 text-sm text-muted-foreground">{lead.lastActivity}</td>
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
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleCall(lead.phone)}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEmail(lead.email)}
                    >
                      <Mail className="w-4 h-4" />
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
      {leads.length === 0 && (
        <div className="p-8 text-center text-muted-foreground">
          No leads in this category
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
            Lead <span className="text-primary italic">Management</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Track, score, and convert leads with AI assistance
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
          <p className="text-2xl font-extrabold text-foreground">156</p>
          <p className="text-sm text-muted-foreground">Total Leads</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-red-600">{hotLeads.length}</p>
          <p className="text-sm text-muted-foreground">Hot Leads</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-orange-600">{warmLeads.length}</p>
          <p className="text-sm text-muted-foreground">Warm Leads</p>
        </div>
        <div className="bg-background border border-border rounded-xl p-5">
          <p className="text-2xl font-extrabold text-foreground">34.5%</p>
          <p className="text-sm text-muted-foreground">Conversion Rate</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search leads..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Leads ({allLeads.length})</TabsTrigger>
          <TabsTrigger value="hot">Hot ({hotLeads.length})</TabsTrigger>
          <TabsTrigger value="warm">Warm ({warmLeads.length})</TabsTrigger>
          <TabsTrigger value="cold">Cold ({coldLeads.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {renderLeadTable(allLeads)}
        </TabsContent>

        <TabsContent value="hot">
          {renderLeadTable(hotLeads)}
        </TabsContent>

        <TabsContent value="warm">
          {renderLeadTable(warmLeads)}
        </TabsContent>

        <TabsContent value="cold">
          {renderLeadTable(coldLeads)}
        </TabsContent>
      </Tabs>

      {/* Lead View Modal */}
      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedLead.name}</h3>
                  <p className="text-muted-foreground">{selectedLead.contact}</p>
                </div>
                {getStatusBadge(selectedLead.status)}
              </div>

              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Score</span>
                  <span className={`font-bold text-xl ${getScoreColor(selectedLead.score)}`}>{selectedLead.score}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Interest</span>
                  <Badge variant="outline">{selectedLead.interest}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Source</span>
                  <span className="text-foreground">{selectedLead.source}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Assigned To</span>
                  <span className="text-foreground">{selectedLead.assignee}</span>
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
                  <MessageSquare className="w-4 h-4 mr-2" />
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
