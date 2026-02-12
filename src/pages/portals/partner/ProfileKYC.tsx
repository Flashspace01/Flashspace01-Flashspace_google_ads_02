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
  Upload,
  CheckCircle,
  Clock,
  Edit,
  FileText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const kycDocuments = [
  { name: "Company Registration Certificate", status: "verified", date: "Jan 15, 2024" },
  { name: "GST Registration Certificate", status: "verified", date: "Jan 15, 2024" },
  { name: "PAN Card", status: "verified", date: "Jan 15, 2024" },
  { name: "Bank Account Details", status: "verified", date: "Jan 15, 2024" },
  { name: "Address Proof", status: "pending", date: "Jan 20, 2024" },
];

const ProfileKYC = () => {
  return (
    <DashboardLayout
      portalName="Space Partner Portal"
      portalDescription="Manage your spaces and clients"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Profile & <span className="text-primary italic">KYC</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your company profile and KYC documents
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Company Profile</TabsTrigger>
          <TabsTrigger value="kyc">KYC Documents</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Company Information</h2>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Company Name</Label>
                <Input value="FlashSpace Premium Workspaces Pvt Ltd" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Partner ID</Label>
                <Input value="FSP-2024-001" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Contact Email</Label>
                <Input value="partner@flashspace.com" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Contact Phone</Label>
                <Input value="+91 98765 43210" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Registered Address</Label>
                <Input value="123, Business Park, Bandra Kurla Complex, Mumbai - 400051" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>GST Number</Label>
                <Input value="27AABCF1234D1Z5" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>PAN Number</Label>
                <Input value="AABCF1234D" readOnly className="bg-muted" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="kyc">
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground">KYC Documents</h2>
                <p className="text-sm text-muted-foreground">Upload and manage your verification documents</p>
              </div>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>
            
            <div className="space-y-4">
              {kycDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">Uploaded: {doc.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {doc.status === 'verified' ? (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending Review
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="bank">
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Bank Account Details</h2>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Update
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Account Holder Name</Label>
                <Input value="FlashSpace Premium Workspaces Pvt Ltd" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Bank Name</Label>
                <Input value="HDFC Bank" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Account Number</Label>
                <Input value="**** **** **** 4567" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>IFSC Code</Label>
                <Input value="HDFC0001234" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Branch</Label>
                <Input value="BKC Branch, Mumbai" readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Account Type</Label>
                <Input value="Current Account" readOnly className="bg-muted" />
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Bank Account Verified</span>
              </div>
              <p className="text-sm text-green-600 mt-1">Your bank account has been verified and is ready to receive payments.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default ProfileKYC;
