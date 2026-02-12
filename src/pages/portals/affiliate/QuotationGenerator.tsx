import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Download,
  Share2,
  Eye,
  Sparkles
} from "lucide-react";

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

const recentQuotations = [
  {
    id: "QT-2024-089",
    client: "TechStart Solutions",
    space: "Private Office - 10 Seater",
    location: "Koramangala, Bangalore",
    amount: "₹85,000/month",
    date: "Jan 28, 2024",
    status: "sent"
  },
  {
    id: "QT-2024-088",
    client: "Creative Hub Co",
    space: "Dedicated Desk",
    location: "Indiranagar, Bangalore",
    amount: "₹12,000/month",
    date: "Jan 27, 2024",
    status: "viewed"
  },
  {
    id: "QT-2024-087",
    client: "DataFlow Analytics",
    space: "Meeting Room - 8 Hours",
    location: "HSR Layout, Bangalore",
    amount: "₹4,000",
    date: "Jan 26, 2024",
    status: "accepted"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "accepted":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "viewed":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "sent":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const QuotationGenerator = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  return (
    <DashboardLayout
      portalName="Affiliate Portal"
      portalDescription="Manage referrals and earnings"
      navItems={navItems}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          Quotation <span className="text-primary italic">Generator</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Create instant quotations with FlashSpace and your affiliate branding
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Quotation Form */}
        <div className="bg-background border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Create New Quotation</h2>
          </div>

          <div className="space-y-6">
            {/* Client Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Client Details</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input 
                    id="clientName" 
                    placeholder="Enter client name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientEmail">Email</Label>
                  <Input 
                    id="clientEmail" 
                    type="email"
                    placeholder="client@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientPhone">Phone</Label>
                  <Input 
                    id="clientPhone" 
                    placeholder="+91 98765 43210"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Company name" />
                </div>
              </div>
            </div>

            {/* Space Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Space Requirements</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Space Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select space type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private-office">Private Office</SelectItem>
                      <SelectItem value="dedicated-desk">Dedicated Desk</SelectItem>
                      <SelectItem value="hot-desk">Hot Desk</SelectItem>
                      <SelectItem value="meeting-room">Meeting Room</SelectItem>
                      <SelectItem value="virtual-office">Virtual Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>City</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi NCR</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Location/Area</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="koramangala">Koramangala</SelectItem>
                      <SelectItem value="indiranagar">Indiranagar</SelectItem>
                      <SelectItem value="hsr">HSR Layout</SelectItem>
                      <SelectItem value="whitefield">Whitefield</SelectItem>
                      <SelectItem value="mg-road">MG Road</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seats">Number of Seats</Label>
                  <Input id="seats" type="number" placeholder="e.g., 10" />
                </div>
                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Any specific requirements or preferences..."
                rows={3}
              />
            </div>

            {/* AI Suggestion */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">AI Price Suggestion</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on current market rates and your selected criteria, the recommended price range is <span className="font-semibold text-foreground">₹75,000 - ₹95,000/month</span> for this space type in the selected area.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Generate Quotation
              </Button>
              <Button variant="outline" className="gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Quotations */}
        <div className="space-y-6">
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">Recent Quotations</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {recentQuotations.map((quotation) => (
                <div 
                  key={quotation.id}
                  className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="font-mono text-sm font-medium text-primary">{quotation.id}</span>
                      <h4 className="font-semibold text-foreground">{quotation.client}</h4>
                    </div>
                    <Badge className={getStatusColor(quotation.status)}>
                      {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{quotation.space}</p>
                  <p className="text-sm text-muted-foreground">{quotation.location}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <div>
                      <span className="font-bold text-foreground">{quotation.amount}</span>
                      <span className="text-xs text-muted-foreground ml-2">{quotation.date}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Quotation Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground">89</div>
                <div className="text-sm text-muted-foreground">Total Sent</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground">67%</div>
                <div className="text-sm text-muted-foreground">View Rate</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground">34</div>
                <div className="text-sm text-muted-foreground">Accepted</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">38%</div>
                <div className="text-sm text-muted-foreground">Conversion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QuotationGenerator;
