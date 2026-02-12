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
  Download,
  Eye,
  File,
  FileCheck,
  Upload
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const agreements = [
  {
    id: "AGR-001",
    name: "Virtual Office Agreement - Mumbai BKC",
    type: "Agreement",
    date: "Jan 15, 2024",
    status: "active",
    size: "2.4 MB"
  },
  {
    id: "AGR-002",
    name: "Service Level Agreement",
    type: "SLA",
    date: "Jan 15, 2024",
    status: "active",
    size: "1.2 MB"
  },
];

const kycDocuments = [
  {
    id: "KYC-001",
    name: "Company Registration Certificate",
    type: "KYC",
    date: "Jan 10, 2024",
    status: "verified",
    size: "856 KB"
  },
  {
    id: "KYC-002",
    name: "GST Registration",
    type: "KYC",
    date: "Jan 10, 2024",
    status: "verified",
    size: "428 KB"
  },
  {
    id: "KYC-003",
    name: "Director ID Proof",
    type: "KYC",
    date: "Jan 10, 2024",
    status: "pending",
    size: "1.1 MB"
  },
];

const invoices = [
  {
    id: "INV-2024-001",
    name: "Invoice - January 2024",
    type: "Invoice",
    date: "Jan 31, 2024",
    amount: "₹15,000",
    size: "156 KB"
  },
  {
    id: "INV-2023-012",
    name: "Invoice - December 2023",
    type: "Invoice",
    date: "Dec 31, 2023",
    amount: "₹12,000",
    size: "148 KB"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>;
    case "verified":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100"><FileCheck className="w-3 h-3 mr-1" />Verified</Badge>;
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending Review</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const DocumentRow = ({ doc }: { doc: any }) => (
  <div className="flex items-center justify-between p-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <File className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h4 className="font-medium text-foreground">{doc.name}</h4>
        <p className="text-sm text-muted-foreground">{doc.date} • {doc.size}</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      {doc.status && getStatusBadge(doc.status)}
      {doc.amount && <span className="font-semibold text-foreground">{doc.amount}</span>}
      <div className="flex gap-1">
        <Button variant="ghost" size="sm">
          <Eye className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

const Documents = () => {
  return (
    <DashboardLayout
      portalName="Customer Portal"
      portalDescription="Manage your workspace subscriptions"
      navItems={navItems}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            My <span className="text-primary italic">Documents</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Access all your agreements, KYC documents, and invoices
          </p>
        </div>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <Tabs defaultValue="agreements" className="space-y-6">
        <TabsList>
          <TabsTrigger value="agreements">Agreements</TabsTrigger>
          <TabsTrigger value="kyc">KYC Documents</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>
        
        <TabsContent value="agreements">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            {agreements.map((doc) => (
              <DocumentRow key={doc.id} doc={doc} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="kyc">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            {kycDocuments.map((doc) => (
              <DocumentRow key={doc.id} doc={doc} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="invoices">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            {invoices.map((doc) => (
              <DocumentRow key={doc.id} doc={doc} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Documents;
